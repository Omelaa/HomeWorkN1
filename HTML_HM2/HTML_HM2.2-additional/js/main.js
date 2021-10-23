const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu){
    burgerMenu.addEventListener("click", function (){
       burgerMenu.classList.toggle('_active');
    });
}