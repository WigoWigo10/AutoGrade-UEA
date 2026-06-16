// ── IMPORT ───────────────────────────────────────────────────────────────────
function openImport(){document.getElementById('import-overlay').classList.add('open');resetImport();}
function closeImport(){document.getElementById('import-overlay').classList.remove('open');}
function resetImport(){
  document.getElementById('import-progress').classList.remove('show');
  document.getElementById('import-results').innerHTML='';
  document.getElementById('import-confirm-btn').classList.remove('show');
  document.getElementById('import-status').innerHTML='';
  pendingImport=[];
}

function handleDrop(e){
  e.preventDefault();
  document.getElementById('drop-zone').classList.remove('drag-over');
  const f=e.dataTransfer.files[0];
  if(f)processFile(f);
}
function handleFileSelect(e){const f=e.target.files[0];if(f)processFile(f);}

// ── Extract text from PDF using PDF.js (100% local, no API) ─────────────────
async function processFile(f){
  const prog=document.getElementById('import-progress');
  const statusEl=document.getElementById('import-status');
  prog.classList.add('show');
  statusEl.innerHTML=`<span style="color:var(--accent)">📄 Lendo PDF localmente...</span>`;

  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const arrayBuffer = await f.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({data: arrayBuffer}).promise;
    statusEl.innerHTML=`<span style="color:var(--accent)">📄 PDF carregado (${pdf.numPages} página(s)) — extraindo texto...</span>`;

    let fullText = '';
    for(let pageNum=1; pageNum<=pdf.numPages; pageNum++){
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();

      const items = content.items;
      const lineMap = new Map();
      items.forEach(item => {
        if(!item.str.trim()) return;
        const y = Math.round(item.transform[5] / 3) * 3;
        if(!lineMap.has(y)) lineMap.set(y, []);
        lineMap.get(y).push({x: item.transform[4], text: item.str});
      });

      const sortedYs = [...lineMap.keys()].sort((a,b) => b-a);
      sortedYs.forEach(y => {
        const lineItems = lineMap.get(y).sort((a,b) => a.x-b.x);
        const lineText = lineItems.map(i=>i.text).join(' ');
        fullText += lineText + '\n';
      });
    }

    statusEl.innerHTML=`<span style="color:var(--accent)">🔍 Analisando disciplinas...</span>`;
    parseHistorico(fullText);

  } catch(err) {
    statusEl.innerHTML=`<span style="color:var(--red)">❌ Erro ao ler PDF: ${err.message}</span><br>
    <small style="opacity:.6">Certifique-se de que o arquivo é um PDF válido do histórico da UEA.</small>`;
    console.error(err);
  }
}

