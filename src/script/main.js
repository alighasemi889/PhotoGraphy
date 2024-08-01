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





