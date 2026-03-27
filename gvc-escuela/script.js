// ===== CURSOR PERSONALIZADO =====
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

(function animCursor() {
  curX += (mouseX - curX) * 0.1;
  curY += (mouseY - curY) * 0.1;
  cursor.style.left = curX + 'px';
  cursor.style.top  = curY + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .curso-card, .ben-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ===== NAVBAR HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}));

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 80
    ? 'rgba(7,7,14,0.98)'
    : 'rgba(7,7,14,0.85)';
});

// ===== ANIMACIONES DE ENTRADA =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const revealItems = [
  ...document.querySelectorAll('.curso-card'),
  ...document.querySelectorAll('.val'),
  ...document.querySelectorAll('.paso'),
  ...document.querySelectorAll('.nos-img-main, .nos-img-sec, .nos-stat-card'),
];

revealItems.forEach((el, i) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.09}s, transform 0.6s ease ${i * 0.09}s`;
  revealObserver.observe(el);
});

// ===== HERO PARALLAX SUAVE =====
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const mesh = document.querySelector('.hero-mesh');
  if (mesh) mesh.style.transform = `translateY(${y * 0.25}px)`;
});
