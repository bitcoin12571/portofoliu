const translations = {
  ro: {
    'nav-about': 'Despre',
    'nav-services': 'Ce fac',
    'nav-projects': 'Proiecte',
    'nav-skills': 'Skills',
    'nav-sport': 'Sport',
    'nav-contact': 'Contact',
    'eyebrow': 'Salut 👋 Eu sunt',
    'hero-main': 'Maxim',
    'hero-subtitle': 'Developer',
    'hero-text': 'Transformez ideile în site-uri frumoase, rapide și funcționale. Design modern + cod curat + pasiune pentru performanță.',
    'hero-subtext': 'De la concept la lansare, lucrez cu atenție la detaliu și dedicație pentru rezultatele tale.',
    'hero-cta': 'Haide, discutăm!',
    'about-title': 'Despre mine',
    'about-p1': 'Sunt Maxim, am 17 ani și studiez în anul 2 la colegiu pe profil programare. Am absolvit cursuri Certiport și am experiență în design web modern. Îmi place să îmbin creativitatea cu disciplina, astfel încât fiecare site să arate bine, să funcționeze bine și să fie ușor de folosit.',
    'about-p2': 'Lucrez rapid, respect termenele și comunic clar cu clienții. Proiectele mele sunt gândite pentru mobil, desktop și pentru oameni care vor să transmită profesionalism și energie.',
    'best-title': 'Ce fac cel mai bine',
    'personal-title': 'Valori personale',
  },
  en: {
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-sport': 'Sport',
    'nav-contact': 'Contact',
    'eyebrow': 'Hi 👋 I am',
    'hero-main': 'Maxim',
    'hero-subtitle': 'Developer',
    'hero-text': 'I transform ideas into beautiful, fast and functional websites. Modern design + clean code + passion for performance.',
    'hero-subtext': 'From concept to launch, I work with attention to detail and dedication to your results.',
    'hero-cta': 'Let\'s talk!',
    'about-title': 'About me',
    'about-p1': 'I am Maxim, 17 years old and studying year 2 of programming college. I completed Certiport courses and have experience in modern web design. I like to combine creativity with discipline, so every site looks good, works well and is easy to use.',
    'about-p2': 'I work fast, meet deadlines and communicate clearly with clients. My projects are designed for mobile, desktop and for people who want to convey professionalism and energy.',
    'best-title': 'What I do best',
    'personal-title': 'Personal values',
  },
  ru: {
    'nav-about': 'Обо мне',
    'nav-services': 'Услуги',
    'nav-projects': 'Проекты',
    'nav-skills': 'Навыки',
    'nav-sport': 'Спорт',
    'nav-contact': 'Контакт',
    'eyebrow': 'Привет 👋 Я',
    'hero-main': 'Максим',
    'hero-subtitle': 'Разработчик',
    'hero-text': 'Я превращаю идеи в красивые, быстрые и функциональные веб-сайты. Современный дизайн + чистый код + страсть к производительности.',
    'hero-subtext': 'От концепции к запуску, я работаю с вниманием к деталям и преданностью вашим результатам.',
    'hero-cta': 'Давайте поговорим!',
    'about-title': 'Обо мне',
    'about-p1': 'Я Максим, 17 лет, учусь на 2 курсе колледжа по специальности программирование. Завершил курсы Certiport и имею опыт в современном веб-дизайне. Мне нравится сочетать творчество с дисциплиной, чтобы каждый сайт выглядел хорошо, работал хорошо и был легко использоваться.',
    'about-p2': 'Я работаю быстро, соблюдаю сроки и ясно общаюсь с клиентами. Мои проекты разработаны для мобильных устройств, рабочих столов и для людей, которые хотят выразить профессионализм и энергию.',
    'best-title': 'Мои сильные стороны',
    'personal-title': 'Личные ценности',
  }
};

let currentLanguage = localStorage.getItem('language') || 'ro';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updatePageText();
  updateActiveButton();
}

function updateActiveButton() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === currentLanguage) {
      btn.classList.add('active');
    }
  });
}

function updatePageText() {
  const langData = translations[currentLanguage];
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (langData[key]) {
      element.textContent = langData[key];
    }
  });
  
  // Update hero section
  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = langData['eyebrow'];
  
  const h1 = document.querySelector('h1');
  if (h1) {
    h1.innerHTML = langData['hero-main'] + '<br><span class="creative-text">' + langData['hero-subtitle'] + '</span>';
  }
  
  const heroText = document.querySelector('.hero-text');
  if (heroText) heroText.textContent = langData['hero-text'];
  
  const heroSubtext = document.querySelector('.hero-subtext');
  if (heroSubtext) heroSubtext.textContent = langData['hero-subtext'];
  
  const heroCta = document.querySelector('.btn-primary');
  if (heroCta) heroCta.textContent = langData['hero-cta'];
  
  // Update about section
  const aboutTitle = document.querySelector('.about-section h2');
  if (aboutTitle) aboutTitle.textContent = langData['about-title'];
  
  const aboutPs = document.querySelectorAll('.about-section > .section-content > p');
  if (aboutPs[0]) aboutPs[0].textContent = langData['about-p1'];
  if (aboutPs[1]) aboutPs[1].textContent = langData['about-p2'];
  
  const bestTitle = document.querySelectorAll('.highlight-box h3')[0];
  if (bestTitle) bestTitle.textContent = langData['best-title'];
  
  const personalTitle = document.querySelectorAll('.highlight-box h3')[1];
  if (personalTitle) personalTitle.textContent = langData['personal-title'];
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updatePageText();
  updateActiveButton();
  
  // Add event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
