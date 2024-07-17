function show() {
    const sidebar = document.querySelector(".sidebar__right");
    sidebar.style.display = 'flex';
}
function closesidebar() {
    const sidebar = document.querySelector(".sidebar__right");
    sidebar.style.display = 'none';
    sidebar.style.transition = '3.s ease-out'
}