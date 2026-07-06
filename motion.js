(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  const heroMedia = document.querySelector('.hero-media');
  const heroMark = document.querySelector('.hero-logo');
  const languageButtons = document.querySelectorAll('[data-set-lang]');

  let languageTimer;
  let languageEndTimer;

  const applyLanguage = (language) => {
    const nextLanguage = language === 'en' ? 'en' : 'he';
    root.dataset.lang = nextLanguage;
    root.lang = nextLanguage === 'en' ? 'en' : 'he';
    root.dir = nextLanguage === 'en' ? 'ltr' : 'rtl';
    languageButtons.forEach((button) => {
      const active = button.dataset.setLang === nextLanguage;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  const setLanguage = (language, animate = false) => {
    const nextLanguage = language === 'en' ? 'en' : 'he';
    if (root.dataset.lang === nextLanguage) return;

    window.clearTimeout(languageTimer);
    window.clearTimeout(languageEndTimer);

    if (!animate || reducedMotion.matches) {
      root.classList.remove('is-language-changing');
      applyLanguage(nextLanguage);
      return;
    }

    root.classList.add('is-language-changing');
    languageTimer = window.setTimeout(() => applyLanguage(nextLanguage), 120);
    languageEndTimer = window.setTimeout(() => root.classList.remove('is-language-changing'), 320);
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.setLang, true));
  });

  applyLanguage(root.dataset.lang || 'he');

  const revealSelectors = [
    '.intro-grid > *',
    '.section-heading',
    '.project-art',
    '.service-grid article',
    '.project-feature',
    '.project-list article',
    '.sources-grid > *',
    '.about-card',
    '.contact-grid > *'
  ];

  const revealTargets = [...document.querySelectorAll(revealSelectors.join(','))];
  const revealGroups = document.querySelectorAll('.service-grid, .project-list, .hero-facts, .sources-grid ul, .contact-actions, .process-list');

  revealGroups.forEach((group) => {
    [...group.children].forEach((item, index) => item.style.setProperty('--reveal-index', index));
  });

  revealTargets.forEach((target) => target.setAttribute('data-reveal', ''));

  if (reducedMotion.matches) {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  root.classList.add('motion-ready');

  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });

  revealTargets.forEach((target) => observer.observe(target));

  let framePending = false;
  const updateScrollState = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 24);

    if (heroMedia && y < window.innerHeight * 1.25) {
      heroMedia.style.setProperty('--hero-shift', `${Math.min(y * .045, 34)}px`);
    }

    framePending = false;
  };

  window.addEventListener('scroll', () => {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateScrollState);
  }, { passive: true });

  if (hero && heroMark && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('pointermove', (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 8;
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 6;
      heroMark.style.setProperty('--mark-x', `${x}px`);
      heroMark.style.setProperty('--mark-y', `${y}px`);
      heroMark.style.setProperty('--mark-r', `${x * .12}deg`);
    }, { passive: true });

    hero.addEventListener('pointerleave', () => {
      heroMark.style.setProperty('--mark-x', '0px');
      heroMark.style.setProperty('--mark-y', '0px');
      heroMark.style.setProperty('--mark-r', '0deg');
    });
  }

  updateScrollState();
})();
