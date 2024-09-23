"use strict"
// showing sidebar and closing it
const sidebar3 = document.getElementById("menu");
const hamberger = document.getElementById("hamberger__menu");
const close_sidebar = document.getElementById("close_side_right");
close_sidebar.onclick = () =>{
  sidebar3.style.display = "none"
}
hamberger.onclick = () =>{
  sidebar3.style.display = "block";
}

