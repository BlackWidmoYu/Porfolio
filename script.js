(function () {
  'use strict';

  // Rok w stopce
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menu mobilne
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      navMenu.classList.toggle('is-open');
      document.body.style.overflow = navMenu.classList.contains('is-open') ? 'hidden' : '';
    });

    // Zamknięcie menu po kliknięciu w link
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Delikatne podświetlenie nagłówka przy przewijaniu
  var header = document.querySelector('.header');
  if (header) {
    function onScroll() {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 15, 18, 0.95)';
      } else {
        header.style.background = 'rgba(15, 15, 18, 0.85)';
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
