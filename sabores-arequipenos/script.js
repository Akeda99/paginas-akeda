// ===== TABS DEL MENÚ =====
const tabBtns = document.querySelectorAll('.tab-btn');
const menuGrids = document.querySelectorAll('.menu-grid');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    menuGrids.forEach(g => g.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ===== MENÚ HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar menú al hacer click en un enlace
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== NAVBAR TRANSPARENTE AL SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(12, 5, 2, 0.97)';
  } else {
    navbar.style.background = 'rgba(20, 10, 5, 0.92)';
  }
});
