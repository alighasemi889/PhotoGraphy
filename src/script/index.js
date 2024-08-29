"use strict";
//  hide the sidebar
const sidebar3 = document.getElementById("menu_tailwind");
sidebar3.style.display = "none"
function show() {
    const sidebar2 = document.getElementById("menu_tailwind")
    sidebar2.style.display = 'flex';
}

// typewriter text 
const words = ["خوش آمدید", "به سایت ما خوش آمدید", "به وب سایت ما خوش آمدید"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();
// --------------------dark mode toggle----------------

// function darkmode() {
//     const dark = document.body;
//     dark.classList.toggle("dark-mode")
// }
const scroolTop = () => {
  window.scrollTo({
    top : 0,
    behavior : 'smooth',
  
  })
}

// const btn__form = document.getElementById("show_modal");
// const form_modal = document.getElementById("main__form");
// btn__form.onclick = function click() {
//   form_modal.style.display = "block"
// }

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
//  close sidebar
const close_sidebar = document.querySelector(".close_menu");
let menu_tailwind = document.getElementById("menu_tailwind");

function close_side(){
  let menu_tailwind = document.getElementById("menu_tailwind");
 menu_tailwind.style.display = "none";
}