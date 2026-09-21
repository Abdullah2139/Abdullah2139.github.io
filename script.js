// Nav highlight + gentle scroll-reveal for each section.
const sections = document.querySelectorAll('.stage');
const navLinks = document.querySelectorAll('.topnav-links a');

if (sections.length) {
  if ('IntersectionObserver' in window) {
    // Reveal each stage once as it enters the viewport.
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    sections.forEach(section => revealObserver.observe(section));

    // Highlight the current section's nav link.
    if (navLinks.length) {
      const map = new Map();
      navLinks.forEach(link => map.set(link.getAttribute('href').replace('#', ''), link));

      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const link = map.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(l => l.style.color = '');
            link.style.color = 'var(--accent-deep)';
          }
        });
      }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
      sections.forEach(section => navObserver.observe(section));
    }
  } else {
    // No IntersectionObserver support — just show everything.
    sections.forEach(section => section.classList.add('in-view'));
  }
}
