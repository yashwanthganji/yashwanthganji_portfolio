// Timeline reveal — the one orchestrated scroll animation on the page.
// Respects prefers-reduced-motion by revealing everything immediately.

(function () {
  const items = document.querySelectorAll('.timeline li');
  if (!items.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    items.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  items.forEach((el) => observer.observe(el));
})();

// Highlight the active nav link based on scroll position.
(function () {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('nav.primary a');
  if (!sections.length || !navLinks.length) return;

  const linkMap = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute('href').replace('#', '');
    linkMap.set(id, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkMap.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
})();
