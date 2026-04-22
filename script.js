// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
});

// Close mobile menu on link click
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = menu.querySelectorAll('a');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  let current = 'home';
  sections.forEach(s => {
    if (y >= s.offsetTop) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
});

// Contact form (demo)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = '✓ Thank you! Your message has been received. We will get back to you shortly.';
  form.reset();
  setTimeout(() => formMsg.textContent = '', 6000);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
