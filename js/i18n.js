// I18N: language state and texts
window.birthDateStr = window.birthDateStr || '1992-04-17';
window.currentLang = localStorage.getItem('lang') || 'ru';

const i18n = {
  ru: {
    hero_name: 'Руслан Мекеидзе',
    title_page: 'Портфолио — Руслан Мекеидзе',
    status_basic: 'Базовый',
    status_progress: 'В процессе',
    status_next: 'Следующий к изучению',
    status_soon: 'Скоро',
    email_subject: 'Запрос с сайта',
    email_body: 'Здравствуйте, Руслан! Хочу обсудить сотрудничество. ',
    hero_subtitle: 'Предприниматель • обучающийся веб‑разработчик • бизнес‑консультант',
    label_birth: 'День рождения:',
    label_age: 'Возраст:',
    label_location: 'Локация:',
    value_location: 'Италия',
    btn_cv: 'Скачать CV',
    btn_contacts: 'Контакты',
    skills_title: 'Навыки и планируемый опыт',
    skills_sub: 'Честно: без выдумки. Отмечено, что уже делаю, и что в процессе.',
    skill_html: 'HTML & CSS уровень: базовый → уверенный (в процессе). Семантика, адаптив, гриды, флексы.',
    skill_js: 'JavaScript основы: DOM, события, fetch. Дальше: модули, компоненты, карусели, модалки.',
    skill_ai: 'Искусственный интеллект (AI/ML): LLM (GPT), промпт‑инжиниринг, embeddings, RAG, LangChain, векторные БД (FAISS/Pinecone), OpenAI API, Hugging Face, Stable Diffusion.',
    skill_laravel: 'Laravel план: MVC, маршруты, Blade, Eloquent. Цель: MVP личного кабинета.',
    skill_git: 'Git & GitHub ветки, pull‑requests, issues. CI позже.',
    skill_cms: 'CMS: WordPress, Joomla, Drupal — установка, темы, плагины, безопасность. Цель: быстрый корпоративный сайт/блог.',
    skill_uiux: 'UI/UX + библиотеки: React, Vue, Tailwind, MUI; дизайн‑системы и паттерны интерфейсов.',
    level_advanced: 'Продвинутый',
    projects_title: 'Проекты',
    projects_sub: 'Горизонтальная карусель. Нажми «Подробнее» — откроется модалка с описанием.',
    badge_landing: 'Лендинг',
    badge_wp: 'WP плагин',
    badge_roadmap: 'Roadmap',
    tag_responsive: 'Адаптив',
    card3_title: 'Сметный калькулятор',
    card_details: 'Подробнее',
    contacts_title: 'Контакты',
    contacts_sub: 'Для проектов/сотрудничества.',
    modal_demo: 'Демо/GitHub',
    modal_close: 'Закрыть',
    aria_prev: 'Назад',
    aria_next: 'Вперёд',
    cv_alert: 'Подключи файл CV или ссылку на Google Drive'
    ,exp_title: 'Работа и опыт'
    ,exp_sub: 'Здесь позже добавлю форму для обновления места работы и описания опыта.'
    ,exp_body: 'Пока текст‑рыба: краткое описание текущих задач и интересов. В будущем этот блок можно расширить под историю работы, достижения и ссылки на проекты.'
    ,exp_current_title: 'Текущая работа'
    ,exp_status: 'Статус:'
    ,exp_status_value: 'Открыт к предложениям'
    ,exp_status_open: 'Открыт к предложениям'
    ,exp_status_label: 'Статус работы:'
    ,exp_status_busy: 'Участвую в проекте'
    ,exp_list_title: 'Опыт'
    ,exp_item1: 'Рыба текст: интерфейсы, адаптивная верстка, оптимизация загрузки.'
    ,exp_item2: 'Рыба текст: базовые плагины и темы WordPress.'
    ,exp_item3: 'Рыба текст: карусели, модальные окна, i18n.'
    ,exp_work_title: 'Опыт работы'
    ,edu_title: 'Образование'
    ,edu_study: 'В процессе обучения — SKILLBOX'
    ,edu_college: 'Колледж (2008–2012) — Бухгалтерия и учёт, оператор компьютерного набора'
    ,edu_courses: 'SKILLBOX — курсы'
    ,xp1_title: 'Продавец мобильных телефонов и компьютеров'
    ,xp1_place: 'Украина, Киев'
    ,xp1_time: '2013–2014'
    ,xp2_title: 'Проект‑менеджер в компании по ремонту электроники'
    ,xp2_place: 'Украина, Киев'
    ,xp2_time: '2014–2015'
    ,xp3_title: 'Предприниматель — магазины электроники и ремонта'
    ,xp3_place: 'Украина, Киев'
    ,xp3_time: '2016–2019'
    ,xp4_title: 'Директор Smile Mobile — продажа телефонов и аксессуаров'
    ,xp4_place: 'Украина, Киев'
    ,xp4_time: '2019–2020'
    ,xp5_title: 'Переезд в Италию — изучение итальянского языка'
    ,xp5_place: 'Украина → Италия'
    ,xp5_time: '2022–2023'
    ,xp6_title: 'R&D/Design — Monsummano Terme (advertising design)'
    ,xp6_place: 'Италия, Monsummano Terme'
    ,xp6_time: '2023–2024'
    ,xp7_title: 'Project Manager — Alia Edilizia SRL, Punto Infissi'
    ,xp7_place: 'Италия'
    ,xp7_time: '2024 — по наст. время'
  },
  it: {
    hero_name: 'Ruslan Mekeidze',
    title_page: 'Portfolio — Ruslan Mekeidze',
    status_basic: 'Basic',
    status_progress: 'In corso',
    status_next: 'Prossimo da studiare',
    status_soon: 'Presto',
    email_subject: 'Richiesta dal sito',
    email_body: 'Ciao, Ruslan! Vorrei discutere una collaborazione. ',
    hero_subtitle: 'Imprenditore • sviluppatore web in formazione • consulente aziendale',
    label_birth: 'Data di nascita:',
    label_age: 'Età:',
    label_location: 'Posizione:',
    value_location: 'Italia',
    btn_cv: 'Scarica CV',
    btn_contacts: 'Contatti',
    skills_title: 'Competenze ed esperienza pianificata',
    skills_sub: 'Onestamente, senza esagerazioni. Segnato ciò che sto già facendo e ciò che è in corso.',
    skill_html: 'HTML & CSS livello: base → sicuro (in corso). Semantica, responsive, grid, flex.',
    skill_js: 'JavaScript basi: DOM, eventi, fetch. Poi: moduli, componenti, carousel, modali.',
    skill_ai: 'Intelligenza artificiale (AI/ML): LLM (GPT), prompt engineering, embeddings, RAG, LangChain, database vettoriali (FAISS/Pinecone), OpenAI API, Hugging Face, Stable Diffusion.',
    skill_laravel: 'Laravel piano: MVC, rotte, Blade, Eloquent. Obiettivo: MVP area personale.',
    skill_git: 'Git & GitHub branch, pull request, issue. CI più tardi.',
    skill_cms: 'CMS: WordPress, Joomla, Drupal — installazione, temi, plugin, sicurezza. Obiettivo: sito aziendale/blog veloce.',
    skill_uiux: 'UI/UX + librerie: React, Vue, Tailwind, MUI; design system e pattern di interfaccia.',
    level_advanced: 'Avanzato',
    projects_title: 'Progetti',
    projects_sub: 'Carosello orizzontale. Clicca «Dettagli» — si aprirà una modale con la descrizione.',
    badge_landing: 'Landing',
    badge_wp: 'Plugin WP',
    badge_roadmap: 'Roadmap',
    tag_responsive: 'Responsive',
    card3_title: 'Calcolatore preventivi',
    card_details: 'Dettagli',
    contacts_title: 'Contatti',
    contacts_sub: 'Per progetti/collaborazioni.',
    modal_demo: 'Demo/GitHub',
    modal_close: 'Chiudi',
    aria_prev: 'Indietro',
    aria_next: 'Avanti',
    cv_alert: 'Collega il file del CV o un link a Google Drive'
    ,exp_title: 'Lavoro ed esperienza'
    ,exp_sub: 'Qui aggiungerò più tardi un modulo per aggiornare il luogo di lavoro e la descrizione dell\'esperienza.'
    ,exp_body: 'Testo segnaposto: breve descrizione delle attività e degli interessi attuali. In futuro questo blocco potrà essere ampliato con la storia lavorativa, risultati e link ai progetti.'
    ,exp_current_title: 'Lavoro attuale'
    ,exp_status: 'Stato:'
    ,exp_status_value: 'Aperto a proposte'
    ,exp_status_open: 'Aperto a proposte'
    ,exp_status_label: 'Stato lavorativo:'
    ,exp_status_busy: 'Partecipo a un progetto'
    ,exp_list_title: 'Esperienza'
    ,exp_item1: 'Segnaposto: interfacce, responsive design, ottimizzazione del caricamento.'
    ,exp_item2: 'Segnaposto: plugin e temi WordPress di base.'
    ,exp_item3: 'Segnaposto: caroselli, modali, i18n.'
    ,exp_work_title: 'Esperienza lavorativa'
    ,edu_title: 'Istruzione'
    ,edu_study: 'In corso — SKILLBOX'
    ,edu_college: 'Istituto (2008–2012) — Contabilità e bilancio, operatore di videoscrittura'
    ,edu_courses: 'SKILLBOX — corsi'
    ,xp1_title: 'Venditore di telefoni cellulari e computer'
    ,xp1_place: 'Ucraina, Kiev'
    ,xp1_time: '2013–2014'
    ,xp2_title: 'Project manager in azienda di riparazione elettronica'
    ,xp2_place: 'Ucraina, Kiev'
    ,xp2_time: '2014–2015'
    ,xp3_title: 'Imprenditore — negozi di elettronica e riparazione'
    ,xp3_place: 'Ucraina, Kiev'
    ,xp3_time: '2016–2019'
    ,xp4_title: 'Direttore Smile Mobile — vendita di telefoni e accessori'
    ,xp4_place: 'Ucraina, Kiev'
    ,xp4_time: '2019–2020'
    ,xp5_title: 'Trasferimento in Italia — studio della lingua italiana'
    ,xp5_place: 'Ucraina → Italia'
    ,xp5_time: '2022–2023'
    ,xp6_title: 'R&D/Design — Monsummano Terme (advertising design)'
    ,xp6_place: 'Italia, Monsummano Terme'
    ,xp6_time: '2023–2024'
    ,xp7_title: 'Project Manager — Alia Edilizia SRL, Punto Infissi'
    ,xp7_place: 'Italia'
    ,xp7_time: '2024 — presente'
  }
};

