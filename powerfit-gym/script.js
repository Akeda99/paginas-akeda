// ===== NAVBAR HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60
    ? 'rgba(8,8,8,0.98)'
    : 'rgba(8,8,8,0.95)';
});

// ===== ANIMACIÓN DE ENTRADA =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.ben-card, .plan-card, .ubi-item').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
  observer.observe(el);
});

// ===== CONTADOR ANIMADO =====
function animateCounter(el, target) {
  let current = 0;
  const step = Math.ceil(target / 50);
  const interval = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target + '+'; clearInterval(interval); }
    else { el.textContent = current + '+'; }
  }, 30);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEl = entry.target.querySelector('.stat-num');
      if (numEl && numEl.dataset.target) {
        animateCounter(numEl, parseInt(numEl.dataset.target));
      }
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(s => statsObserver.observe(s));
