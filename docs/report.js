// Fade each .fade-in element into view as the
// reader scrolls to it. Uses the browser's native
// IntersectionObserver API -- no libraries needed.
window.addEventListener('DOMContentLoaded', function () {
  var targets = document.querySelectorAll('.fade-in');
  if (!targets.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
});
