document.getElementById("aside_mobile").addEventListener("click", function () {
  let aside = document.getElementById("aside");
  let backdrop = document.getElementById("backdrop");

  if (aside.classList.contains("hidden")) {
    aside.classList.remove("hidden");
    backdrop.classList.remove("hidden");
  } else {
    aside.classList.add("hidden");
    backdrop.classList.add("hidden");
  }
});

document.getElementById("close").addEventListener("click", function () {
  let aside = document.getElementById("aside");
  let backdrop = document.getElementById("backdrop");

  aside.classList.add("hidden");
  backdrop.classList.add("hidden");
});

