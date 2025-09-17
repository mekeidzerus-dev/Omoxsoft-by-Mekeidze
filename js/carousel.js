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

// Project card galleries (multi-image preview inside each card)
(function initCardGalleries(){
  const containers = document.querySelectorAll('.card-img');
  if(!containers.length) return;

  const AUTOPLAY_DELAY = 4500;

  containers.forEach(container => {
    if(container.dataset.galleryInit === '1') return;
    const images = Array.from(container.querySelectorAll('img'));
    if(images.length <= 1) return;

    container.dataset.galleryInit = '1';
    const gallery = document.createElement('div');
    gallery.className = 'card-gallery';
    const track = document.createElement('div');
    track.className = 'card-gallery-track';
    gallery.appendChild(track);

    const slides = images.map((img, index) => {
      img.classList.add('card-gallery-slide');
      if(!img.hasAttribute('loading')) img.loading = index === 0 ? 'eager' : 'lazy';
      if(index === 0){
        img.classList.add('is-active');
        img.setAttribute('aria-hidden', 'false');
      } else {
        img.classList.remove('is-active');
        img.setAttribute('aria-hidden', 'true');
      }
      track.appendChild(img);
      return img;
    });

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'card-gallery-dots';
    const dots = slides.map((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'card-gallery-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', `Перейти к изображению ${i + 1} из ${slides.length}`);
      dotsWrap.appendChild(dot);
      return dot;
    });

    const prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'card-gallery-nav prev';
    prev.setAttribute('aria-label', 'Предыдущее изображение');

    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'card-gallery-nav next';
    next.setAttribute('aria-label', 'Следующее изображение');

    gallery.append(prev, next, dotsWrap);
    container.appendChild(gallery);

    let index = 0;
    let timer = null;

    function setActive(target){
      slides.forEach((img, i) => {
        const active = i === target;
        img.classList.toggle('is-active', active);
        img.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === target);
        dot.setAttribute('aria-pressed', i === target ? 'true' : 'false');
      });
      index = target;
    }

    function goTo(target){
      const total = slides.length;
      const nextIndex = ((target % total) + total) % total;
      setActive(nextIndex);
      restart();
    }

    function nextSlide(step){
      goTo(index + (typeof step === 'number' ? step : 1));
    }

    function start(){
      if(prefersReducedMotion.matches || slides.length <= 1) return;
      stop();
      timer = window.setInterval(() => nextSlide(1), AUTOPLAY_DELAY);
    }

    function stop(){
      if(timer){
        window.clearInterval(timer);
        timer = null;
      }
    }

    function restart(){
      stop();
      if(!prefersReducedMotion.matches){
        start();
      }
    }

    prev.addEventListener('click', () => nextSlide(-1));
    next.addEventListener('click', () => nextSlide(1));
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goTo(i));
    });

    container.addEventListener('mouseenter', stop);
    container.addEventListener('mouseleave', start);
    gallery.addEventListener('focusin', stop);
    gallery.addEventListener('focusout', (event) => {
      if(!gallery.contains(event.relatedTarget)){
        start();
      }
    });

    setActive(0);
    start();
  });
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
