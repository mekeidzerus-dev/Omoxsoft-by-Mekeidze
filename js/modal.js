// Modal behavior
(function(){
  const modal = document.getElementById('modal');
  if(!modal) return;
  const mTitle = document.getElementById('mTitle');
  const mTech  = document.getElementById('mTech');
  const mDesc  = document.getElementById('mDesc');
  const mImg   = document.getElementById('mImg');
  const mDemo  = document.getElementById('mDemo');

  function openModal(btn){
    const card = btn.closest('.card');
    if(!card) return;
    if(mTitle) mTitle.textContent = card.dataset.title || '';
    if(mTech)  mTech.textContent  = card.dataset.tech || '';
    if(mDesc)  mDesc.textContent  = card.dataset.desc || '';
    const img = card.dataset.img;
    if(mImg){ if(img) mImg.src = img; else mImg.removeAttribute('src'); }
    if(mDemo) mDemo.href = card.dataset.demo || '#';
    modal.classList.add('open');
  }
  function closeModal(){ modal.classList.remove('open'); }
  modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
  window.openModal = openModal; window.closeModal = closeModal;
})();
