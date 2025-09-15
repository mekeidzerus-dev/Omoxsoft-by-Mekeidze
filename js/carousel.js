// Carousel init
(function initCarousel(){
  const wrap = document.querySelector('.carousel-wrap');
  if(!wrap) return;
  const list = document.getElementById('projCarousel');
  if(!list) return;
  const prev = wrap.querySelector('.arrow.prev');
  const next = wrap.querySelector('.arrow.next');
  const step = () => list.clientWidth * 0.9;

  function update(){
    if(prev) prev.disabled = list.scrollLeft <= 0;
    const maxScroll = list.scrollWidth - list.clientWidth - 2;
    if(next) next.disabled = list.scrollLeft >= maxScroll;
  }
  if(prev) prev.addEventListener('click', () => { list.scrollBy({ left: -step(), behavior: 'smooth' }); });
  if(next) next.addEventListener('click', () => { list.scrollBy({ left: step(), behavior: 'smooth' }); });
  list.addEventListener('scroll', update);
  window.addEventListener('resize', update);
  update();
})();

// Vertical ticker for experience list (shows 5 items, scrolls up)
(function initExperienceTicker(){
  const vp = document.querySelector('.xp-viewport');
  if(!vp) return;
  const list = vp.querySelector('.xp-list');
  if(!list) return;
  const dotsWrap = document.getElementById('xpDots');
  const visibleCount = 5;
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
    list.scrollTo({ left: Math.round(idx * pageWidth()), behavior: 'smooth' });
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
  start();
  wrap.addEventListener('mouseenter', stop);
  wrap.addEventListener('mouseleave', start);
  document.addEventListener('visibilitychange', () => { if(document.hidden) stop(); else start(); });
})();
