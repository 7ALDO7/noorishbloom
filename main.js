// Sticky navbar on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  navbar.classList.toggle("sticky", window.scrollY > 20);
});

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn?.addEventListener("click", () => {
  menu?.classList.toggle("active");
});

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menu?.classList.remove("active");
  });
});

// Continue-shopping dynamic URL for PayPal forms
function getContinueShoppingURL(form) {
  const shoppingUrlInput = form.querySelector('input[name="shopping_url"]');

  if (shoppingUrlInput) {
    shoppingUrlInput.value = window.location.href;
  }
}

// Attach to all PayPal add-to-cart forms
document.querySelectorAll(".paypal-addtocart").forEach((form) => {
  form.addEventListener("submit", (event) => {
    getContinueShoppingURL(event.target);
  });
});

// Scroll reveal animation
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});
