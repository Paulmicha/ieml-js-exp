const hyperApp = require('hyperhtml-app');
const render = require('./render');

const app = hyperApp();
const title = 'viperHTML 🐍 Hacker News';

// router helpers
let lastClick;

// main container
const main = () => document.querySelector('body');

// helpers
const fadeIn = (value) => {
  scrollTo(0, 0);
  main().classList.remove('opaque');
  return value;
};

app.get('/about', ctx => {
  const pathname = (lastClick = location.pathname);
  main().classList.add('opaque');
  render.header('about');
  setTimeout(() => {
    if (lastClick === pathname) {
      render.about([]).then(fadeIn);
    }
  }, 150);
});


// ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
