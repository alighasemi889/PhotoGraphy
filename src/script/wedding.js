"use strict"
//----------------- showing and hide the sidebar in mobile------------------
const close__icon = document.getElementById("close_side_right");
const menu__rightside = document.getElementById("menu");
const hamberger__menu = document.getElementById("hamberger__menu");
close__icon.onclick = () => {
    menu__rightside.style.display = "none";
    menu__rightside.style.transition = "3s ease-in all"
}
hamberger__menu.onclick =  () =>{
    menu__rightside.style.display = 'block';
    menu__rightside.style.transitionBehavior = "4.s ease-in-out"

}