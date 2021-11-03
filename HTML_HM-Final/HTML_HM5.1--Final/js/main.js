
new Swiper('.sliders__container',{
    slidesPerView:1,
    loop: true,
    spaceBetween:20,



    navigation: {
        nextEl: '.sliders__button-next',
        prevEl: '.sliders__button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
    },
});


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

const moreMenu = document.querySelector('.header-nav__more');
if (moreMenu){
    const menuItems = document.querySelector('.header-nav__items');
    moreMenu.addEventListener("click", function (){
        document.body.classList.toggle("_lock");
        moreMenu.classList.toggle('_active');
        menuItems.classList.toggle('_active');
    });
}