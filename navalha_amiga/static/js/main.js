/* ================================================================
   NIVELA — main.js
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll ──────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ── Mobile menu ────────────────────────────────────────────── */
  const mobileBtn  = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      mobileBtn.innerHTML = open
        ? '<i class="bi bi-x"></i>'
        : '<i class="bi bi-list"></i>';
    });
  }

  /* ── FAQ accordion ──────────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Feature tabs ───────────────────────────────────────────── */
  document.querySelectorAll('.ftab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.feature-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Billing toggle ─────────────────────────────────────────── */
  const toggle  = document.getElementById('billingToggle');
  const isAnnual = { value: false };

  function updatePricing(annual) {
    isAnnual.value = annual;
    toggle?.classList.toggle('on', annual);
    document.querySelectorAll('[data-monthly]').forEach(el => {
      const m = parseFloat(el.dataset.monthly);
      const a = parseFloat(el.dataset.annual);
      if (annual) {
        el.textContent = a;
      } else {
        el.textContent = m;
      }
    });
    document.querySelectorAll('.bt-label').forEach((lbl, i) => {
      lbl.classList.toggle('active', annual ? i === 1 : i === 0);
    });
    // Show/hide annual note
    document.querySelectorAll('.plan-annual-note').forEach(n => {
      n.style.display = annual ? 'block' : 'none';
    });
  }

  toggle?.addEventListener('click', () => updatePricing(!isAnnual.value));
  document.querySelectorAll('.bt-label').forEach((lbl, i) => {
    lbl.addEventListener('click', () => updatePricing(i === 1));
  });
  updatePricing(false);

  /* ── Animated counters ──────────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const end = parseFloat(el.dataset.count);
      const int = Number.isInteger(end);
      const dur = 1800, step = 16;
      const inc = end / (dur / step);
      let cur = 0;
      const timer = setInterval(() => {
        cur = Math.min(cur + inc, end);
        el.textContent = int ? Math.floor(cur) : cur.toFixed(1);
        if (cur >= end) clearInterval(timer);
      }, step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));

  /* ── Smooth anchor scroll ───────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      mobileMenu?.classList.remove('open');
    });
  });

  /* ── Subtle cursor glow (desktop only) ─────────────────────── */
  if (window.innerWidth > 768) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position:fixed;width:300px;height:300px;border-radius:50%;
      background:radial-gradient(circle,rgba(201,168,76,0.04),transparent 70%);
      pointer-events:none;z-index:9998;
      transform:translate(-50%,-50%);
      transition:opacity 0.3s;
    `;
    document.body.appendChild(glow);
    let mx=0,my=0,cx=0,cy=0;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
    (function loop() {
      cx += (mx-cx)*0.08; cy += (my-cy)*0.08;
      glow.style.left = cx+'px';
      glow.style.top  = cy+'px';
      requestAnimationFrame(loop);
    })();
  }

});
