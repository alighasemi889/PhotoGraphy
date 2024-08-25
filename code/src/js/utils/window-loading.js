const loadingSplash = document.getElementById('loading-splash');

window.addEventListener('load', () => {
  loadingSplash && loadingSplash.classList.add('hidden');
});

window.addEventListener('error', (e) => {
  console.error(e);
});
