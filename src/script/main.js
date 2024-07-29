"use strict";
// loader part
// Create a function to display the loader
function showLoader() {
    document.getElementById("loader-container").style.display = "block";
  }
  
  // Create a function to hide the loader
  function hideLoader() {
    document.getElementById("loader-container").style.display = "none";
  }
  
  // Use Ajax to load data from a server-side script
  function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "server-side-script.php", true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        // Process the response data here
        console.log(response);
      } else {
        console.error("Error loading data:", xhr.statusText);
      }
      hideLoader(); // Hide the loader once the data is loaded
    };
    xhr.send();
  }
  
  // Call the loadData function when the page loads
  window.onload = function() {
    showLoader(); // Show the loader before making the Ajax request
    loadData();
  };


//   finish loader codes
function show() {
    const sidebar = document.querySelector(".sidebar__right");
    sidebar.style.display = 'flex';
}
function closesidebar() {
    const sidebar = document.querySelector(".sidebar__right");
    sidebar.style.display = 'none';
    sidebar.style.transition = '3.s ease-out'
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

function darkmode() {
    const dark = document.body;
    dark.classList.toggle("dark-mode")
}

// ----------------------show the modal------------
const show_modal_btn = document.getElementById("show_modal");
const login = document.getElementById("login-popup");
const change_position = document.getElementById("left__position");
show_modal_btn.onclick = function indicate_form() {
   login.style.display = "block";
    change_position.style.right = "34rem";
    change_position.style.top = "3rem";
   
}
const login2 = document.getElementById("login-popup");
const change_position2 = document.getElementById("left__position");
const btn2 = docuemnt.getElementById("btn__close");
btn2.onclick = function closeali() {
  login2.style.display ="none";
  
}



