// ── OPT SLOT PATCH ───────────────────────────────────────────────────────────
// Resolves opt catalog pre codes → internal IDs and injects them into DATA[G] opt
// slot entries so drawArrows() and hlChain() work without any extra changes.
function patchOptSlots(){
  const grade=GRADES[G]; if(!grade?.opt) return;
  const cm=grade.cm||{}, equiv=grade.equiv||{}, optCatalog=grade.opt;

  const optIds=new Set(DATA[G].filter(s=>s.optional).map(s=>s.id));

  // Remove opt-slot IDs previously injected into regular-subject unlocks
  DATA[G].forEach(sub=>{
    if(!sub.optional) sub.unlocks=(sub.unlocks||[]).filter(u=>!optIds.has(u));
  });

  // Reset opt slot pre/unlocks
  DATA[G].forEach(sub=>{ if(sub.optional){sub.pre=[];sub.unlocks=[];} });

  // Build map: optativa code → current slot ID (from localStorage)
  const codeToSlot={};
  DATA[G].forEach(sub=>{
    if(!sub.optional) return;
    const d=getSub(sub.id);
    if(d.subjectCode) codeToSlot[d.subjectCode]=sub.id;
  });

  // Resolve a prereq code to an internal subject/slot ID
  const resolve=code=>{
    if(codeToSlot[code]) return codeToSlot[code];
    if(cm.hasOwnProperty(code) && cm[code]) return cm[code];
    if(equiv[code]) return equiv[code];
    return null;
  };

  // Set pre arrays on filled opt slots from opt catalog metadata
  DATA[G].forEach(sub=>{
    if(!sub.optional) return;
    const d=getSub(sub.id);
    if(!d.subjectCode) return;
    const opt=optCatalog[d.subjectCode];
    if(!opt||!opt.pre||!opt.pre.length) return;
    sub.pre=opt.pre.map(resolve).filter(Boolean);
  });

  // Derive unlocks by reversing pre relationships
  DATA[G].forEach(sub=>{
    if(!sub.optional) return;
    sub.pre.forEach(preId=>{
      const preSub=DATA[G].find(s=>s.id===preId);
      if(preSub && !preSub.unlocks.includes(sub.id)) preSub.unlocks.push(sub.id);
    });
  });
}

// ── LEGEND & GRADE SWITCHER ───────────────────────────────────────────────────
function buildLegend(){
  const l=document.getElementById('legend');
  l.innerHTML=PC.slice(1).map((c,i)=>`<div class="legend-item"><div class="legend-dot" style="background:${c.main}"></div>${i+1}º Per.</div>`).join('')+
  `<div class="legend-item" style="margin-left:10px"><div class="legend-dot" style="background:var(--green)"></div>Concluída</div>
   <div class="legend-item"><div class="legend-dot" style="background:var(--accent)"></div>Cursando</div>
   <div class="legend-item"><div class="legend-dot" style="background:var(--red)"></div>Reprovada (já tentei)</div>
   <div class="legend-item"><div class="legend-dot" style="background:var(--muted)"></div>Trancada</div>`;
}

function switchGrade(g,btn){
  G=g;
  CFG.grade=g; saveCfg();
  document.querySelectorAll('.grade-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('search').value='';
  render();
}

function toggleCoursePick(btn){
  document.getElementById('course-pick').classList.toggle('open');
}

function pickCourse(course,btn){
  document.querySelectorAll('.cpick-item').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('course-pick-label').textContent=btn.textContent;
  document.getElementById('course-pick').classList.remove('open');
  document.querySelectorAll('.grade-pills').forEach(gp=>{gp.hidden=gp.dataset.for!==course;});
  // switch to the last-active grade in this course, or default to first pill
  const pills=document.querySelector(`.grade-pills[data-for="${course}"]`);
  const already=pills.querySelector('.grade-pill.active')||pills.querySelector('.grade-pill');
  if(already){
    const m=(already.getAttribute('onclick')||'').match(/'([^']+)'/);
    if(m) switchGrade(m[1],already);
  }
}

// ── RENDER ───────────────────────────────────────────────────────────────────
function render(){
  patchOptSlots(); // resolve opt pre/unlocks before any DATA[G] read
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
      if(d.status!=='pending' && d.status!=='trancado') return;
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

        const isOptSlot=sub.optional===true;
        const hasRealSub=isOptSlot && !!d.subjectName;
        if(hasRealSub) cls+=' opt-real';

        const displayName=hasRealSub ? d.subjectName : sub.name;
        const displayCode=hasRealSub ? d.subjectCode : sub.code;
        const displayHours=hasRealSub ? (d.subjectHours||'—') : sub.hours;

        const card=document.createElement('div');
        card.className=cls;
        card.id='card-'+sub.id;
        card.style.borderColor=c.main+'25';

        let codeHtml=CFG.showCode?`<div class="card-code" style="color:${c.main}">${displayCode}</div>`:'';
        let hoursHtml=CFG.showHours?`<div class="card-hours">${displayHours}</div>`:'';
        let gradeHtml='';
        if(CFG.showGrade && d.grade && d.status!=='pending' && d.status!=='trancado'){
          const gv=parseFloat(d.grade);
          const gc=gv>=7?'gg':gv>=5?'gk':'gb';
          gradeHtml=`<div class="card-grade"><span class="grade-badge ${gc}">${d.grade}</span></div>`;
        }
        const optBadge=isOptSlot?'<div class="opt-badge">OPT</div>':'';

        card.innerHTML=`<div class="card-stripe" style="background:${c.main}"></div>
          ${optBadge}${codeHtml}
          <div class="card-name">${displayName}</div>
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
