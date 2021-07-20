import letsan from '../dist/img/download.png';
import chezsan from '../dist/img/Untitled.png';
function initMenu() {
  const content = document.querySelector('#content');
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const header = document.createElement('p');
  const menuItems = document.createElement('div');
  menuItems.classList.add('menuItems');
  header.classList.add('head');
  header.textContent = 'Here is the menu';
  menuItems.appendChild(new menuItem('Lettuce Sandwich', letsan).toNode());
  menuItems.appendChild(
    new menuItem('Lettuce Sandwich with cheese', chezsan).toNode()
  );
  menuItems.appendChild(
    new menuItem('Lettuce Sandwich without cheese', letsan).toNode()
  );

  menu.appendChild(header);
  menu.appendChild(menuItems);
  content.appendChild(menu);
}

class menuItem {
  constructor(desc, img) {
    this.desc = desc;
    const image = new Image();
    image.src = img;
    this.img = image;
  }

  toNode() {
    const item = document.createElement('div');
    item.classList.add('menuItem');

    const description = document.createElement('p');
    description.textContent = this.desc;
    item.appendChild(description);
    item.appendChild(this.img);
    return item;
  }
}
export default initMenu;
