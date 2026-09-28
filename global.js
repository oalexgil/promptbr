document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  /* Reading progress */
  const bar = document.getElementById('reading-bar');
  if (bar) {
    const updateBar = () => {
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = max > 0 ? (document.documentElement.scrollTop / max * 100) + '%' : '0%';
    };
    window.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  /* Normalize the navigation across legacy and redesigned pages */
  document.querySelectorAll('.nav-links').forEach((links) => {
    links.innerHTML = [
      ['index.html','Início'],
      ['prompts.html','Prompts'],
      ['ferramentas.html','Ferramentas'],
      ['blog.html','Guias'],
      ['sobre.html','Sobre'],
      ['newsletter.html','Newsletter →','nav-cta']
    ].map(([href,label,klass]) => `<li><a href="${href}" class="${klass || ''}">${label}</a></li>`).join('');

    links.querySelectorAll('a').forEach((a) => {
      if ((a.getAttribute('href') || '') === page) a.classList.add('active');
    });
  });

  const ham = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (ham && links) {
    ham.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
  }

  /* Normalize old footer copy without touching legal text */
  document.querySelectorAll('.footer-about p').forEach((p) => {
    p.textContent = 'IA útil, em português, aplicada ao trabalho real. Prompts, ferramentas, guias e experimentos documentados.';
  });

  /* Reveal */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  /* Prompt copy */
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      navigator.clipboard.writeText(target.textContent.trim()).then(() => {
        const original = btn.innerHTML;
        btn.innerHTML = '✓ Copiado';
        setTimeout(() => { btn.innerHTML = original; }, 1600);
      });
    });
  });

  /* Prompt library filtering */
  const cards = document.querySelectorAll('[data-category]');
  const filterBtns = document.querySelectorAll('[data-filter]');
  const dividers = document.querySelectorAll('.cat-div');
  const norm = (str) => (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

  const syncDividers = () => {
    dividers.forEach((divider) => {
      const label = divider.querySelector('.cat-div-label');
      if (!label) return;
      const hasVisible = Array.from(cards).some((card) =>
        norm(card.dataset.category) === norm(label.textContent) && card.style.display !== 'none'
      );
      divider.style.display = hasVisible ? '' : 'none';
    });
  };

  filterBtns.forEach((button) => {
    button.addEventListener('click', () => {
      filterBtns.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const category = button.dataset.filter;
      let count = 0;
      cards.forEach((card) => {
        const show = category === 'todos' || card.dataset.category === category;
        card.style.display = show ? '' : 'none';
        if (show) count++;
      });
      syncDividers();
      const counter = document.getElementById('prompt-count');
      if (counter) counter.textContent = count;
    });
  });

  const search = document.getElementById('prompt-search');
  if (search) {
    search.addEventListener('input', () => {
      const query = norm(search.value);
      let count = 0;
      cards.forEach((card) => {
        const show = norm(card.textContent).includes(query);
        card.style.display = show ? '' : 'none';
        if (show) count++;
      });
      syncDividers();
      const counter = document.getElementById('prompt-count');
      if (counter) counter.textContent = count;
    });
  }

  /* Never fake a newsletter signup. Forms without a real endpoint go to the newsletter page. */
  document.querySelectorAll('.nl-form').forEach((form) => {
    if (form.getAttribute('action')) return;
    const button = form.querySelector('button');
    if (button) button.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'newsletter.html';
    });
  });
});
