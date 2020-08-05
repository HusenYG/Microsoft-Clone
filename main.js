const menu_btn= document.querySelector('.menu-btn');
const main_menu= document.querySelector('.main-menu');

menu_btn.addEventListener('click', () => main_menu.classList.toggle('show'));