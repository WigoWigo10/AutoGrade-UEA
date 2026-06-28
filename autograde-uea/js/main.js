// ── STATE ────────────────────────────────────────────────────────────────────
let G='ECA_2014', activeSub=null, pendingImport=[];
let tt;

// ── INIT ─────────────────────────────────────────────────────────────────────
function init(){
  applyCfgOnLoad();
  if(CFG.grade){
    G=CFG.grade;
    const activeBtn=document.querySelector(`.grade-pill[onclick*="'${G}'"]`);
    if(activeBtn){
      const course=activeBtn.closest('.grade-pills').dataset.for;
      document.querySelectorAll('.grade-pills').forEach(gp=>{gp.hidden=gp.dataset.for!==course;});
      document.querySelectorAll('.grade-pill').forEach(b=>b.classList.remove('active'));
      activeBtn.classList.add('active');
      const cpickItem=document.querySelector(`.cpick-item[data-course="${course}"]`);
      if(cpickItem){
        document.querySelectorAll('.cpick-item').forEach(b=>b.classList.remove('active'));
        cpickItem.classList.add('active');
        document.getElementById('course-pick-label').textContent=cpickItem.textContent;
      }
    }
  }
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
  document.addEventListener('click',e=>{
    if(!e.target.closest('.course-pick'))
      document.getElementById('course-pick')?.classList.remove('open');
  });
}

// ── SEARCH ───────────────────────────────────────────────────────────────────
function doSearch(q){
  q=q.toLowerCase().trim();
  const track=document.getElementById('track');
  if(!q){track.classList.remove('dimmed');document.querySelectorAll('.card').forEach(c=>c.classList.remove('lit'));return;}
  track.classList.add('dimmed');
  document.querySelectorAll('.card').forEach(card=>{
    const n=card.querySelector('.card-name').textContent.toLowerCase();
    const co=(card.querySelector('.card-code')?.textContent||'').toLowerCase();
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

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeImport();}});

init();
