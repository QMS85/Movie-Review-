// script.js
// Minimal script: logs a message and provides a small helper to toggle a visual "favorite" state.
// No runtime code is required to pass the lab tests; this file is present for completeness and future extension.

console.log('Movie Review Page loaded.');

// Example small helper to mark a movie as favorite (non-essential for tests)
(function () {
  // Create a small favorite button near the title if JS is available
  try {
    const main = document.querySelector('main');
    if (!main) return;

    const h1 = main.querySelector('h1');
    if (!h1) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = '☆ Favorite';
    btn.setAttribute('aria-pressed', 'false');
    btn.style.marginLeft = '12px';
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', () => {
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      btn.textContent = pressed ? '☆ Favorite' : '★ Favorited';
    });

    // Insert after h1
    h1.insertAdjacentElement('afterend', btn);
  } catch (e) {
    // silent fallback — not necessary for the lab
    console.warn('Favorite button init failed', e);
  }
})();
