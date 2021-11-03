function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();


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