// I18N: language state and texts
window.birthDateStr = window.birthDateStr || '1992-04-17'
window.currentLang = localStorage.getItem('lang') || 'ru'

const i18n = {
	ru: {
		hero_name: 'Руслан Мекеидзе',
		title_page: 'Портфолио — Руслан Мекеидзе',
		nav_services: 'Услуги',
		nav_projects: 'Проекты',
		nav_skills: 'Опыт',
		nav_contacts: 'Контакты',
		nav_cta: 'Обсудить сайт',
		status_basic: 'Базовый',
		status_progress: 'В процессе',
		status_next: 'Следующий к изучению',
		status_soon: 'Скоро',
		email_subject: 'Запрос с сайта',
		email_body: 'Здравствуйте, Руслан! Хочу обсудить сотрудничество. ',
		hero_subtitle:
			'Сайты и веб‑приложения для бизнеса в Италии: аккуратная подача, быстрый запуск, заявки из Google, Instagram и WhatsApp.',
		label_birth: 'День рождения:',
		label_age: 'Возраст:',
		label_location: 'Локация:',
		value_location: 'Италия',
		btn_discuss: 'Обсудить проект',
		btn_projects: 'Смотреть проекты',
		btn_contacts: 'Контакты',
		services_title: 'Сайты и приложения для малого бизнеса в Италии',
		services_sub:
			'Фокус на понятном оффере, локальном доверии, заявках и дальнейшем развитии проекта без лишней сложности.',
		services_cta: 'Получить консультацию',
		service_site_title: 'Корпоративные сайты',
		service_site_text:
			'Структура, тексты, адаптивная верстка, контакты, карта, WhatsApp и базовая SEO‑подготовка.',
		service_app_title: 'Веб‑приложения',
		service_app_text:
			'Личные кабинеты, формы заявок, калькуляторы, мини‑CRM и внутренние инструменты.',
		service_shop_title: 'Каталоги и e‑commerce',
		service_shop_text:
			'Витрины товаров, карточки, заявки, интеграция с соцсетями и подготовка к продажам.',
		service_growth_title: 'Поддержка и рост',
		service_growth_text:
			'Доработки, аналитика, улучшение скорости, новые страницы и автоматизация рутинных процессов.',
		skills_title: 'Навыки и рабочий уровень',
		skills_sub:
			'Практический уровень по ключевым направлениям сейчас держится в диапазоне 60–80%.',
		about_title: 'Обо мне',
		about_sub:
			'Веб-разработчик и бизнес-консультант, советник международных компаний, увлечён будущим ИИ и цифровых технологий.',
		about_body:
			'Предпринимательский бэкграунд, системное мышление и фокус на практических результатах. Люблю аккуратные интерфейсы, понятную структуру данных и продуманный пользовательский сценарий. Ценыю прозрачность, предсказуемые сроки и уважение к деталям.',
		skill_html:
			'HTML & CSS: семантика, адаптивная сетка, flex/grid, карточки, модальные окна, responsive‑проверка и аккуратная верстка под реальные бизнес‑страницы.',
		skill_js:
			'JavaScript: DOM, события, карусели, модалки, i18n, плавные действия интерфейса и небольшие инструменты для пользователей.',
		skill_ai:
			'Искусственный интеллект: GPT, промпт‑инжиниринг, структура контента, анализ, автоматизация рутины, подготовка SEO‑текстов и сценариев для сайтов.',
		skill_laravel:
			'Laravel: MVC‑логика, маршруты, Blade, базовая работа с данными и подготовка фундамента для личных кабинетов, форм и внутренних web‑приложений.',
		skill_git:
			'Git & GitHub: ветки, коммиты, публикация изменений, GitHub Actions для деплоя и контроль версий проекта.',
		skill_cms:
			'CMS: WordPress, структура страниц, темы, базовые интеграции, безопасность, быстрый запуск корпоративных сайтов, каталогов и блогов.',
		skill_uiux:
			'UI/UX: логика первого экрана, CTA, сетка, отступы, карточки, мобильная версия, визуальный маршрут клиента и понятная структура страницы.',
		level_advanced: 'Продвинутый',
		projects_title: 'Проекты',
		projects_sub:
			'Реальные опубликованные работы и собственные инструменты. Превью собраны в интерфейсе сайта без отдельных изображений.',
		badge_tool: 'Инструмент',
		badge_live: 'Реальный сайт',
		pw_title: 'Генератор паролей',
		pw_short: 'Создаёт надёжные пароли по заданным параметрам.',
		tag_production: 'Опубликован',
		tag_multilang: 'Мультиязычный',
		card_details: 'Подробнее',
		note_text: 'Сайт разработан для бесплатного использования — буду благодарен за подписку:',
		note_tg: 'Telegram',
		note_ig: 'Instagram',
		contacts_title: 'Контакты',
		contacts_sub: 'Для проектов/сотрудничества.',
		footer_text:
			'Персональное портфолио и точка входа для сайтов, приложений и цифровых проектов в Италии.',
		footer_group_site: 'Сайт',
		footer_group_future: 'Будущие страницы',
		footer_group_social: 'Соцсети',
		footer_future_blog: 'Блог',
		footer_future_cases: 'Кейсы',
		footer_future_services: 'Услуги',
		footer_future_tools: 'Инструменты',
		modal_open_app: 'Открыть проект',
		modal_close: 'Закрыть',
		aria_prev: 'Назад',
		aria_next: 'Вперёд',
		cv_alert: 'Подключи файл CV или ссылку на Google Drive',
		exp_title: 'Работа и опыт',
		exp_sub:
			'Здесь позже добавлю форму для обновления места работы и описания опыта.',
		exp_body:
			'Пока текст‑рыба: краткое описание текущих задач и интересов. В будущем этот блок можно расширить под историю работы, достижения и ссылки на проекты.',
		exp_current_title: 'Текущая работа',
		exp_status: 'Статус:',
		exp_status_value: 'Работаю как Ditta Individuale',
		exp_status_open: 'Работаю как Ditta Individuale',
		exp_status_label: 'Статус:',
		exp_status_busy: 'Участвую в проекте',
		exp_list_title: 'Опыт',
		exp_item1:
			'Рыба текст: интерфейсы, адаптивная верстка, оптимизация загрузки.',
		exp_item2: 'Рыба текст: базовые плагины и темы WordPress.',
		exp_item3: 'Рыба текст: карусели, модальные окна, i18n.',
		exp_work_title: 'Текущая работа — Ditta Individuale',
		edu_title: 'Образование',
		edu_study: 'В процессе обучения — SKILLBOX',
		edu_college:
			'Колледж (2008–2012) — Бухгалтерия и учёт, оператор компьютерного набора',
		edu_courses: 'SKILLBOX — курсы',
		xp1_title: 'Продавец мобильных телефонов и компьютеров',
		xp1_place: 'Украина, Киев',
		xp1_time: '2013–2014',
		xp2_title: 'Проект‑менеджер в компании по ремонту электроники',
		xp2_place: 'Украина, Киев',
		xp2_time: '2014–2015',
		xp3_title: 'Предприниматель — магазины электроники и ремонта',
		xp3_place: 'Украина, Киев',
		xp3_time: '2016–2019',
		xp4_title: 'Директор Smile Mobile — продажа телефонов и аксессуаров',
		xp4_place: 'Украина, Киев',
		xp4_time: '2019–2020',
		xp5_title: 'Переезд в Италию — изучение итальянского языка',
		xp5_place: 'Украина → Италия',
		xp5_time: '2022–2023',
		xp6_title: 'R&D/Design — Monsummano Terme (advertising design)',
		xp6_place: 'Италия, Monsummano Terme',
		xp6_time: '2023–2024',
		xp7_title:
			'Ditta Individuale — сайты, web‑проекты и бизнес‑консультации',
		xp7_place: 'Италия',
		xp7_time: '2024 — по наст. время',
	},
	it: {
		hero_name: 'Ruslan Mekeidze',
		title_page: 'Portfolio — Ruslan Mekeidze',
		nav_services: 'Servizi',
		nav_projects: 'Progetti',
		nav_skills: 'Esperienza',
		nav_contacts: 'Contatti',
		nav_cta: 'Parliamo del sito',
		status_basic: 'Basic',
		status_progress: 'In corso',
		status_next: 'Prossimo da studiare',
		status_soon: 'Presto',
		email_subject: 'Richiesta dal sito',
		email_body: 'Ciao, Ruslan! Vorrei discutere una collaborazione. ',
		hero_subtitle:
			'Siti web e web app per aziende in Italia: presentazione curata, lancio rapido, richieste da Google, Instagram e WhatsApp.',
		label_birth: 'Data di nascita:',
		label_age: 'Età:',
		label_location: 'Posizione:',
		value_location: 'Italia',
		btn_discuss: 'Parliamo del progetto',
		btn_projects: 'Vedi progetti',
		btn_contacts: 'Contatti',
		services_title: 'Siti e applicazioni per piccole imprese in Italia',
		services_sub:
			'Focus su offerta chiara, fiducia locale, richieste di contatto e crescita del progetto senza complessità inutile.',
		services_cta: 'Richiedi consulenza',
		service_site_title: 'Siti aziendali',
		service_site_text:
			'Struttura, testi, layout responsive, contatti, mappa, WhatsApp e preparazione SEO di base.',
		service_app_title: 'Web app',
		service_app_text:
			'Aree riservate, moduli richiesta, calcolatori, mini‑CRM e strumenti interni.',
		service_shop_title: 'Cataloghi ed e‑commerce',
		service_shop_text:
			'Vetrine prodotto, schede, richieste, integrazione social e preparazione alla vendita.',
		service_growth_title: 'Supporto e crescita',
		service_growth_text:
			'Migliorie, analytics, velocità, nuove pagine e automazione dei processi ripetitivi.',
		skills_title: 'Competenze e livello operativo',
		skills_sub:
			'Il livello pratico nelle aree principali è oggi tra il 60% e l’80%.',
		about_title: 'Su di me',
		about_sub:
			'Sviluppatore web e consulente aziendale, advisor per imprese internazionali, appassionato del futuro dell’IA e delle tecnologie digitali.',
		about_body:
			'Background imprenditoriale, pensiero sistemico e orientamento ai risultati pratici. Amo le interfacce pulite, strutture dati chiare e percorsi utente ben progettati. Valuto trasparenza, scadenze prevedibili e cura dei dettagli.',
		skill_html:
			'HTML & CSS: semantica, griglie responsive, flex/grid, card, modali, verifica mobile e layout puliti per pagine business reali.',
		skill_js:
			'JavaScript: DOM, eventi, carousel, modali, i18n, micro‑interazioni e piccoli strumenti utili per gli utenti.',
		skill_ai:
			'Intelligenza artificiale: GPT, prompt engineering, struttura dei contenuti, analisi, automazione, testi SEO e scenari per siti web.',
		skill_laravel:
			'Laravel: logica MVC, rotte, Blade, basi dati e fondazioni per aree riservate, form e web app interne.',
		skill_git:
			'Git & GitHub: branch, commit, pubblicazione delle modifiche, GitHub Actions per il deploy e controllo versione.',
		skill_cms:
			'CMS: WordPress, struttura pagine, temi, integrazioni di base, sicurezza e lancio rapido di siti aziendali, cataloghi e blog.',
		skill_uiux:
			'UI/UX: logica del primo schermo, CTA, griglia, spaziature, card, versione mobile, percorso visivo del cliente e struttura chiara della pagina.',
		level_advanced: 'Avanzato',
		projects_title: 'Progetti',
		projects_sub:
			'Lavori reali pubblicati e strumenti propri. Le anteprime sono create nell’interfaccia, senza immagini separate.',
		badge_tool: 'Strumento',
		badge_live: 'Sito reale',
		pw_title: 'Generatore di password',
		pw_short: 'Crea password sicure in base ai parametri scelti.',
		tag_production: 'Production',
		tag_multilang: 'Multilingua',
		card_details: 'Dettagli',
		note_text: 'Sito creato per uso gratuito — sarò grato per l’adesione:',
		note_tg: 'Telegram',
		note_ig: 'Instagram',
		contacts_title: 'Contatti',
		contacts_sub: 'Per progetti/collaborazioni.',
		footer_text:
			'Portfolio personale e punto di ingresso per siti, applicazioni e progetti digitali in Italia.',
		footer_group_site: 'Sito',
		footer_group_future: 'Pagine future',
		footer_group_social: 'Social',
		footer_future_blog: 'Blog',
		footer_future_cases: 'Casi studio',
		footer_future_services: 'Servizi',
		footer_future_tools: 'Strumenti',
		modal_open_app: 'Apri progetto',
		modal_close: 'Chiudi',
		aria_prev: 'Indietro',
		aria_next: 'Avanti',
		cv_alert: 'Collega il file del CV o un link a Google Drive',
		exp_title: 'Lavoro ed esperienza',
		exp_sub:
			"Qui aggiungerò più tardi un modulo per aggiornare il luogo di lavoro e la descrizione dell'esperienza.",
		exp_body:
			'Testo segnaposto: breve descrizione delle attività e degli interessi attuali. In futuro questo blocco potrà essere ampliato con la storia lavorativa, risultati e link ai progetti.',
		exp_current_title: 'Lavoro attuale',
		exp_status: 'Stato:',
		exp_status_value: 'Lavoro come Ditta Individuale',
		exp_status_open: 'Lavoro come Ditta Individuale',
		exp_status_label: 'Stato:',
		exp_status_busy: 'Partecipo a un progetto',
		exp_list_title: 'Esperienza',
		exp_item1:
			'Segnaposto: interfacce, responsive design, ottimizzazione del caricamento.',
		exp_item2: 'Segnaposto: plugin e temi WordPress di base.',
		exp_item3: 'Segnaposto: caroselli, modali, i18n.',
		exp_work_title: 'Lavoro attuale — Ditta Individuale',
		edu_title: 'Istruzione',
		edu_study: 'In corso — SKILLBOX',
		edu_college:
			'Istituto (2008–2012) — Contabilità e bilancio, operatore di videoscrittura',
		edu_courses: 'SKILLBOX — corsi',
		xp1_title: 'Venditore di telefoni cellulari e computer',
		xp1_place: 'Ucraina, Kiev',
		xp1_time: '2013–2014',
		xp2_title: 'Project manager in azienda di riparazione elettronica',
		xp2_place: 'Ucraina, Kiev',
		xp2_time: '2014–2015',
		xp3_title: 'Imprenditore — negozi di elettronica e riparazione',
		xp3_place: 'Ucraina, Kiev',
		xp3_time: '2016–2019',
		xp4_title: 'Direttore Smile Mobile — vendita di telefoni e accessori',
		xp4_place: 'Ucraina, Kiev',
		xp4_time: '2019–2020',
		xp5_title: 'Trasferimento in Italia — studio della lingua italiana',
		xp5_place: 'Ucraina → Italia',
		xp5_time: '2022–2023',
		xp6_title: 'R&D/Design — Monsummano Terme (advertising design)',
		xp6_place: 'Italia, Monsummano Terme',
		xp6_time: '2023–2024',
		xp7_title:
			'Ditta Individuale — siti web, progetti web e consulenza business',
		xp7_place: 'Italia',
		xp7_time: '2024 — presente',
	},
}

