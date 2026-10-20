// Mobile Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => 
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// Scroll Reveal Animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Form Submit
const form = document.querySelector('form');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your appointment request has been sent.");
    form.reset();
  });
}