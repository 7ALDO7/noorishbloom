// Sticky navbar on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('sticky', window.scrollY > 20);
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const menu    = document.querySelector('.menu');
menuBtn?.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link =>
  link.addEventListener('click', () => menu.classList.remove('active'))
);
