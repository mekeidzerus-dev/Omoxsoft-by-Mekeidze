// Modal behavior
(function(){
  const modal = document.getElementById('modal');
  if(!modal) return;
  const mTitle = document.getElementById('mTitle');
  const mTech  = document.getElementById('mTech');
  const mDesc  = document.getElementById('mDesc');
  const mStatus = document.getElementById('mStatus');
  const mImg   = document.getElementById('mImg');
  const mDemo  = document.getElementById('mDemo');
  const focusableSel = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let lastActive = null;

  function visibleFocusable(){
    return Array.from(modal.querySelectorAll(focusableSel)).filter(el => el.offsetParent !== null && !el.hasAttribute('aria-hidden'));
  }

  function focusFirst(){
    const focusable = visibleFocusable();
    if(focusable.length){ focusable[0].focus(); }
    else modal.focus();
  }

  function handleKeydown(event){
    if(event.key === 'Escape'){
      event.preventDefault();
      closeModal();
      return;
    }
    if(event.key !== 'Tab') return;
    const focusable = visibleFocusable();
    if(!focusable.length){ event.preventDefault(); modal.focus(); return; }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if(event.shiftKey){
      if(document.activeElement === first || document.activeElement === modal){ event.preventDefault(); last.focus(); }
    } else {
      if(document.activeElement === last){ event.preventDefault(); first.focus(); }
    }
  }

  function openModal(btn){
    const card = btn.closest('.card');
    if(!card) return;
    if(mTitle) mTitle.textContent = card.dataset.title || '';
    if(mTech)  mTech.textContent  = card.dataset.tech || '';
    if(mDesc)  mDesc.textContent  = card.dataset.desc || '';
    if(mStatus){
      const status = card.dataset.status || '';
      const lang = (window.currentLang || 'ru').split('-')[0];
      const statusKey = lang === 'it' ? 'statusIt' : lang === 'en' ? 'statusEn' : 'statusRu';
      const label = card.dataset.statusLabel || card.dataset[statusKey] || card.dataset.statusRu || '';
      mStatus.textContent = label || '';
      mStatus.className = 'status-badge modal-status';
      if(status){
        mStatus.classList.add(
          status === 'active' ? 'status-app-active' :
          status === 'progress' ? 'status-app-progress' :
          status === 'planned' ? 'status-app-planned' : ''
        );
      }
      if(label){ mStatus.hidden = false; } else { mStatus.hidden = true; }
    }
    const img = card.dataset.img;
    if(mImg){ if(img) mImg.src = img; else mImg.removeAttribute('src'); }
    if(mDemo) mDemo.href = card.dataset.demo || '#';
    lastActive = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modal.classList.add('open');
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('tabindex','-1');
    document.addEventListener('keydown', handleKeydown);
    setTimeout(focusFirst, 0);
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    modal.removeAttribute('tabindex');
    document.removeEventListener('keydown', handleKeydown);
    if(mStatus){
      mStatus.hidden = true;
      mStatus.textContent = '';
      mStatus.className = 'status-badge modal-status';
    }
    if(lastActive && typeof lastActive.focus === 'function'){ lastActive.focus(); }
  }
  modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
  window.openModal = openModal; window.closeModal = closeModal;
})();
