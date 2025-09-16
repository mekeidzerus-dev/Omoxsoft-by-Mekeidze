const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Carousel init
(function initCarousel(){
  const wrap = document.querySelector('.carousel-wrap');
  if(!wrap) return;
  const list = document.getElementById('projCarousel');
  const dotsWrap = document.getElementById('projDots');
  if(!list || !dotsWrap) return;

  // Build dots based on page count (how many cards fit per viewport)
  function cardsPerView(){
    const card = list.querySelector('.card');
    if(!card) return 1;
    const gap = parseInt(getComputedStyle(list).gap) || 16;
    return Math.max(1, Math.floor((list.clientWidth + gap) / (card.clientWidth + gap)));
  }
  function pageCount(){
    const c = list.querySelectorAll('.card').length;
    const per = cardsPerView();
    return Math.max(1, Math.ceil(c / per));
  }
  let idx = 0;
  function rebuildDots(){
    const pages = pageCount();
    dotsWrap.innerHTML = '';
    for(let i=0;i<pages;i++){
      const d = document.createElement('span');
      d.className = 'dot'+(i===idx?' active':'');
      d.addEventListener('click', ()=> go(i));
      dotsWrap.appendChild(d);
    }
  }
  function setActive(){
    Array.from(dotsWrap.children).forEach((d,i)=> d.classList.toggle('active', i===idx));
  }
  function go(i){
    idx = (i + pageCount()) % pageCount();
    const per = cardsPerView();
    const card = list.querySelector('.card');
    const gap = parseInt(getComputedStyle(list).gap) || 16;
    const step = card ? (card.clientWidth + gap) * per : list.clientWidth;
    list.scrollTo({ left: Math.round(idx * step), behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    setActive();
  }
  function onScroll(){
    const per = cardsPerView();
    const card = list.querySelector('.card');
    const gap = parseInt(getComputedStyle(list).gap) || 16;
    const step = card ? (card.clientWidth + gap) * per : list.clientWidth;
    const i = Math.round(list.scrollLeft / Math.max(1, step));
    idx = Math.min(pageCount()-1, Math.max(0, i));
    setActive();
  }
  rebuildDots(); setActive();
  list.addEventListener('scroll', onScroll);
  window.addEventListener('resize', ()=>{ rebuildDots(); setActive(); });
})();

// Vertical ticker for experience list (shows 5 items, scrolls up)
(function initExperienceTicker(){
  const vp = document.querySelector('.xp-viewport');
  if(!vp) return;
  const list = vp.querySelector('.xp-list');
  if(!list) return;
  const dotsWrap = document.getElementById('xpDots');
  const visibleCount = 5;

  if(prefersReducedMotion.matches){
    vp.style.height = 'auto';
    list.style.transform = 'none';
    if(dotsWrap) dotsWrap.style.display = 'none';
    return;
  }
  function setViewportHeight(){
    let h = 0; let count = 0;
    const gap = parseInt(getComputedStyle(list).rowGap) || 0;
    for(const li of list.children){
      h += li.getBoundingClientRect().height;
      count++; if(count >= visibleCount) break; h += gap;
    }
    vp.style.height = h + 'px';
  }
  const total = list.children.length;
  const pages = Math.max(1, Math.ceil(total / visibleCount));
  if(dotsWrap){
    dotsWrap.innerHTML = '';
    for(let i=0;i<pages;i++){ const d=document.createElement('span'); d.className='dot'+(i===0?' active':''); dotsWrap.appendChild(d); }
  }
  let timer, paused = false; let animating = false; let pos = 0;
  function setActive(){
    if(!dotsWrap) return;
    const p = Math.floor(pos / visibleCount) % pages;
    Array.from(dotsWrap.children).forEach((d,i)=> d.classList.toggle('active', i===p));
  }
  function tick(){
    if(paused || animating) return;
    const first = list.children[0]; if(!first) return;
    const gap = parseInt(getComputedStyle(list).rowGap) || 0;
    const h = first.getBoundingClientRect().height + gap;
    animating = true;
    list.style.transition = 'transform 500ms ease';
    list.style.transform = `translateY(-${h}px)`;
    const onend = () => {
      list.style.transition = 'none';
      list.appendChild(first);
      list.style.transform = 'translateY(0)';
      animating = false; pos = (pos + 1) % Math.max(1,total); setActive();
    };
    list.addEventListener('transitionend', onend, { once: true });
  }
  function start(){ stop(); timer = setInterval(tick, 3000); }
  function stop(){ if(timer) clearInterval(timer); timer = null; }
  vp.addEventListener('mouseenter', () => { paused = true; });
  vp.addEventListener('mouseleave', () => { paused = false; });
  window.addEventListener('resize', setViewportHeight);
  setViewportHeight(); setActive(); start();
})();

// Skills slider (2x2 pages) with autoplay
(function initSkillsSlider(){
  const wrap = document.querySelector('.skills-slider-wrap');
  if(!wrap) return;
  const list = document.getElementById('skillsSlider');
  const dotsWrap = document.getElementById('skillsDots');
  if(!list || !dotsWrap) return;
  const pageWidth = () => list.clientWidth; // each page = 100%
  const pages = list.querySelectorAll('.skills-page').length;
  let idx = 0;
  // Build dots
  dotsWrap.innerHTML = '';
  const dots = [];
  for(let i=0;i<pages;i++){ const d=document.createElement('span'); d.className='dot'+(i===0?' active':''); d.addEventListener('click', ()=>go(i)); dotsWrap.appendChild(d); dots.push(d); }
  function setActive(){ dots.forEach((d,i)=> d.classList.toggle('active', i===idx)); }
  function go(i){
    idx = (i + pages) % pages;
    list.scrollTo({ left: Math.round(idx * pageWidth()), behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    setActive();
  }
  list.addEventListener('scroll', () => {
    const i = Math.round(list.scrollLeft / Math.max(1, pageWidth()));
    const newIdx = Math.min(pages - 1, Math.max(0, i));
    if(newIdx !== idx){ idx = newIdx; setActive(); }
  });
  window.addEventListener('resize', () => go(idx));

  // autoplay
  let timer;
  const start = () => { stop(); timer = setInterval(() => go(idx + 1), 4000); };
  const stop  = () => { if(timer) clearInterval(timer); timer = null; };
  if(!prefersReducedMotion.matches){
    start();
    wrap.addEventListener('mouseenter', stop);
    wrap.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', () => { if(document.hidden) stop(); else start(); });
  }
})();

if(typeof prefersReducedMotion.addEventListener === 'function'){
  prefersReducedMotion.addEventListener('change', () => window.location.reload());
} else if(typeof prefersReducedMotion.addListener === 'function'){
  prefersReducedMotion.addListener(() => window.location.reload());
}
