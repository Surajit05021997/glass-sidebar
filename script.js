const toggleMenu = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.sidebar');
toggleMenu.addEventListener('click', () => {
  if(sidebar.classList.value.includes('open')) {
    sidebar.classList.remove('open');
    return;
  }
  sidebar.classList.add('open');
});