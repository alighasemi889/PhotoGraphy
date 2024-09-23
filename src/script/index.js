"use strict";


// scrool top to bottom
const scroolTop = () => {
  window.scrollTo({
    top : 0,
    behavior : 'smooth',
  
  })
}
// modal
const modal = document.getElementById("modal");
let close_modal = document.getElementById("close");
modal.style.display = "none"

setTimeout(() => {
  modal.style.display = "flex"
  close_modal.onclick =() =>{
    modal.style.display = "none";
  }
  
}, 4000);

// sidebar logic
const main = document.querySelector(".low__seen");
const sidebar = document.getElementById("menu");
const hamberger = document.getElementById("hamberger__menu");
const close_sidebar = document.getElementById("close_side_right");
close_sidebar.onclick = () =>{
  sidebar.style.display = "none";
  sidebar.style.transition = "3s ease-in-out";
  main.style.opacity = "1";
}
hamberger.onclick = () =>{
  sidebar.style.display = "block";
  main.style.opacity = "10%";
}

