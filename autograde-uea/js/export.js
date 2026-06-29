// ── EXPORT ───────────────────────────────────────────────────────────────────

// ── EXPORT MENU ──────────────────────────────────────────────────────────────
function toggleExportMenu(){
  document.getElementById('export-menu').classList.toggle('open');
}

document.addEventListener('click', e => {
  const wrap = document.getElementById('export-wrap');
  if(wrap && !wrap.contains(e.target))
    document.getElementById('export-menu').classList.remove('open');
});

// ── PNG ───────────────────────────────────────────────────────────────────────
async function exportPNG(scale){
  document.getElementById('export-menu').classList.remove('open');
  showToast('Gerando imagem...');

  const track = document.getElementById('track');
  const wasDimmed = track.classList.contains('dimmed');
  if(wasDimmed){
    track.classList.remove('dimmed');
    document.querySelectorAll('.card').forEach(c => c.classList.remove('lit'));
  }

  const bg = getComputedStyle(document.body).getPropertyValue('--bg').trim() || '#0d0f14';

  try{
    const canvas = await html2canvas(track, {
      scale, backgroundColor: bg, useCORS: true, allowTaint: false, logging: false,
    });

    const pad = 24 * scale;
    const out = document.createElement('canvas');
    out.width  = canvas.width  + pad * 2;
    out.height = canvas.height + pad * 2;
    const ctx = out.getContext('2d');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, out.width, out.height);
    ctx.drawImage(canvas, pad, pad);

    const date = new Date().toISOString().slice(0, 10);
    const slug = G.toLowerCase().replace('_', '-');
    const a = document.createElement('a');
    a.download = `grade-${slug}-${scale}x-${date}.png`;
    a.href = out.toDataURL('image/png');
    a.click();
    showToast(`PNG ${scale}× exportado!`, 'ok');
  } catch(err){
    showToast('Erro ao gerar PNG.');
    console.error(err);
  }

  if(wasDimmed) track.classList.add('dimmed');
}

