// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});
document.addEventListener('click', e => {
  if (!e.target.closest('.site-nav')) {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});
