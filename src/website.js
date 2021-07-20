import initContact from './contact';
import initHome from './home';
import initMenu from './menu';
import '../dist/style.css';
import { removeAll } from './index.js';
function createNav() {
  const body = document.querySelector('body');
  const content = document.getElementById('content');
  let nav = document.createElement('nav');
  nav.classList.add('nav');

  let home = document.createElement('button');
  home.classList.add('navItem');
  home.textContent = 'Home';
  home.addEventListener('click', function () {
    removeAll(content);
    initHome();
  });

  let menu = document.createElement('button');
  menu.classList.add('navItem');
  menu.textContent = 'Menu';
  menu.addEventListener('click', function () {
    removeAll(content);
    initMenu();
  });

  let contact = document.createElement('button');
  contact.classList.add('navItem');
  contact.textContent = 'Contact';
  contact.addEventListener('click', function () {
    removeAll(content);
    initContact();
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  body.insertBefore(nav, content);
}

function createFooter() {
  const foot = document.createElement('footer');
  const body = document.querySelector('body');
  let date = new Date().getFullYear();
  foot.classList.add('foot');
  foot.textContent = `Copyright ©: ${date} Louis Nguyen All Rights Reserved`;
  body.appendChild(foot);
}
export { createFooter, createNav };
