const menu = window.document.querySelector('.menu'); // query//
const NavMenu = window.document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})