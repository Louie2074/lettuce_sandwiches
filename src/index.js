import initHome from './home';
import '../dist/style.css';
import { createFooter, createNav } from './website';

(function () {
  initHome();
  createNav();
  createFooter();
})();

function removeAll(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { removeAll };
