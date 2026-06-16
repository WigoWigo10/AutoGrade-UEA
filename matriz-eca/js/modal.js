// ── MODAL ────────────────────────────────────────────────────────────────────
function openModal(sub){
  activeSub=sub;
  const d=getSub(sub.id);
  const c=PC[sub.period];
  document.getElementById('modal-top').style.background=`linear-gradient(135deg,${c.main}28,${c.light})`;
  document.getElementById('m-period').textContent=`${sub.period}º Período`;
  document.getElementById('m-period').style.color=c.main;
  document.getElementById('m-title').textContent=sub.name;
  document.getElementById('m-code').textContent=sub.code;
  document.getElementById('m-hours').textContent=sub.hours;
  const gc=document.getElementById('m-gc'),sc=document.getElementById('m-sc');
  if(d.grade){gc.style.display='block';const gv=parseFloat(d.grade);const gcls=gv>=7?'gg':gv>=5?'gk':'gb';document.getElementById('m-grade').innerHTML=`<span class="grade-badge ${gcls}">${d.grade}</span>`;}
  else gc.style.display='none';
  if(d.semester){sc.style.display='block';document.getElementById('m-sem').textContent=d.semester;}
  else sc.style.display='none';
  const slabels={done:'✓ Concluída',enrolled:'▶ Cursando',failed:'↺ Já reprovei',pending:'⬜ Pendente'};
  const scolors={done:'var(--green)',enrolled:'var(--accent)',failed:'var(--yellow)',pending:'var(--muted)'};
  const sb=document.getElementById('m-sbadge');
  sb.textContent=slabels[d.status];
  sb.style.cssText=`background:${scolors[d.status]}22;color:${scolors[d.status]};border:1px solid ${scolors[d.status]}44;font-size:.68rem;padding:2px 8px;border-radius:5px;`;
  ['pending','enrolled','done','failed'].forEach(s=>{
    document.getElementById('st-'+s).className='st-btn'+(d.status===s?' s-'+s:'');
  });
  const gn=id=>DATA[G].find(x=>x.id===id)?.name||id;
  document.getElementById('m-pre').innerHTML=(sub.pre||[]).length
    ?sub.pre.map(p=>`<span class="chip pre">${gn(p)}</span>`).join('')
    :'<span class="chip none">Nenhum pré-requisito</span>';
  document.getElementById('m-post').innerHTML=(sub.unlocks||[]).length
    ?sub.unlocks.map(p=>`<span class="chip post">${gn(p)}</span>`).join('')
    :'<span class="chip none">Não libera outras matérias</span>';
  document.getElementById('m-teachers').value=d.teachers||'';
  document.getElementById('m-materials').value=d.materials||'';
  document.getElementById('m-notes').value=d.notes||'';
  document.getElementById('overlay').classList.add('open');
}

function closeModal(){document.getElementById('overlay').classList.remove('open');activeSub=null;}

function setStatus(st){
  if(!activeSub)return;
  setSub(activeSub.id,{status:st});
  const card=document.getElementById('card-'+activeSub.id);
  if(card){card.classList.remove('done','enrolled','failed');if(st!=='pending')card.classList.add(st);}
  openModal(activeSub);
  updateStats();
  const msgs={done:'✓ Marcada como concluída!',enrolled:'▶ Marcada como cursando!',failed:'↺ Marcada como reprovada!',pending:'⬜ Status removido'};
  showToast(msgs[st],st==='done'?'ok':'');
}

function saveExtra(){
  if(!activeSub)return;
  setSub(activeSub.id,{
    teachers:document.getElementById('m-teachers').value,
    materials:document.getElementById('m-materials').value,
    notes:document.getElementById('m-notes').value,
  });
  showToast('💾 Informações salvas!','ok');
}
