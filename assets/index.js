const header = document.querySelector('header');
const button = document.querySelector('.header-button--dropdown');
const menu = document.querySelector('.header-menu--dropdown');

button.addEventListener('click', e => {
    

    if(menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
})