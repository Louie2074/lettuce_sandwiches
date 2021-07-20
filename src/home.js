function initHome() {
  const content = document.querySelector('#content');
  const head = document.createElement('div');
  head.classList.add('head');
  head.textContent = "Welcome to Doug's lettuce sandwiches";
  content.appendChild(head);
}
export default initHome;
