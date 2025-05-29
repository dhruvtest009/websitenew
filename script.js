// script.js

// Optional: You can add interactivity here if you want, like 
// smooth fade-ins or active nav highlighting on scroll.

// For now, no JavaScript needed for smooth scrolling because
// we use CSS scroll-behavior: smooth.

// Example: Active link highlighting on scroll (optional)

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
