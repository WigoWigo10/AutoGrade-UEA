// ── SETTINGS ─────────────────────────────────────────────────────────────────
const CFG_KEY='eca_cfg_v1';
let CFG={
  theme:'dark', colorMode:'period',
  hideDone:false, nextAvail:false, hideOpt:false, periods:[],
  showCode:true, showHours:true, showGrade:true,
  arrowVis:'always', arrowStyle:'curve', arrowAnim:'flow', arrowSize:'normal',
  orientation:'h', cardSize:'normal', spacing:'normal', group:false,
};

function loadCfg(){
  try{ const s=localStorage.getItem(CFG_KEY); if(s) CFG={...CFG,...JSON.parse(s)}; }catch{}
}
function saveCfg(){ localStorage.setItem(CFG_KEY,JSON.stringify(CFG)); }

function openCfg(){
  syncCfgUI();
  document.getElementById('cfg-overlay').classList.add('open');
}
function closeCfg(){ document.getElementById('cfg-overlay').classList.remove('open'); }

function syncCfgUI(){
  document.getElementById('cfg-hide-done').checked=CFG.hideDone;
  document.getElementById('cfg-next-avail').checked=CFG.nextAvail;
  document.getElementById('cfg-hide-opt').checked=CFG.hideOpt;
  document.getElementById('cfg-show-code').checked=CFG.showCode;
  document.getElementById('cfg-show-hours').checked=CFG.showHours;
  document.getElementById('cfg-show-grade').checked=CFG.showGrade;
  document.getElementById('cfg-group').checked=CFG.group;
  document.querySelectorAll('.period-chip').forEach(chip=>{
    const p=parseInt(chip.dataset.p||'0');
    chip.classList.toggle('active', CFG.periods.length===0?p===0:CFG.periods.includes(p));
  });
}

function applyCfg(){
  CFG.hideDone=document.getElementById('cfg-hide-done').checked;
  CFG.nextAvail=document.getElementById('cfg-next-avail').checked;
  CFG.hideOpt=document.getElementById('cfg-hide-opt').checked;
  CFG.showCode=document.getElementById('cfg-show-code').checked;
  CFG.showHours=document.getElementById('cfg-show-hours').checked;
  CFG.showGrade=document.getElementById('cfg-show-grade').checked;
  CFG.group=document.getElementById('cfg-group').checked;
  saveCfg();
  render();
}

function togglePeriod(p){
  if(p===0){ CFG.periods=[]; }
  else{
    const idx=CFG.periods.indexOf(p);
    if(idx>=0) CFG.periods.splice(idx,1);
    else CFG.periods.push(p);
    if(CFG.periods.length===0||CFG.periods.length===10) CFG.periods=[];
  }
  syncCfgUI();
  saveCfg(); render();
}

function setTheme(t,btn){
  CFG.theme=t;
  document.body.classList.remove('theme-light','theme-hc');
  if(t==='light') document.body.classList.add('theme-light');
  if(t==='hc')    document.body.classList.add('theme-hc');
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg();
}

function setColorMode(m,btn){
  CFG.colorMode=m;
  document.body.classList.remove('color-status','color-mono');
  if(m==='status') document.body.classList.add('color-status');
  if(m==='mono')   document.body.classList.add('color-mono');
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg();
}

function setArrowVis(v,btn){
  CFG.arrowVis=v;
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg(); drawArrows();
  document.getElementById('track').classList.toggle('arrows-hover-only', v==='hover');
  document.getElementById('track').classList.toggle('arrows-never', v==='never');
}

function setArrowStyle(s,btn){
  CFG.arrowStyle=s;
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg(); drawArrows();
}

function setArrowAnim(a,btn){
  CFG.arrowAnim=a;
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg();
  const style=document.getElementById('arrow-anim-style')||document.createElement('style');
  style.id='arrow-anim-style';
  if(a==='none')   style.textContent='.arrow-line.active{animation:none!important;}';
  else if(a==='pulse') style.textContent='@keyframes flow{0%,100%{opacity:.4}50%{opacity:1}} .arrow-line.active{animation:flow 1s ease-in-out infinite;stroke-dasharray:none!important;}';
  else style.textContent='';
  document.head.appendChild(style);
}

function setArrowSize(s,btn){
  CFG.arrowSize=s;
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg(); drawArrows();
}

function setOrientation(o,btn){
  CFG.orientation=o;
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg(); render();
}

function setCardSize(s,btn){
  CFG.cardSize=s;
  const w={compact:140,normal:166,large:200}[s];
  document.documentElement.style.setProperty('--card-w',w+'px');
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg(); render();
}

function setSpacing(s,btn){
  CFG.spacing=s;
  const g={tight:8,normal:17,loose:30}[s];
  document.documentElement.style.setProperty('--col-gap',g+'px');
  btn.closest('.cfg-seg').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  saveCfg();
  document.getElementById('track').style.gap=g+'px';
  setTimeout(drawArrows,60);
}

function resetCfg(){
  if(!confirm('Restaurar todas as configurações padrão?'))return;
  CFG={theme:'dark',colorMode:'period',hideDone:false,nextAvail:false,hideOpt:false,periods:[],showCode:true,showHours:true,showGrade:true,arrowVis:'always',arrowStyle:'curve',arrowAnim:'flow',arrowSize:'normal',orientation:'h',cardSize:'normal',spacing:'normal',group:false};
  saveCfg();
  document.body.classList.remove('theme-light','theme-hc','color-status','color-mono');
  document.documentElement.style.setProperty('--card-w','166px');
  document.documentElement.style.setProperty('--col-gap','17px');
  syncCfgUI();
  render();
  showToast('Configurações restauradas.');
}

function applyCfgOnLoad(){
  loadCfg();
  if(CFG.theme==='light') document.body.classList.add('theme-light');
  if(CFG.theme==='hc')    document.body.classList.add('theme-hc');
  if(CFG.colorMode==='status') document.body.classList.add('color-status');
  if(CFG.colorMode==='mono')   document.body.classList.add('color-mono');
  const w={compact:140,normal:166,large:200}[CFG.cardSize]||166;
  document.documentElement.style.setProperty('--card-w',w+'px');
  const g={tight:8,normal:17,loose:30}[CFG.spacing]||17;
  document.documentElement.style.setProperty('--col-gap',g+'px');
  if(CFG.arrowAnim!=='flow'){
    const style=document.createElement('style');
    style.id='arrow-anim-style';
    if(CFG.arrowAnim==='none') style.textContent='.arrow-line.active{animation:none!important;}';
    else if(CFG.arrowAnim==='pulse') style.textContent='@keyframes flow{0%,100%{opacity:.4}50%{opacity:1}} .arrow-line.active{animation:flow 1s ease-in-out infinite;stroke-dasharray:none!important;}';
    document.head.appendChild(style);
  }
}
