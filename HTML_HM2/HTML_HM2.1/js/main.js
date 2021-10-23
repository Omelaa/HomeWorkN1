const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu){
    const headerItems = document.querySelector('.header__items');
    burgerMenu.addEventListener("click", function (){
        document.body.classList.toggle("_lock");
       burgerMenu.classList.toggle('_active');
       headerItems.classList.toggle('_active');
    });
}