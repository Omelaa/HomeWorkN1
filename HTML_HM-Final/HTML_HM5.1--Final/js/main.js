


new Swiper('.sliders__container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,


    navigation: {
        nextEl: '.sliders__button-next',
        prevEl: '.sliders__button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay:{
        delay:1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    }
});

 new Swiper('.sliders-line', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,

     navigation: {
         nextEl: '.sliders__button-next',
         prevEl: '.sliders__button-prev',
     },

     breakpoints: {
         1024: {
         },
         770: {
             slidesPerView: 2.5,
             spaceBetween: 10,
         },
         580: {
             slidesPerView: 1.5,
             spaceBetween: 10,
         },
         320: {
         }
     }
 });


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

const moreMenu = document.querySelector('.header-nav__more');
if (moreMenu) {
    const menuItems = document.querySelector('.header-nav__items');
    moreMenu.addEventListener("click", function () {
        document.body.classList.toggle("_lock");
        moreMenu.classList.toggle('_active');
        menuItems.classList.toggle('_active');
    });
}