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
const words = ["خوش امدید", "به سایت ما خوش آمدید", "به وب سایت ما خوش آمدید"];
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
// sidebar close outside
