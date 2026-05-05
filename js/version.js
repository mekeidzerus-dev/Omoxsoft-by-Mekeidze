(function(){
  const yearEl = document.getElementById('year');
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }

  const versionEl = document.getElementById('siteVersion');
  if(!versionEl) return;

  const releaseVersion = 'v2026.0505.2';
  versionEl.textContent = releaseVersion;
  versionEl.setAttribute('title', 'Обновлено: шапка, футер, услуги и быстрые действия');
})();
