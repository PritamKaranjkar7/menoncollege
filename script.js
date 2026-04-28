// COMPONENT LOADER
function loadComponent(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error(err));
}

// NAVBAR LOGIC
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const body = document.body;

  // mobile menu
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    body.style.overflow = open ? 'hidden' : '';
  });

  // close menu on click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      body.style.overflow = '';
    });
  });

  // sticky + active link
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.menu a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(sec => observer.observe(sec));
}

// LOAD COMPONENTS
loadComponent("navbar", "/components/navbar.html", initNavbar);


// FOOTER YEAR
document.getElementById('year').textContent = new Date().getFullYear();