// Fade-in observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Scroll progress bar
const scrollBar = document.getElementById('scrollBar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const pct = (scrolled / maxScroll) * 100;
  if (scrollBar) scrollBar.style.width = pct + '%';

  // Nav shrink
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', scrolled > 60);
});