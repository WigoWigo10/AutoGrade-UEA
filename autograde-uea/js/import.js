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
  statusEl.innerHTML=`<span style="color:var(--accent);display:flex;align-items:center;gap:5px">${IC.file()} Lendo PDF localmente...</span>`;

  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const arrayBuffer = await f.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({data: arrayBuffer}).promise;
    statusEl.innerHTML=`<span style="color:var(--accent);display:flex;align-items:center;gap:5px">${IC.file()} PDF carregado (${pdf.numPages} página(s)) — extraindo texto...</span>`;

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

    statusEl.innerHTML=`<span style="color:var(--accent);display:flex;align-items:center;gap:5px">${IC.search()} Analisando disciplinas...</span>`;
    parseHistorico(fullText);

  } catch(err) {
    statusEl.innerHTML=`<span style="color:var(--red);display:flex;align-items:center;gap:5px">${IC.error()} Erro ao ler PDF: ${err.message}</span><br>
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
  const TRANC  = ['Tranc','Trancado'];
  const SKIP   = ['Cance','Cancelado'];

  const matched   = new Map();
  const optFound  = [];
  const unmatched = [];

  let currentSemester = '';
  const processedLines = new Set();

  const gradeMap   = GRADES[G]||{};
  const optCatalog = gradeMap.opt||{};
  const equivMap   = gradeMap.equiv||{};
  const cm         = gradeMap.cm||{};

  for(let i=0; i<lines.length; i++){
    const line = lines[i];

    const semM = line.match(/^(\d{4})\s*[\/\\]\s*(\d)\b/);
    if(semM) currentSemester = semM[1]+'/'+semM[2];

    const window3 = [lines[i-1]||'', line, lines[i+1]||''].join(' ');

    const codeMatch = window3.match(codeRe);
    if(!codeMatch) continue;
    const code = codeMatch[1].toUpperCase();

    if(processedLines.has(code+currentSemester)) continue;

    // Find which specific line owns this code, then check SKIP only on that line.
    // Checking window3 as a whole would cause an adjacent "Tranc" to incorrectly
    // discard an approved subject two rows away (e.g. ESTBAS009 next to ESTBAS011-Tranc).
    const codeOwnerLine = [line, lines[i-1]||'', lines[i+1]||'']
      .find(l => { const m=l.match(codeRe); return m && m[1].toUpperCase()===code; }) || '';
    if(SKIP.some(s=>codeOwnerLine.includes(s))) continue;

    // Status: check code's own line first — adjacent Aprov/Rep must not contaminate
    // (e.g. ESTBAS007-RepN surrounded by Aprov lines must stay 'failed', not become 'done')
    let status = '';
    if(APROV.some(s=>codeOwnerLine.includes(s))) status='done';
    else if(REPROV.some(s=>codeOwnerLine.includes(s))) status='failed';
    else if(MATRIC.some(s=>codeOwnerLine.includes(s))) status='enrolled';
    else if(TRANC.some(s=>codeOwnerLine.includes(s))) status='trancado';
    if(!status){
      if(APROV.some(s=>window3.includes(s))) status='done';
      else if(REPROV.some(s=>window3.includes(s))) status='failed';
      else if(MATRIC.some(s=>window3.includes(s))) status='enrolled';
      else if(TRANC.some(s=>window3.includes(s))) status='trancado';
    }
    if(!status) continue;

    processedLines.add(code+currentSemester);

    // Grade: code's own line first, fall back to window3.
    // Trancado never has a grade — skip extraction to avoid picking up a neighbor's grade.
    const gradeRe = /\b(\d{1,2}[.,]\d{1,2})\s*(?:Aprov|Rep|Dispe)/i;
    let grade = '';
    if(status !== 'trancado'){
      const gm = codeOwnerLine.match(gradeRe) || window3.match(gradeRe);
      if(gm) grade = gm[1].replace(',','.');
      if(!grade){
        const gm2 = codeOwnerLine.match(/\b(\.\d{2})\s*(?:Rep)/i) || window3.match(/\b(\.\d{2})\s*(?:Rep)/i);
        if(gm2) grade = '0'+gm2[1];
      }
    }

    const turmaM = codeOwnerLine.match(/\b([A-Z][A-Z0-9]{2,7}_T\d{2})\b/);
    const turma = turmaM ? turmaM[1] : '';

    // Semester from code's own line to avoid wrong semester at section boundaries
    const ownerSemM = codeOwnerLine.match(/(\d{4})\s*[\/\\]\s*(\d)\b/);
    const semester = ownerSemM ? ownerSemM[1]+'/'+ownerSemM[2] : currentSemester;

    // Check optativa catalog (grades that define opt)
    if(optCatalog[code]){
      if(status !== 'trancado' && !optFound.find(o=>o.code===code)){
        const chM = codeOwnerLine.match(/\b(30|45|60|75|90|120)\b/);
        const hours = chM ? chM[1]+'h' : optCatalog[code].hours;
        optFound.push({code, name:optCatalog[code].name, hours, status, grade, semester});
      }
      continue;
    }

    // Check equivalences (parallel codes that fulfil a grade slot)
    if(equivMap[code]){
      const eqId = equivMap[code];
      const existing = matched.get(eqId);
      const priority = {done:3,enrolled:2,failed:1};
      const np = priority[status]||0, ep = existing ? priority[existing.status]||0 : 0;
      if(!existing){
        matched.set(eqId,{subId:eqId,code,status,grade,semester,turma,attempts:[{code,status,grade,semester,turma}]});
      } else {
        if(!existing.attempts.some(a=>a.semester===semester))
          existing.attempts.push({code,status,grade,semester,turma});
        if(np>ep){existing.status=status;existing.grade=grade;existing.semester=semester;existing.code=code;existing.turma=turma;}
      }
      continue;
    }

    let subId = cm.hasOwnProperty(code) ? cm[code] : undefined;
    if(subId===undefined){
      const found = DATA[G].find(s=>s.code===code||s.code===code.replace(/^EST/,'EST'));
      if(found) subId = found.id;
    }

    if(subId && subId!==null){
      const existing = matched.get(subId);
      const priority = {done:3,enrolled:2,failed:1};
      const np = priority[status]||0, ep = existing ? priority[existing.status]||0 : 0;
      if(!existing){
        matched.set(subId,{subId,code,status,grade,semester,turma,attempts:[{code,status,grade,semester,turma}]});
      } else {
        if(!existing.attempts.some(a=>a.semester===semester))
          existing.attempts.push({code,status,grade,semester,turma});
        if(np>ep){existing.status=status;existing.grade=grade;existing.semester=semester;existing.code=code;existing.turma=turma;}
      }
    } else if(subId===null){
      // grade 2023 / known non-optativa code — skip silently
    } else {
      if(!unmatched.find(u=>u.code===code))
        unmatched.push({code,status,grade});
    }
  }

  // Assign optativas to opt slots in chronological order
  if(optFound.length>0){
    const semOrder=sem=>{if(!sem)return 0;const m=sem.match(/(\d{4})\/(\d)/);return m?parseInt(m[1])*10+parseInt(m[2]):0;};
    optFound.sort((a,b)=>semOrder(a.semester)-semOrder(b.semester));
    const optSlots=DATA[G].filter(s=>s.optional).sort((a,b)=>a.period-b.period||DATA[G].indexOf(a)-DATA[G].indexOf(b)).map(s=>s.id);
    optFound.forEach((opt,i)=>{
      if(i>=optSlots.length) return;
      const slotId=optSlots[i];
      matched.set('__opt__'+slotId,{subId:slotId,code:opt.code,status:opt.status,grade:opt.grade,semester:opt.semester,subjectName:opt.name,subjectHours:opt.hours});
    });
  }

  matched.forEach(({subId,code,status,grade,semester,subjectName,attempts})=>{
    const sub=DATA[G].find(s=>s.id===subId);
    const name=subjectName||(sub?.name||subId);
    const icon=CARD_BADGE_SVG[status]||CARD_BADGE_SVG.failed;
    const cls=(status==='failed'||status==='trancado')?'unmatched':'matched';
    const optTag=sub?.optional?`<span style="font-size:.6rem;opacity:.5;margin-left:4px">OPT</span>`:'';
    const retryTag=attempts&&attempts.length>1?`<span style="font-size:.6rem;margin-left:6px;color:var(--yellow);opacity:.8">${attempts.length}x</span>`:'';
    resultsEl.innerHTML+=`<div class="iri ${cls}">${icon} <strong>${code}</strong> <span class="sub-name">${name}</span>${optTag}${retryTag} ${grade?`<span style="color:var(--muted);margin-left:auto">${grade}</span>`:''}</div>`;
  });

  if(unmatched.length>0){
    resultsEl.innerHTML+=`<div style="margin-top:10px;padding:8px 10px;border-radius:7px;background:rgba(255,255,255,.03);border:1px solid var(--border);">
      <div style="font-size:.63rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:5px">Códigos não identificados</div>`;
    unmatched.forEach(({code,grade})=>{
      resultsEl.innerHTML+=`<div class="iri unmatched" style="background:transparent;margin-bottom:2px;opacity:.7">${IC.warn()} <strong>${code}</strong> ${grade?`<span style="margin-left:auto">${grade}</span>`:''}</div>`;
    });
    resultsEl.innerHTML+=`</div>`;
  }

  pendingImport = [...matched.values()];
  const total = pendingImport.length;
  const optCount = pendingImport.filter(p=>DATA[G].find(s=>s.id===p.subId)?.optional).length;

  if(total>0){
    const optMsg=optCount>0?` <span style="color:var(--accent2);font-size:.75rem">+ ${optCount} optativa(s)</span>`:'';
    statusEl.innerHTML=`<span style="color:var(--green);display:flex;align-items:center;gap:5px">${IC.check()} ${total-optCount} matéria(s) obrigatória(s) identificada(s)</span>${optMsg}`;
    document.getElementById('import-confirm-btn').classList.add('show');
  } else {
    const foundCodes = [...text.matchAll(/\b(EST[A-Z]{2,6}\d{3,})\b/gi)].map(m=>m[1]).slice(0,5);
    statusEl.innerHTML=`<span style="color:var(--yellow);display:flex;align-items:center;gap:5px">${IC.warn()} Nenhuma matéria da grade selecionada identificada.</span><br>
    <small style="opacity:.6">Códigos detectados no PDF: ${foundCodes.length>0?foundCodes.join(', '):'nenhum'}<br>
    Verifique se a grade selecionada está correta.</small>`;
  }
}

function confirmImport(){
  pendingImport.forEach(({subId,code,status,grade,semester,subjectName,subjectHours,attempts,turma})=>{
    const extra={};
    if(subjectName){extra.subjectName=subjectName;extra.subjectCode=code||'';}
    if(subjectHours) extra.subjectHours=subjectHours;
    extra.attempts=attempts&&attempts.length>1?attempts:null;
    extra.turma=turma||'';
    setSub(subId,{status,grade:grade||'',semester:semester||'',...extra});
  });
  render();
  closeImport();
  showToast(`${IC.check()} ${pendingImport.length} matérias importadas com sucesso!`,'ok');
}
