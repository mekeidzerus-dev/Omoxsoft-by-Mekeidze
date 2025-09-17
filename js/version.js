(function(){
  const yearEl = document.getElementById('year');
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }

  const versionEl = document.getElementById('siteVersion');
  if(!versionEl) return;

  const lastModifiedValue = document.lastModified || '';
  const updated = lastModifiedValue ? new Date(lastModifiedValue) : new Date();
  const isValidDate = !Number.isNaN(updated.getTime());
  const date = isValidDate ? updated : new Date();

  const pad = (val)=> String(val).padStart(2,'0');
  const version = `v${date.getFullYear()}.${pad(date.getMonth()+1)}${pad(date.getDate())}.${pad(date.getHours())}${pad(date.getMinutes())}`;

  versionEl.textContent = version;
})();
