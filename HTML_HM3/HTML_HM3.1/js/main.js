const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu){
    const menuItems = document.querySelector('.menu__items');
    const menuContact = document.querySelector('.menu__contact');
    const menu = document.querySelector('.menu');
    burgerMenu.addEventListener("click", function (){
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle('_active');
        menuItems.classList.toggle('_active');
        menuContact.classList.toggle('_active');
        menu.classList.toggle('_active');
    });
}