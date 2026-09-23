const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  header.classList.toggle('is-scrolled', currentScroll > 20);
  if (currentScroll > lastScroll && currentScroll > 90) header.classList.add('is-hidden');
  else header.classList.remove('is-hidden');
  lastScroll = currentScroll;
}, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => document.body.classList.add('has-navigated'));
});