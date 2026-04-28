/* =============================================
   NAVALHA AMIGA — main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll ---- */
  const navbar = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- Animated counter (Intersection Observer) ---- */
  const counters = document.querySelectorAll('[data-count]');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const end   = parseFloat(el.dataset.count);
      const isInt = Number.isInteger(end);
      const duration = 1800;
      const step     = 16;
      const steps    = duration / step;
      let current = 0;
      const timer = setInterval(() => {
        current += end / steps;
        if (current >= end) { current = end; clearInterval(timer); }
        el.textContent = isInt ? Math.floor(current) : current.toFixed(1);
      }, step);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObs.observe(c));

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
