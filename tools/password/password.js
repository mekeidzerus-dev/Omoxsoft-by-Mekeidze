(function(){
  const COUNT = 10;
  const els = {
    langToggle: document.getElementById('langToggle'),
    title: document.getElementById('pageTitle'),
    len: document.getElementById('len'),
    digits: document.getElementById('digits'),
    lower: document.getElementById('lower'),
    upper: document.getElementById('upper'),
    symbols: document.getElementById('symbols'),
    exclude: document.getElementById('exclude'),
    gen: document.getElementById('gen'),
    copyAll: document.getElementById('copyAll'),
    status: document.getElementById('status'),
    list: document.getElementById('list'),
    listCount: document.getElementById('listCount'),
    strBar: document.getElementById('strBar').firstElementChild,
    strText: document.getElementById('strText'),
  };

  const i18n = {
    ru: {
      back: 'Назад на главную',
      title: 'Генератор паролей',
      lang: 'Язык', settings: 'Настройки', length: 'Длина', lengthHelp: '4–64 символов',
      digits: 'Цифры', lower: 'Строчные буквы', upper: 'Заглавные буквы', symbols: 'Спецсимволы', exclude: 'Исключить похожие',
      generate: 'Сгенерировать', copyAll: 'Скопировать все', listTitle: 'Нажмите, чтобы скопировать',
      foot: '',
      note: 'Сайт разработан для бесплатного использования — буду благодарен за подписку: <a href="https://www.instagram.com/mekeidze_business_consulting/?igsh=MW53dXp5b2xtdnFheA%3D%3D&utm_source=qr#" target="_blank" rel="noopener">Instagram</a> · <a href="https://t.me/ruslanmekeidze" target="_blank" rel="noopener">Telegram</a>.',
      errorLength: 'Длина вне диапазона', errorSets: 'Выберите хотя бы один набор символов',
      strength: { very_weak:'Очень слабый', weak:'Слабый', medium:'Средний', strong:'Сильный', very_strong:'Очень сильный' },
      copied: 'Скопировано', copyError: 'Не удалось скопировать'
    },
    it: {
      back: 'Torna alla home',
      title: 'Generatore di password',
      lang: 'Lingua', settings: 'Impostazioni', length: 'Lunghezza', lengthHelp: '4–64 caratteri',
      digits: 'Numeri', lower: 'Lettere minuscole', upper: 'Lettere maiuscole', symbols: 'Simboli speciali', exclude: 'Escludi caratteri simili',
      generate: 'Genera', copyAll: 'Copia tutto', listTitle: 'Clicca per copiare',
      foot: '',
      note: 'Sito creato per uso gratuito — sarò grato per l’adesione: <a href="https://www.instagram.com/mekeidze_business_consulting/?igsh=MW53dXp5b2xtdnFheA%3D%3D&utm_source=qr#" target="_blank" rel="noopener">Instagram</a> · <a href="https://t.me/ruslanmekeidze" target="_blank" rel="noopener">Telegram</a>.',
      errorLength: 'Lunghezza fuori range', errorSets: 'Seleziona almeno un set di caratteri',
      strength: { very_weak:'Molto debole', weak:'Debole', medium:'Medio', strong:'Forte', very_strong:'Molto forte' },
      copied: 'Copiato', copyError: 'Copia non riuscita'
    }
  };

  let current = localStorage.getItem('pwgen_lang') || 'ru';
  function t(k){ const dict = i18n[current] || i18n.ru; return k.split('.').reduce((a,c)=> a && a[c], dict) || k; }

  function applyLang(){
    document.title = t('title');
    document.querySelector('[data-i18n="back"]').textContent = t('back');
    if(els.langToggle) els.langToggle.textContent = current === 'ru' ? 'IT' : 'RU';
    document.getElementById('pageTitle').textContent = t('title');
    document.querySelector('[data-i18n="settings"]').textContent = t('settings');
    document.querySelector('[data-i18n="length"]').textContent = t('length');
    document.querySelector('[data-i18n="lengthHelp"]').textContent = t('lengthHelp');
    document.querySelector('[data-i18n="digits"]').textContent = t('digits');
    document.querySelector('[data-i18n="lower"]').textContent = t('lower');
    document.querySelector('[data-i18n="upper"]').textContent = t('upper');
    document.querySelector('[data-i18n="symbols"]').textContent = t('symbols');
    document.querySelector('[data-i18n="exclude"]').textContent = t('exclude');
    document.querySelector('[data-i18n="generate"]').textContent = t('generate');
    document.querySelector('[data-i18n="copyAll"]').textContent = t('copyAll');
    document.querySelector('[data-i18n="listTitle"]').textContent = t('listTitle');
    const note = document.getElementById('note'); if(note) note.innerHTML = t('note');
    els.listCount.textContent = COUNT;
  }

  // character sets
  const SETS = { digits: '0123456789', lower: 'abcdefghijklmnopqrstuvwxyz', upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', symbols: '!@#$%^&*()_-+=[]{};:,.?/~' };
  const SIMILAR = new Set(['0','O','o','1','l','I','5','S','2','Z','8','B']);

  function buildAlphabet(){
    let a = '';
    if(els.digits.checked) a += SETS.digits;
    if(els.lower.checked) a += SETS.lower;
    if(els.upper.checked) a += SETS.upper;
    if(els.symbols.checked) a += SETS.symbols;
    if(els.exclude.checked) a = [...a].filter(ch=>!SIMILAR.has(ch)).join('');
    return [...new Set(a)].join('');
  }

  function secureRandomBelow(max){
    const maxUint = 0xFFFFFFFF; const limit = Math.floor(maxUint / max) * max; const buf = new Uint32Array(1);
    while(true){ crypto.getRandomValues(buf); if(buf[0] <= limit) return buf[0] % max; }
  }

  function genOne(len, alpha){ let out=''; for(let i=0;i<len;i++){ out += alpha[secureRandomBelow(alpha.length)]; } return out; }
  function genList(len, alpha, count){ const set=new Set(); let guard=0; while(set.size<(count||COUNT) && guard<5000){ set.add(genOne(len,alpha)); guard++; } return [...set]; }

  function entropyBits(len, alphaSize){ // approximate entropy
    return len * Math.log2(Math.max(2, alphaSize));
  }
  function strengthLabel(bits){
    if(bits < 35) return { key:'strength.very_weak', pct: 20 };
    if(bits < 50) return { key:'strength.weak', pct: 40 };
    if(bits < 70) return { key:'strength.medium', pct: 65 };
    if(bits < 90) return { key:'strength.strong', pct: 85 };
    return { key:'strength.very_strong', pct: 100 };
  }

  function setStatus(msg,type){ els.status.textContent = msg||''; els.status.className = 'status' + (type? ' ' + type : ''); }

  function renderList(items){
    els.list.innerHTML = '';
    for(const item of items){
      const row = document.createElement('div'); row.className='pw-item'; row.setAttribute('role','listitem'); row.tabIndex=0;
      const text = document.createElement('span'); text.textContent=item;
      const pill=document.createElement('span'); pill.className='pill ok'; pill.textContent=t('copied');
      // скрываем метку по умолчанию жёстко стилем, чтобы исключить любые коллизии
      pill.style.display = 'none';
      row.append(text,pill);
      const copy=()=> copyText(item).then(()=>{
        pill.style.display = 'inline-block';
        setTimeout(()=>{ pill.style.display='none'; }, 1200);
      }).catch(()=> setStatus(t('copyError'),'err'));
      row.addEventListener('click',copy); row.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); copy(); } });
      els.list.appendChild(row);
    }
  }

  function generate(){
    setStatus('');
    const len = parseInt(els.len.value,10);
    if(!Number.isFinite(len) || len<parseInt(els.len.min)|| len>parseInt(els.len.max)) { setStatus(t('errorLength'),'err'); return; }
    const alpha = buildAlphabet(); if(!alpha){ setStatus(t('errorSets'),'err'); return; }
    const items = genList(len, alpha, COUNT); renderList(items);
    const bits = entropyBits(len, alpha.length); const s=strengthLabel(bits);
    els.strBar.style.width = s.pct + '%'; els.strText.textContent = t(s.key) + ' • ' + Math.round(bits) + ' bits';
  }

  function copyText(text){
    if(navigator.clipboard && window.isSecureContext){ return navigator.clipboard.writeText(text); }
    return new Promise((res,rej)=>{ const ta=document.createElement('textarea'); ta.value=text; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); try{ document.execCommand('copy')?res():rej(new Error('exec')); }catch(e){ rej(e);} finally{ document.body.removeChild(ta);} });
  }

  function copyAll(){
    const items = Array.from(els.list.querySelectorAll('.pw-item span:first-child')).map(s=>s.textContent).join('\n');
    if(items) copyText(items).then(()=> setStatus(t('copied'),'ok')).catch(()=> setStatus(t('copyError'),'err'));
  }

  // events
  els.gen.addEventListener('click', generate);
  els.len.addEventListener('keydown', e=>{ if(e.key==='Enter') generate(); });
  els.copyAll.addEventListener('click', copyAll);
  if(els.langToggle){ els.langToggle.addEventListener('click', ()=>{ current = (current==='ru'?'it':'ru'); localStorage.setItem('pwgen_lang', current); applyLang(); generate(); }); }

  // init
  (function init(){ const saved=localStorage.getItem('pwgen_lang'); if(saved&&(saved==='ru'||saved==='it')) current=saved; applyLang(); generate(); })();
})();
