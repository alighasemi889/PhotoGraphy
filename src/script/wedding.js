"use strict"
// -----------------------------------------//
//----------------- showing and hide the sidebar in mobile------------------
const close__icon = document.getElementById("close_side_right");
const menu = document.getElementById("menu");
const hamberger__menu = document.getElementById("hamberger__menu");
close__icon.onclick = () => {
    menu.style.display = "none";
    menu.style.transition = "3s ease-in all"
}
hamberger__menu.onclick =  () =>{
    menu.style.display = 'block';
    menu.style.transitionBehavior = "4.s ease-in-out"

}