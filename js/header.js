// Header: age, birth date, footer year
function calcAge(date){
  const now = new Date();
  let age = now.getFullYear() - date.getFullYear();
  const m = now.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < date.getDate())) age--;
  return age;
}

(function initHeader(){
  const b = new Date(window.birthDateStr);
  const ageEl = document.querySelector('[data-age]');
  const birthEl = document.querySelector('[data-birth]');
  if(!isNaN(b)){
    if(ageEl) ageEl.textContent = calcAge(b);
    if(birthEl) birthEl.textContent = b.toLocaleDateString((window.currentLang||'ru') === 'ru' ? 'ru-RU' : 'it-IT');
  } else {
    if(ageEl) ageEl.textContent = '—';
    if(birthEl) birthEl.textContent = 'укажи в коде';
  }
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Match left about card height to education card on the right (best effort)
(function syncAboutHeight(){
  const about = document.getElementById('aboutCard');
  const edu = document.getElementById('eduCard');
  if(!about || !edu) return;
  function apply(){
    // reset first to get natural content height
    about.style.minHeight = '';
    // use computed height of education card content
    const h = edu.getBoundingClientRect().height;
    if(h > 0) about.style.minHeight = Math.round(h) + 'px';
  }
  const ro = new ResizeObserver(apply);
  ro.observe(edu);
  window.addEventListener('resize', apply);
  apply();
})();

// Export calcAge if needed elsewhere
window.calcAge = calcAge;