function applyI18n(lang){
  window.currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  // Title
  document.title = i18n[lang].title_page;
  // Simple text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(i18n[lang][key] !== undefined){ el.textContent = i18n[lang][key]; }
  });
  // Aria labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if(i18n[lang][key] !== undefined){ el.setAttribute('aria-label', i18n[lang][key]); }
  });
  // Date format update
  const b = new Date(window.birthDateStr);
  const birthEl = document.querySelector('[data-birth]');
  if(!isNaN(b) && birthEl){ birthEl.textContent = b.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'it-IT'); }
  // Update project card datasets for modal
  document.querySelectorAll('.card').forEach(card => {
    const t = card.getAttribute(`data-title-${lang}`);
    if(t) card.setAttribute('data-title', t);
    const tech = card.getAttribute(`data-tech-${lang}`);
    if(tech) card.setAttribute('data-tech', tech);
    const desc = card.getAttribute(`data-desc-${lang}`);
    if(desc) card.setAttribute('data-desc', desc);
  });
  // Toggle button label (shows target language)
  const toggle = document.getElementById('langToggle');
  if(toggle) toggle.textContent = lang === 'ru' ? 'IT' : 'RU';
}

// Wire UI events
window.addEventListener('DOMContentLoaded', () => {
  const cvBtn = document.getElementById('cvBtn');
  if(cvBtn){
    cvBtn.addEventListener('click', async () => {
      const map = { ru: 'cv/Ruslan_Mekeidze_CV_ru.pdf', it: 'cv/Ruslan_Mekeidze_CV_it.pdf' };
      const path = map[window.currentLang] || map.ru;
      try{
        const res = await fetch(path, { method:'HEAD' });
        if(!res.ok) throw new Error('not found');
        const a = document.createElement('a');
        a.href = path; a.download = path.split('/').pop(); a.target = '_blank';
        document.body.appendChild(a); a.click(); a.remove();
      }catch(err){
        // Fallback: quietly open print dialog for Save as PDF
        const cleanup = () => document.body.classList.remove('cv-printing');
        try{
          document.body.classList.add('cv-printing');
          window.addEventListener('afterprint', cleanup, { once:true });
          // small delay to ensure styles applied
          setTimeout(() => { window.print(); setTimeout(cleanup, 1000); }, 50);
        }catch(e){ cleanup(); }
      }
    });
  }
  const langToggle = document.getElementById('langToggle');
  if(langToggle){ langToggle.addEventListener('click', () => applyI18n(window.currentLang === 'ru' ? 'it' : 'ru')); }
  const emailLink = document.getElementById('emailLink');
  if(emailLink){
    emailLink.addEventListener('click', (e) => {
      e.preventDefault();
      const to = 'mekeidzerus@gmail.com';
      const subj = i18n[window.currentLang].email_subject || '';
      const body = i18n[window.currentLang].email_body || '';
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
      const win = window.open(gmailUrl, 'composeWindow', 'width=860,height=720,menubar=0,toolbar=0,location=1,status=0,scrollbars=1,resizable=1');
      if (win) { try { win.opener = null; win.focus(); } catch(_){} return; }
      // Попап заблокирован — безопасный редирект в этой вкладке
      window.location.assign(gmailUrl);
    });
  }
  // Initial apply
  applyI18n(window.currentLang);
});

// Expose for other scripts if needed
window.applyI18n = applyI18n;
