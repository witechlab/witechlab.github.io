/* WiTech Lab — Mobile Navigation */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const overlay = document.querySelector('.nav-overlay');
  if (!toggle || !nav) return;

  function open() {
    nav.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    nav.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    nav.classList.contains('is-open') ? close() : open();
  });

  if (overlay) overlay.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

/* Group Photo Carousel */
(function () {
  const slides = document.querySelectorAll('.carousel-slide');
  if (!slides.length) return;
  let current = 0;
  setInterval(function () {
    const old = slides[current];
    old.classList.add('exiting');
    old.classList.remove('active');

    let next;
    do { next = Math.floor(Math.random() * slides.length); } while (next === current);
    current = next;
    slides[current].classList.add('active');

    setTimeout(() => {
      old.style.transition = 'none';
      old.classList.remove('exiting');
      old.offsetHeight; // force reflow
      old.style.transition = '';
    }, 500);
  }, 3000);
})();
