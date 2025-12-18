const hamburgerBtn = document.querySelector('.hamburger-btn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
});

document.addEventListener('click', (event) => {
const isClickInsideSidebar = sidebar.contains(event.target);
const isClickOnHamburger = hamburgerBtn.contains(event.target);
const isSidebarOpen = sidebar.classList.contains('open');

if (isSidebarOpen && !isClickInsideSidebar && !isClickOnHamburger) {
sidebar.classList.remove('open');
content.classList.remove('open');
}
});