// ── SVG VETORIAL ─────────────────────────────────────────────────────────────
function exportSVG(){
  document.getElementById('export-menu').classList.remove('open');
  showToast('Gerando SVG vetorial...');

  const track  = document.getElementById('track');
  const tR     = track.getBoundingClientRect();
  const W      = track.scrollWidth;
  const H      = track.scrollHeight;

  // Resolve CSS variables from active theme
  const cs = getComputedStyle(document.body);
  const C = {
    bg:      cs.getPropertyValue('--bg').trim()      || '#0d0f14',
    surface: cs.getPropertyValue('--surface').trim() || '#13161e',
    text:    cs.getPropertyValue('--text').trim()    || '#e8eaf0',
    muted:   cs.getPropertyValue('--muted').trim()   || '#7a82a0',
    green:   cs.getPropertyValue('--green').trim()   || '#26de81',
    yellow:  cs.getPropertyValue('--yellow').trim()  || '#fdcb6e',
    red:     cs.getPropertyValue('--red').trim()     || '#ff6b6b',
    accent:  cs.getPropertyValue('--accent').trim()  || '#4f8ef7',
    accent2: cs.getPropertyValue('--accent2').trim() || '#a78bfa',
  };

  const ns = 'http://www.w3.org/2000/svg';

  function se(tag, attrs = {}){
    const e = document.createElementNS(ns, tag);
    for(const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    return e;
  }
  function st(content, attrs = {}){
    const e = se('text', attrs);
    e.textContent = content;
    return e;
  }

  // Simple word-wrap: split into lines of at most maxCh characters
  function wrap(text, maxCh){
    const words = text.split(' ');
    const lines = [];
    let cur = '';
    for(const w of words){
      const test = cur ? cur + ' ' + w : w;
      if(test.length > maxCh && cur){ lines.push(cur); cur = w; }
      else cur = test;
    }
    if(cur) lines.push(cur);
    return lines;
  }

  // Position of a DOM element relative to #track, accounting for any scroll
  function pos(el){
    const r = el.getBoundingClientRect();
    return { x: r.left - tR.left, y: r.top - tR.top, w: r.width, h: r.height };
  }

  // ── Root SVG ──────────────────────────────────────────────────────────────
  const SVG = se('svg', {
    xmlns: ns,
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    width: W, height: H,
    viewBox: `0 0 ${W} ${H}`,
  });

  // Theme-aware arrow stroke
  const isLight = document.body.classList.contains('theme-light');
  const isHC    = document.body.classList.contains('theme-hc');
  const arrowStroke = isHC    ? 'rgba(255,255,255,0.38)'
                    : isLight ? 'rgba(30,50,100,0.18)'
                              : 'rgba(120,130,160,0.25)';

  // Embed Google Fonts for browser SVG viewers + arrowhead marker
  const defs = se('defs');
  const style = document.createElementNS(ns, 'style');
  style.textContent =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Syne:wght@700;800');\n" +
    "text { font-family: 'Space Grotesk', system-ui, sans-serif; }";
  defs.appendChild(style);
  const ahMarker = se('marker', {
    id: 'ah', markerWidth: 8, markerHeight: 6,
    refX: 8, refY: 3, orient: 'auto', markerUnits: 'userSpaceOnUse',
  });
  ahMarker.appendChild(se('polygon', { points: '0 0, 8 3, 0 6', fill: arrowStroke }));
  defs.appendChild(ahMarker);
  SVG.appendChild(defs);

  // Background
  SVG.appendChild(se('rect', { width: W, height: H, fill: C.bg }));

  // ── Period column headers ─────────────────────────────────────────────────
  document.querySelectorAll('.period-head').forEach(head => {
    const { x, y, w, h } = pos(head);
    const color = head.style.color || C.muted;
    const g = se('g');
    g.appendChild(se('rect', { x, y, width: w, height: h, rx: 8,
      fill: color + '18', stroke: color + '50', 'stroke-width': 1 }));
    g.appendChild(st(head.textContent.trim(), {
      x: x + w / 2, y: y + h / 2 + 4,
      'text-anchor': 'middle',
      fill: color,
      'font-size': 9, 'font-weight': 700, 'letter-spacing': 1.5,
    }));
    SVG.appendChild(g);
  });

  // ── Cards ────────────────────────────────────────────────────────────────
  DATA[G].forEach(sub => {
    const cardEl = document.getElementById('card-' + sub.id);
    if(!cardEl) return;

    const { x: cx, y: cy, w: cw, h: ch } = pos(cardEl);
    const d = getSub(sub.id);
    const pColor = PC[sub.period]?.main || C.muted;
    const isOptSlot = sub.optional === true;
    const hasRealSub = isOptSlot && !!d.subjectName;

    const opacity = d.status === 'done' ? 0.32 : 1;
    const isDashed = d.status === 'done' || d.status === 'trancado' || (isOptSlot && !hasRealSub);

    const g = se('g', { 'data-id': sub.id, opacity });

    // Card background rect
    const isFailed = d.status === 'failed';
    g.appendChild(se('rect', { x: cx, y: cy, width: cw, height: ch, rx: 10,
      fill: isFailed ? 'rgba(255,107,107,0.07)' : C.surface,
      stroke: isFailed ? 'rgba(255,107,107,0.55)' : (isDashed ? C.muted + '55' : pColor + '40'),
      'stroke-width': isFailed ? 1.5 : 1,
      ...(isDashed ? { 'stroke-dasharray': '5,3' } : {}),
    }));

    // Left stripe (4px, left-rounded via rx=2 approximation)
    g.appendChild(se('rect', { x: cx, y: cy, width: 4, height: ch, rx: 2, fill: pColor }));

    // ── Text from real DOM positions ───────────────────────────────────────
    const FONT = "'Space Grotesk', system-ui, sans-serif";

    const codeEl  = cardEl.querySelector('.card-code');
    const nameEl  = cardEl.querySelector('.card-name');
    const hoursEl = cardEl.querySelector('.card-hours');
    const gradeEl = cardEl.querySelector('.card-grade .grade-badge');

    // OPT badge (sits above code)
    const optEl = cardEl.querySelector('.opt-badge');
    if(optEl){
      const p = pos(optEl);
      g.appendChild(st('OPT', {
        x: p.x, y: p.y + p.h - 1,
        fill: C.accent2, 'fill-opacity': hasRealSub ? 1 : 0.7,
        'font-size': 6.5, 'font-weight': 700, 'letter-spacing': 1.2,
        'font-family': FONT,
      }));
    }

    // Subject code
    if(codeEl && CFG.showCode){
      const p = pos(codeEl);
      g.appendChild(st(codeEl.textContent.trim(), {
        x: p.x, y: p.y + p.h - 1,
        fill: pColor,
        'font-size': 8, 'font-weight': 700, 'letter-spacing': 1.5,
        'font-family': FONT,
      }));
    }

    // Subject name — word-wrapped
    if(nameEl){
      const p = pos(nameEl);
      const charLimit = Math.max(10, Math.floor((cw - 26) / 6.2));
      const lines = wrap(nameEl.textContent.trim(), charLimit);
      const lh = 12;
      lines.slice(0, 3).forEach((line, i) => {
        g.appendChild(st(line, {
          x: p.x, y: p.y + 10 + i * lh,
          fill: d.status === 'done' ? C.muted : C.text,
          'font-size': 10, 'font-weight': 600,
          'font-family': FONT,
        }));
      });
    }

    // Hours
    if(hoursEl && CFG.showHours){
      const p = pos(hoursEl);
      g.appendChild(st(hoursEl.textContent.trim(), {
        x: p.x, y: p.y + p.h - 1,
        fill: C.muted,
        'font-size': 8,
        'font-family': FONT,
      }));
    }

    // Grade badge
    if(gradeEl && CFG.showGrade){
      const p = pos(gradeEl);
      const gv = parseFloat(d.grade || '0');
      const gc = gv >= 7 ? C.green : gv >= 5 ? C.yellow : C.red;
      g.appendChild(se('rect', { x: p.x, y: p.y, width: p.w, height: p.h, rx: 4, fill: gc + '25' }));
      g.appendChild(st(d.grade, {
        x: p.x + p.w / 2, y: p.y + p.h - 3,
        'text-anchor': 'middle',
        fill: gc,
        'font-size': 10, 'font-weight': 700,
        'font-family': FONT,
      }));
    }

    // Status icon (top-right corner)
    const sIcon  = { done: '✓', enrolled: '▶', failed: '↺', trancado: '↩' };
    const sColor = { done: C.green, enrolled: C.accent, failed: C.red, trancado: C.muted };
    if(sIcon[d.status]){
      g.appendChild(st(sIcon[d.status], {
        x: cx + cw - 9, y: cy + 13,
        'text-anchor': 'middle',
        fill: sColor[d.status],
        'font-size': 10, 'font-weight': 800,
        'font-family': FONT,
      }));
    }

    SVG.appendChild(g);
  });

  // ── Arrows — copy live SVG paths ─────────────────────────────────────────
  const svgLayer = document.getElementById('svg-layer');
  const arrowsG  = se('g', { 'data-layer': 'arrows' });
  svgLayer.querySelectorAll('path').forEach(path => {
    arrowsG.appendChild(se('path', {
      d:                path.getAttribute('d'),
      stroke:           arrowStroke,
      fill:             'none',
      'stroke-width':   path.getAttribute('stroke-width') || 1.5,
      'stroke-linecap': 'round',
      'stroke-linejoin':'round',
      'marker-end':     'url(#ah)',
    }));
  });
  SVG.appendChild(arrowsG);

  // ── Serialize & download ──────────────────────────────────────────────────
  const svgStr = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    new XMLSerializer().serializeToString(SVG);
  const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
  const date = new Date().toISOString().slice(0, 10);
  const slug = G.toLowerCase().replace('_', '-');
  const a = document.createElement('a');
  a.download = `grade-${slug}-${date}.svg`;
  a.href = URL.createObjectURL(blob);
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('SVG exportado!', 'ok');
}
