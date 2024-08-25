'use strict'


document.addEventListener("DOMContentLoaded", function(){

    // mobile  menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu=document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click',function(){
        toggleButton.classList.toggle("active");
        mobileMenu.classList.toggle('active');
        

    })

   


// navigaiton backgorund on scroll

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav');
if(window.scrollY > 0){
navbar.classList.add('nav--scroll');

}else {
    navbar.classList.remove('nav--scroll');
}

})

});