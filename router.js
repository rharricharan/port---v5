const routes = {
  '/': '<h1>Home</h1>',
  '/about': '<h1>About</h1>',
  '/contact': '<h1>Contact</h1>',
};

function renderRoute() {
  const path = window.location.pathname;
  document.getElementById('app').innerHTML = routes[path] || '<h1>Not Found</h1>';
}

window.onpopstate = renderRoute;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      window.history.pushState({}, '', link.getAttribute('href'));
      renderRoute();
    });
  });
  renderRoute();
});