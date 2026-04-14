/* ══════════════════════════════════════════════
   PROMPTBR — Global JS
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Reading bar ── */
  const bar = document.getElementById('reading-bar');
  if (bar) {
    window.addEventListener('scroll', () => {
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = h > 0 ? (s / h * 100) + '%' : '0%';
    }, { passive: true });
  }

  /* ── Mobile hamburger ── */
  const ham = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (ham && links) ham.addEventListener('click', () => links.classList.toggle('open'));

  /* ── Active nav ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if ((a.getAttribute('href') || '').endsWith(page)) a.classList.add('active');
  });

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => io.observe(el));
  } else { reveals.forEach(el => el.classList.add('visible')); }

  /* ── Newsletter forms ── */
  document.querySelectorAll('.nl-form').forEach(form => {
    const btn = form.querySelector('button');
    const inp = form.querySelector('input[type="email"]');
    if (!btn || !inp) return;
    const submit = () => {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value.trim())) {
        btn.textContent = '✓ Inscrito!';
        btn.style.background = '#00c060';
        inp.value = ''; inp.placeholder = 'Obrigado! Confira seu email.';
        inp.disabled = btn.disabled = true;
      } else {
        inp.style.borderColor = '#ff4444'; inp.focus();
        setTimeout(() => inp.style.borderColor = '', 1200);
      }
    };
    btn.addEventListener('click', submit);
    inp.addEventListener('keydown', e => e.key === 'Enter' && submit());
  });

  /* ── Copy prompt buttons ── */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = document.getElementById(btn.dataset.target);
      if (!el) return;
      navigator.clipboard.writeText(el.textContent.trim()).then(() => {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ Copiado!';
        btn.style.background = 'var(--green)';
        btn.style.color = '#000';
        setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.style.color = ''; }, 2000);
      });
    });
  });

  /* ── Prompt filter ── */
  const filterBtns = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      let count = 0;
      cards.forEach(c => {
        const show = cat === 'todos' || c.dataset.category === cat;
        c.style.display = show ? '' : 'none';
        if (show) count++;
      });
      const counter = document.getElementById('prompt-count');
      if (counter) counter.textContent = count;
    });
  });

  /* ── Prompt search ── */
  const search = document.getElementById('prompt-search');
  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      let count = 0;
      cards.forEach(c => {
        const show = c.textContent.toLowerCase().includes(q);
        c.style.display = show ? '' : 'none';
        if (show) count++;
      });
      const counter = document.getElementById('prompt-count');
      if (counter) counter.textContent = count;
    });
  }

});
