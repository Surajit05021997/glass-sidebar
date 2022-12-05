const toggleMenu = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.sidebar');
toggleMenu.addEventListener('click', () => {
  if(sidebar.classList.value.includes('open')) {
    sidebar.classList.remove('open');
    return;
  }
  sidebar.classList.add('open');
});

const navItems = document.querySelectorAll('.navbar .nav-item');
navItems.forEach((navItem) => {
  navItem.addEventListener('click', ()=> {
    const activeItem = document.querySelector('.nav-item.active');
    activeItem.classList.remove('active');
    navItem.classList.add('active');
  });
});