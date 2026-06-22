// ── STATE ────────────────────────────────────────────────────────────────────
let G='2014', activeSub=null, pendingImport=[];
let tt;

// ── INIT ─────────────────────────────────────────────────────────────────────
function init(){
  applyCfgOnLoad();
  buildLegend();
  const chipsEl = document.getElementById('period-chips');
  for(let p=1;p<=10;p++){
    const chip = document.createElement('div');
    chip.className = 'period-chip';
    chip.textContent = p+'º';
    chip.dataset.p = p;
    chip.onclick = ()=>togglePeriod(p);
    chipsEl.appendChild(chip);
  }
  chipsEl.querySelector('.all-chip').dataset.p = 0;
  render();
  window.addEventListener('resize',drawArrows);
  document.getElementById('scroll').addEventListener('scroll',drawArrows);
}

// ── SEARCH ───────────────────────────────────────────────────────────────────
function doSearch(q){
  q=q.toLowerCase().trim();
  const track=document.getElementById('track');
  if(!q){track.classList.remove('dimmed');document.querySelectorAll('.card').forEach(c=>c.classList.remove('lit'));return;}
  track.classList.add('dimmed');
  document.querySelectorAll('.card').forEach(card=>{
    const n=card.querySelector('.card-name').textContent.toLowerCase();
    const co=card.querySelector('.card-code').textContent.toLowerCase();
    card.classList.toggle('lit',n.includes(q)||co.includes(q));
  });
}

// ── CLEAR ────────────────────────────────────────────────────────────────────
function clearAll(){
  if(!confirm('Remover todas as marcações? Não pode ser desfeito.'))return;
  localStorage.removeItem(SK);
  _cache={};
  render();
  showToast('Histórico limpo.');
}

// ── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg,type=''){
  const t=document.getElementById('toast');
  t.textContent=msg;t.className='toast show'+(type?' '+type:'');
  clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2800);
}

// ── EXPORT PNG ───────────────────────────────────────────────────────────────
function toggleExportMenu(){
  const m=document.getElementById('export-menu');
  m.classList.toggle('open');
}

document.addEventListener('click',e=>{
  const wrap=document.getElementById('export-wrap');
  if(wrap && !wrap.contains(e.target))
    document.getElementById('export-menu').classList.remove('open');
});

async function exportPNG(scale){
  document.getElementById('export-menu').classList.remove('open');
  showToast('Gerando imagem...');

  const track=document.getElementById('track');
  const wasDimmed=track.classList.contains('dimmed');
  if(wasDimmed){
    track.classList.remove('dimmed');
    document.querySelectorAll('.card').forEach(c=>c.classList.remove('lit'));
  }

  // Resolve CSS variable --bg for background color
  const bg=getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()||'#0d0f14';

  try{
    const canvas=await html2canvas(track,{
      scale,
      backgroundColor:bg,
      useCORS:true,
      allowTaint:false,
      logging:false,
    });

    // Add 24px padding around the image
    const pad=24*scale;
    const out=document.createElement('canvas');
    out.width=canvas.width+pad*2;
    out.height=canvas.height+pad*2;
    const ctx=out.getContext('2d');
    ctx.fillStyle=bg;
    ctx.fillRect(0,0,out.width,out.height);
    ctx.drawImage(canvas,pad,pad);

    const date=new Date().toISOString().slice(0,10);
    const a=document.createElement('a');
    a.download=`grade-eca-${G}-${scale}x-${date}.png`;
    a.href=out.toDataURL('image/png');
    a.click();
    showToast(`PNG ${scale}× exportado!`,'ok');
  }catch(err){
    showToast('Erro ao gerar PNG.');
    console.error(err);
  }

  if(wasDimmed) track.classList.add('dimmed');
}

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeImport();}});

init();
