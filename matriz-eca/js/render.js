// ── LEGEND & GRADE SWITCHER ───────────────────────────────────────────────────
function buildLegend(){
  const l=document.getElementById('legend');
  l.innerHTML=PC.slice(1).map((c,i)=>`<div class="legend-item"><div class="legend-dot" style="background:${c.main}"></div>${i+1}º Per.</div>`).join('')+
  `<div class="legend-item" style="margin-left:10px"><div class="legend-dot" style="background:var(--green)"></div>Concluída</div>
   <div class="legend-item"><div class="legend-dot" style="background:var(--accent)"></div>Cursando</div>
   <div class="legend-item"><div class="legend-dot" style="background:var(--yellow)"></div>Reprovada (já tentei)</div>`;
}

function switchGrade(g,btn){
  G=g;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('search').value='';
  render();
}

// ── RENDER ───────────────────────────────────────────────────────────────────
function render(){
  const track=document.getElementById('track');
  track.innerHTML='<svg id="svg-layer"></svg>';
  track.classList.toggle('vertical', CFG.orientation==='v');
  track.style.gap=({tight:'8px',normal:'17px',loose:'30px'})[CFG.spacing]||'17px';
  const scroll=document.getElementById('scroll');
  if(CFG.orientation==='v'){
    scroll.style.overflowX='hidden';
    track.style.minWidth='unset';
    track.style.width='100%';
  } else {
    scroll.style.overflowX='auto';
    track.style.minWidth='max-content';
    track.style.width='';
  }

  const subs=DATA[G];

  const nextAvailSet=new Set();
  if(CFG.nextAvail){
    subs.forEach(sub=>{
      const d=getSub(sub.id);
      if(d.status!=='pending') return;
      const allPreDone=(sub.pre||[]).every(pid=>getSub(pid).status==='done');
      if(allPreDone && (sub.pre||[]).length>0) nextAvailSet.add(sub.id);
    });
  }

  const typeOf=sub=>{
    if(sub.code==='—') return 'opt';
    if(sub.name.toLowerCase().startsWith('lab')) return 'lab';
    return 'req';
  };

  const maxPeriod=10;
  for(let p=1;p<=maxPeriod;p++){
    if(CFG.periods.length>0 && !CFG.periods.includes(p)) continue;

    let periodSubs=subs.filter(s=>s.period===p);

    if(CFG.hideOpt) periodSubs=periodSubs.filter(s=>s.code!=='—');
    if(CFG.hideDone) periodSubs=periodSubs.filter(s=>getSub(s.id).status!=='done');

    if(periodSubs.length===0) continue;

    const col=document.createElement('div');
    col.className='period-col';
    const c=PC[p];
    const isV = CFG.orientation==='v';

    if(!isV){
      col.style.width=({compact:'140px',normal:'166px',large:'200px'})[CFG.cardSize]||'166px';
    }

    const head=document.createElement('div');
    head.className='period-head';
    head.style.background=c.light;
    head.style.borderColor=c.main+'35';
    head.style.color=c.main;
    head.textContent=isV ? `${p}º` : `${p}º Período`;
    if(isV) head.style.borderRightColor=c.main;
    col.appendChild(head);

    const cardsContainer=document.createElement('div');
    if(isV){
      cardsContainer.className='v-cards-row';
    }

    const groups=CFG.group
      ? [['req','Obrigatórias'],['lab','Laboratórios'],['opt','Optativas']]
      : [['all','']];

    groups.forEach(([gtype,glabel])=>{
      const groupSubs=gtype==='all'?periodSubs:periodSubs.filter(s=>typeOf(s)===gtype);
      if(groupSubs.length===0) return;
      if(CFG.group && glabel){
        const sep=document.createElement('div');
        sep.className='group-sep';
        sep.textContent=glabel;
        cardsContainer.appendChild(sep);
      }
      groupSubs.forEach(sub=>{
        const d=getSub(sub.id);
        let cls='card';
        if(d.status!=='pending') cls+=' '+d.status;
        if(CFG.cardSize==='compact') cls+=' sz-compact';
        if(CFG.cardSize==='large')   cls+=' sz-large';
        if(nextAvailSet.has(sub.id)) cls+=' next-available';

        const card=document.createElement('div');
        card.className=cls;
        card.id='card-'+sub.id;
        card.style.borderColor=c.main+'25';

        let codeHtml=CFG.showCode?`<div class="card-code" style="color:${c.main}">${sub.code}</div>`:'';
        let hoursHtml=CFG.showHours?`<div class="card-hours">${sub.hours}</div>`:'';
        let gradeHtml='';
        if(CFG.showGrade && d.grade && d.status!=='pending'){
          const gv=parseFloat(d.grade);
          const gc=gv>=7?'gg':gv>=5?'gk':'gb';
          gradeHtml=`<div class="card-grade"><span class="grade-badge ${gc}">${d.grade}</span></div>`;
        }

        card.innerHTML=`<div class="card-stripe" style="background:${c.main}"></div>
          ${codeHtml}
          <div class="card-name">${sub.name}</div>
          ${hoursHtml}${gradeHtml}`;

        if(CFG.arrowVis==='hover'){
          card.addEventListener('mouseenter',()=>{document.querySelectorAll('.arrow-line').forEach(l=>l.style.opacity='0');hlChain(sub.id,true);});
          card.addEventListener('mouseleave',()=>{document.querySelectorAll('.arrow-line').forEach(l=>l.style.opacity='');hlChain(sub.id,false);});
        } else {
          card.addEventListener('mouseenter',()=>hlChain(sub.id,true));
          card.addEventListener('mouseleave',()=>hlChain(sub.id,false));
        }
        card.addEventListener('click',()=>openModal(sub));
        cardsContainer.appendChild(card);
      });
    });

    if(isV){
      col.appendChild(cardsContainer);
    } else {
      Array.from(cardsContainer.children).forEach(el=>col.appendChild(el));
    }
    track.appendChild(col);
  }

  if(CFG.arrowVis==='never'){
    setTimeout(()=>{ document.getElementById('svg-layer').style.display='none'; },130);
  } else {
    setTimeout(()=>{ const sl=document.getElementById('svg-layer'); if(sl)sl.style.display=''; drawArrows(); },120);
  }
  updateStats();
}

// ── STATS ────────────────────────────────────────────────────────────────────
function updateStats(){
  const subs=DATA[G];
  let done=0,enr=0,fail=0,pend=0;
  subs.forEach(s=>{
    const st=getSub(s.id).status;
    if(st==='done')done++;
    else if(st==='enrolled')enr++;
    else if(st==='failed')fail++;
    else pend++;
  });
  const total=subs.length, pct=Math.round(done/total*100);
  document.getElementById('s-done').textContent=done;
  document.getElementById('s-enr').textContent=enr;
  document.getElementById('s-fail').textContent=fail;
  document.getElementById('s-pend').textContent=pend;
  document.getElementById('s-pct').textContent=pct+'%';
  document.getElementById('prog-fill').style.width=pct+'%';
}
