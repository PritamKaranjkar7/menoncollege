// -----------------------------
// NAVBAR + MOBILE MENU
// -----------------------------
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const body = document.body;

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  menu.classList.toggle('open');

  // Lock scroll when menu open (premium UX)
  body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu on link click
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    body.style.overflow = '';
  });
});


// -----------------------------
// STICKY NAVBAR EFFECT
// -----------------------------
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});


// -----------------------------
// ACTIVE LINK (PRO LEVEL)
// -----------------------------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  {
    threshold: 0.6
  }
);

sections.forEach(section => observer.observe(section));


// -----------------------------
// SCROLL REVEAL (PREMIUM FEEL)
// -----------------------------
const revealElements = document.querySelectorAll(
  '.section, .course-card, .feature, .about-card, .step'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => {
  el.classList.add('reveal-init');
  revealObserver.observe(el);
});


// -----------------------------
// BUTTON RIPPLE EFFECT
// -----------------------------
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const rect = this.getBoundingClientRect();

    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    circle.classList.add('ripple');

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});


// -----------------------------
// CONTACT FORM (REAL UX)
// -----------------------------
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const button = form.querySelector('button');
  button.disabled = true;
  button.textContent = 'Sending...';

  // Simulate API call
  await new Promise(res => setTimeout(res, 1500));

  formMsg.textContent = '✓ Message sent successfully!';
  formMsg.style.color = '#2e8b57';

  form.reset();
  button.disabled = false;
  button.textContent = 'Send Message';

  setTimeout(() => (formMsg.textContent = ''), 4000);
});


// -----------------------------
// DYNAMIC YEAR
// -----------------------------
document.getElementById('year').textContent = new Date().getFullYear();


// -----------------------------
// SMOOTH SCROLL (NATIVE ENHANCE)
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});