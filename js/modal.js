// Modal behavior
(function(){
  const modal = document.getElementById('modal');
  if(!modal) return;
  const mTitle = document.getElementById('mTitle');
  const mTech  = document.getElementById('mTech');
  const mDesc  = document.getElementById('mDesc');
  const mStatus = document.getElementById('mStatus');
  const mImg   = document.getElementById('mImg');
  const mImageFrame = modal.querySelector('.modal-img');
  const mDemo  = document.getElementById('mDemo');
  const focusableSel = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let lastActive = null;

  const previews = {
    fidaty: `
      <div class="project-preview fidaty-preview modal-preview" role="img" aria-label="FIDATY EDILIZIA preview">
        <div class="preview-browser" aria-hidden="true">
          <div class="preview-topbar"><span></span><span></span><span></span><strong>fidatyedilizia.it</strong></div>
          <div class="preview-hero">
            <div class="preview-kicker">Bagni chiavi in mano</div>
            <div class="preview-title">FIDATY EDILIZIA</div>
            <div class="preview-lines"><i></i><i></i><i></i></div>
          </div>
          <div class="preview-grid"><i></i><i></i><i></i></div>
        </div>
      </div>`,
    moti: `
      <div class="project-preview moti-preview modal-preview" role="img" aria-label="Moti House preview">
        <div class="preview-browser" aria-hidden="true">
          <div class="preview-topbar"><span></span><span></span><span></span><strong>motihouse.com</strong></div>
          <div class="preview-hero">
            <div class="preview-kicker">Japanese desserts</div>
            <div class="preview-title">Moti House</div>
            <div class="preview-lines"><i></i><i></i><i></i></div>
          </div>
          <div class="preview-products"><i></i><i></i><i></i><i></i></div>
        </div>
      </div>`,
    password: `
      <div class="project-preview password-preview modal-preview" role="img" aria-label="Password generator preview">
        <div class="preview-browser" aria-hidden="true">
          <div class="preview-topbar"><span></span><span></span><span></span><strong>Password Generator</strong></div>
          <div class="preview-tool">
            <div class="preview-password">K9#rV2!mQ8</div>
            <div class="preview-slider"><i></i></div>
            <div class="preview-checks"><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>`
  };

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
      const label = card.dataset.statusLabel || card.dataset[statusKey] || card.dataset.statusRu || card.dataset.statusIt || '';
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
    const preview = card.dataset.preview;
    const img = card.dataset.img;
    if(mImageFrame && preview && previews[preview]){
      mImageFrame.innerHTML = previews[preview];
    } else if(mImageFrame){
      mImageFrame.innerHTML = '<img id="mImg" alt="" />';
      const nextImg = document.getElementById('mImg');
      if(nextImg && img) nextImg.src = img;
    } else if(mImg){
      if(img) mImg.src = img; else mImg.removeAttribute('src');
    }
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
    if(mImageFrame){
      mImageFrame.innerHTML = '<img id="mImg" alt="" />';
    }
    if(lastActive && typeof lastActive.focus === 'function'){ lastActive.focus(); }
  }
  modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
  window.openModal = openModal; window.closeModal = closeModal;
})();
