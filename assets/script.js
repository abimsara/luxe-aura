// Mobile Menu
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) { toggle.addEventListener('click', () => navLinks.classList.toggle('open')); }

// Scroll Reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Form Submit
const form = document.querySelector('form');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Your booking request has been sent successfully. Our concierge will contact you shortly.");
    form.reset();
  });
}