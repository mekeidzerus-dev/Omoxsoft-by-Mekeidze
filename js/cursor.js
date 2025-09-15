// Motorcycle cursor with smoke (desktop only)
(function initMotoCursor(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if(!finePointer) return; // skip on touch devices

  const bike = document.createElement('span');
  bike.className = 'cursor-bike';
  bike.setAttribute('aria-hidden','true');
  bike.textContent = '🏍️';
  document.body.appendChild(bike);
  document.body.classList.add('hide-native-cursor');

  let targetX = -100, targetY = -100;
  let curX = targetX, curY = targetY;
  let lastSmoke = 0;
  const lerp = (a,b,t)=> a+(b-a)*t;
  function raf(){
    curX = lerp(curX, targetX, 0.25);
    curY = lerp(curY, targetY, 0.25);
    bike.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  function makeSmoke(x,y){
    if(prefersReduced) return;
    const s = document.createElement('span');
    s.className = 'smoke';
    s.style.left = x+'px';
    s.style.top = y+'px';
    document.body.appendChild(s);
    s.addEventListener('animationend', ()=> s.remove());
  }

  window.addEventListener('mousemove', (e)=>{
    targetX = e.clientX; targetY = e.clientY;
    const now = performance.now();
    if(now - lastSmoke > 70){
      lastSmoke = now;
      makeSmoke(e.clientX, e.clientY);
    }
  });
  window.addEventListener('mouseleave', ()=>{ bike.style.transform = 'translate(-200px,-200px)'; });
})();
