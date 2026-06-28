// ── MODAL ────────────────────────────────────────────────────────────────────
function openModal(sub){
  activeSub=sub;
  const d=getSub(sub.id);
  const c=PC[sub.period];
  const hasRealSub=sub.optional && !!d.subjectName;
  const displayName=hasRealSub ? d.subjectName : sub.name;
  const displayCode=hasRealSub ? d.subjectCode : sub.code;
  const displayHours=hasRealSub ? (d.subjectHours||'—') : sub.hours;
  document.getElementById('modal-top').style.background=`linear-gradient(135deg,${c.main}28,${c.light})`;
  document.getElementById('m-period').textContent=`${sub.period}º Período`;
  document.getElementById('m-period').style.color=c.main;
  document.getElementById('m-title').textContent=displayName;
  document.getElementById('m-code').textContent=displayCode;
  document.getElementById('m-hours').textContent=displayHours;
  const gc=document.getElementById('m-gc'),sc=document.getElementById('m-sc');
  if(d.grade){gc.style.display='block';const gv=parseFloat(d.grade);const gcls=gv>=7?'gg':gv>=5?'gk':'gb';document.getElementById('m-grade').innerHTML=`<span class="grade-badge ${gcls}">${d.grade}</span>`;}
  else gc.style.display='none';
  if(d.semester){sc.style.display='block';document.getElementById('m-sem').textContent=d.semester;}
  else sc.style.display='none';
  const tc=document.getElementById('m-tc');
  if(d.turma){tc.style.display='block';document.getElementById('m-turma').textContent=d.turma;}
  else tc.style.display='none';
  const slabels={
    done:    `${CARD_BADGE_SVG.done} Concluída`,
    enrolled:`${CARD_BADGE_SVG.enrolled} Cursando`,
    failed:  `${CARD_BADGE_SVG.failed} Já reprovei`,
    pending: `${IC.pending(12)} Pendente`,
    trancado:`${CARD_BADGE_SVG.trancado} Trancada`,
  };
  const scolors={done:'var(--green)',enrolled:'var(--accent)',failed:'var(--red)',pending:'var(--muted)',trancado:'var(--muted)'};
  const sb=document.getElementById('m-sbadge');
  sb.innerHTML=slabels[d.status];
  sb.style.cssText=`background:${scolors[d.status]}22;color:${scolors[d.status]};border:1px solid ${scolors[d.status]}44;font-size:.68rem;padding:2px 8px;border-radius:5px;display:inline-flex;align-items:center;gap:4px;`;
  ['pending','enrolled','done','failed'].forEach(s=>{
    document.getElementById('st-'+s).className='st-btn'+(d.status===s?' s-'+s:'');
  });
  const attWrap=document.getElementById('m-attempts-wrap');
  const attEl=document.getElementById('m-attempts');
  if(d.attempts && d.attempts.length>1){
    const semVal=s=>{const m=(s||'').match(/(\d{4})\/(\d)/);return m?+m[1]*10+ +m[2]:0;};
    const sorted=[...d.attempts].sort((a,b)=>semVal(a.semester)-semVal(b.semester));
    const sicon={done:CARD_BADGE_SVG.done,enrolled:CARD_BADGE_SVG.enrolled,failed:CARD_BADGE_SVG.failed,trancado:CARD_BADGE_SVG.trancado};
    const slabel={done:'Aprovado',enrolled:'Cursando',failed:'Reprovado',trancado:'Trancado'};
    attEl.innerHTML=sorted.map((a,i)=>{
      const isFinal=i===sorted.length-1;
      const gv=parseFloat(a.grade);
      const gc=gv>=7?'gg':gv>=5?'gk':'gb';
      const badge=a.grade?`<span class="grade-badge ${gc}">${a.grade}</span>`:'';
      const turmaTag=a.turma?`<span class="att-turma">${a.turma}</span>`:'';
      return `<div class="att-row${isFinal?' att-final':''}">`+
        `<span class="att-sem">${a.semester||'—'}</span>`+
        badge+
        `<span class="att-lbl">${sicon[a.status]||''} ${slabel[a.status]||a.status}</span>`+
        turmaTag+
        (isFinal?'<span class="att-tag">final</span>':'')+
        `</div>`;
    }).join('');
    attWrap.style.display='';
  } else {
    attWrap.style.display='none';
  }

  const gn=id=>{
    const s=DATA[G].find(x=>x.id===id);
    if(!s) return id;
    if(s.optional){const sd=getSub(s.id);if(sd.subjectName)return sd.subjectName;}
    return s.name;
  };
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
  if(card){
    card.classList.remove('done','enrolled','failed','trancado');
    if(st!=='pending') card.classList.add(st);
    const badge=card.querySelector('.card-badge');
    if(badge) badge.innerHTML=CARD_BADGE_SVG[st]||'';
  }
  openModal(activeSub);
  updateStats();
  const msgs={
    done:    `${CARD_BADGE_SVG.done} Marcada como concluída!`,
    enrolled:`${CARD_BADGE_SVG.enrolled} Marcada como cursando!`,
    failed:  `${CARD_BADGE_SVG.failed} Marcada como reprovada!`,
    pending: 'Status removido',
  };
  showToast(msgs[st],st==='done'?'ok':'');
}

function saveExtra(){
  if(!activeSub)return;
  setSub(activeSub.id,{
    teachers:document.getElementById('m-teachers').value,
    materials:document.getElementById('m-materials').value,
    notes:document.getElementById('m-notes').value,
  });
  showToast(`${IC.save()} Informações salvas!`,'ok');
}
