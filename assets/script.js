// Mobile Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Scroll Reveal Animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Form Submit Demo
const form = document.querySelector('form');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Booking Request Sent Successfully! We will contact you shortly.");
    form.reset();
  });
}