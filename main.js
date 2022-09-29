const dropmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHumIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

dropmenu.addEventListener('click', toggDesktopMenu);
menuHumIcon.addEventListener('click', toggMobileMenu )

function toggDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggMobileMenu(){
    console.log("Click");
    mobileMenu.classList.toggle('inactive');
}