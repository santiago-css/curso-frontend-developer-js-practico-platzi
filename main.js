const dropmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

dropmenu.addEventListener('click',toggDesktopMenu);

function toggDesktopMenu(){
    console.log("Click");
    desktopMenu.classList.toggle('inactive');
}