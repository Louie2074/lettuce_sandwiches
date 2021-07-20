function initContact() {
  const content = document.querySelector('#content');
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const text = document.createElement('p');
  text.setAttribute('style', 'font-size:45px; color:white; text-align:center');
  text.textContent = 'Please contact me at this number';
  contact.appendChild(text);

  content.appendChild(contact);
}
export default initContact;