function applyI18n(lang) {
	window.currentLang = lang
	localStorage.setItem('lang', lang)
	document.documentElement.lang = lang
	// Title
	document.title = i18n[lang].title_page
	// Simple text nodes
	document.querySelectorAll('[data-i18n]').forEach(el => {
		const key = el.getAttribute('data-i18n')
		if (i18n[lang][key] !== undefined) {
			el.textContent = i18n[lang][key]
		}
	})
	// Aria labels
	document.querySelectorAll('[data-i18n-aria]').forEach(el => {
		const key = el.getAttribute('data-i18n-aria')
		if (i18n[lang][key] !== undefined) {
			el.setAttribute('aria-label', i18n[lang][key])
		}
	})
	// Date format update
	const b = new Date(window.birthDateStr)
	const birthEl = document.querySelector('[data-birth]')
	if (!isNaN(b) && birthEl) {
		birthEl.textContent = b.toLocaleDateString(
			lang === 'ru' ? 'ru-RU' : 'it-IT'
		)
	}
	// Update project card datasets for modal
	document.querySelectorAll('.card').forEach(card => {
		const t = card.getAttribute(`data-title-${lang}`)
		if (t) card.setAttribute('data-title', t)
		const tech = card.getAttribute(`data-tech-${lang}`)
		if (tech) card.setAttribute('data-tech', tech)
		const desc = card.getAttribute(`data-desc-${lang}`)
		if (desc) card.setAttribute('data-desc', desc)
		const statusLabel = card.getAttribute(`data-status-${lang}`)
		if (statusLabel) card.setAttribute('data-status-label', statusLabel)
	})
	// Toggle button label (shows target language)
	const toggle = document.getElementById('langToggle')
	if (toggle) toggle.textContent = lang === 'ru' ? 'IT' : 'RU'
}

// Wire UI events
window.addEventListener('DOMContentLoaded', () => {
	const langToggle = document.getElementById('langToggle')
	if (langToggle) {
		langToggle.addEventListener('click', () =>
			applyI18n(window.currentLang === 'ru' ? 'it' : 'ru')
		)
	}
	// Initial apply
	applyI18n(window.currentLang)
})

// Expose for other scripts if needed
window.applyI18n = applyI18n
