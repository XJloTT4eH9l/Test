//mobile-menu
let burger = document.querySelector('.burger');
let mobMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function(){
    console.log("click");
    mobMenu.classList.toggle('mobile-menu--active');
})