// ── Parse extracted text and match to grade subjects ─────────────────────────
function parseHistorico(text){
  const resultsEl=document.getElementById('import-results');
  const statusEl=document.getElementById('import-status');
  resultsEl.innerHTML='';
  pendingImport=[];

  const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);

  const codeRe = /\b(EST[A-Z]{2,6}\d{3,6}[A-Z0-9]*|ESTECP\d{3}|EEN\d{2,})\b/i;
  const APROV  = ['Aprov','Dispe','Dispensado','Aprovado'];
  const REPROV = ['Rep N','Rep F','Reprovado'];
  const MATRIC = ['Matriculado'];
  const SKIP   = ['Cance','Tranc','Cancelado','Trancado'];

  const matched  = new Map();
  const unmatched = [];

  let currentSemester = '';

  const bigBlob = lines.join(' | ');

  const processedLines = new Set();

  for(let i=0; i<lines.length; i++){
    const line = lines[i];

    const semM = line.match(/^(\d{4})\s*[\/\\]\s*(\d)\b/);
    if(semM) currentSemester = semM[1]+'/'+semM[2];

    const window3 = [lines[i-1]||'', line, lines[i+1]||''].join(' ');

    const codeMatch = window3.match(codeRe);
    if(!codeMatch) continue;
    const code = codeMatch[1].toUpperCase();

    if(processedLines.has(code+currentSemester)) continue;

    if(SKIP.some(s=>window3.includes(s))) continue;

    let status = '';
    if(APROV.some(s=>window3.includes(s))) status='done';
    else if(REPROV.some(s=>window3.includes(s))) status='failed';
    else if(MATRIC.some(s=>window3.includes(s))) status='enrolled';
    if(!status) continue;

    processedLines.add(code+currentSemester);

    let grade = '';
    const gradeRe = /\b(\d{1,2}[.,]\d{1,2})\s*(?:Aprov|Rep|Dispe)/i;
    const gm = window3.match(gradeRe);
    if(gm) grade = gm[1].replace(',','.');
    if(!grade){
      const gm2 = window3.match(/\b(\.\d{2})\s*(?:Rep)/i);
      if(gm2) grade = '0'+gm2[1];
    }

    const semester = currentSemester;

    let subId = CM.hasOwnProperty(code) ? CM[code] : undefined;
    if(subId===undefined){
      const found = DATA[G].find(s=>s.code===code||s.code===code.replace(/^EST/,'EST'));
      if(found) subId = found.id;
    }

    if(subId && subId!==null){
      const existing = matched.get(subId);
      const priority = {done:3,enrolled:2,failed:1};
      const np = priority[status]||0, ep = existing ? priority[existing.status]||0 : 0;
      if(!existing || np>ep){
        matched.set(subId,{subId,code,status,grade,semester});
      }
    } else if(subId===null){
      // known optativa — skip silently
    } else {
      if(!unmatched.find(u=>u.code===code))
        unmatched.push({code,status,grade});
    }
  }

  matched.forEach(({subId,code,status,grade,semester})=>{
    const name = DATA[G].find(s=>s.id===subId)?.name||subId;
    const icon = status==='done'?'✓':status==='enrolled'?'▶':'↺';
    const cls  = status==='failed'?'unmatched':'matched';
    resultsEl.innerHTML+=`<div class="iri ${cls}">${icon} <strong>${code}</strong> <span class="sub-name">${name}</span> ${grade?`<span style="color:var(--muted);margin-left:auto">${grade}</span>`:''}</div>`;
  });

  if(unmatched.length>0){
    resultsEl.innerHTML+=`<div style="margin-top:10px;padding:8px 10px;border-radius:7px;background:rgba(255,255,255,.03);border:1px solid var(--border);">
      <div style="font-size:.63rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:5px">Optativas / fora da grade ${G}</div>`;
    unmatched.forEach(({code,grade})=>{
      resultsEl.innerHTML+=`<div class="iri unmatched" style="background:transparent;margin-bottom:2px;opacity:.7">⚠ <strong>${code}</strong> ${grade?`<span style="margin-left:auto">${grade}</span>`:''}</div>`;
    });
    resultsEl.innerHTML+=`</div>`;
  }

  pendingImport = [...matched.values()];
  const total = pendingImport.length;

  if(total>0){
    statusEl.innerHTML=`<span style="color:var(--green)">✓ ${total} matéria(s) identificada(s) na grade ${G}</span>${unmatched.length>0?` <span style="color:var(--muted);font-size:.75rem">+ ${unmatched.length} externas</span>`:''}`;
    document.getElementById('import-confirm-btn').classList.add('show');
  } else {
    const foundCodes = [...text.matchAll(/\b(EST[A-Z]{2,6}\d{3,})\b/gi)].map(m=>m[1]).slice(0,5);
    statusEl.innerHTML=`<span style="color:var(--yellow)">⚠ Nenhuma matéria da grade ${G} identificada.</span><br>
    <small style="opacity:.6">Códigos detectados no PDF: ${foundCodes.length>0?foundCodes.join(', '):'nenhum'}<br>
    Verifique se a grade selecionada (${G}) está correta.</small>`;
  }
}

function confirmImport(){
  pendingImport.forEach(({subId,status,grade,semester})=>{
    setSub(subId,{status,grade:grade||'',semester:semester||''});
  });
  render();
  closeImport();
  showToast(`✓ ${pendingImport.length} matérias importadas com sucesso!`,'ok');
}
