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

// — continue-shopping dynamic URL for PayPal forms — 
function getContinueShoppingURL(form) {
  form.shopping_url.value = window.location.href;
}

// attach to all your add‐to‐cart forms
document.querySelectorAll('.paypal-addtocart').forEach(f => {
  f.addEventListener('submit', ev => {
    getContinueShoppingURL(ev.target);
  });
});
