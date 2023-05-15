// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let darkmode = document.querySelector("#darkmode-icon");

window.addEventListener("scroll", function () {
  header.classList.toggle("shadow", window.scrollY > 0);
});
menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
window.onscroll = function () {
  navbar.classList.remove("active");
};

// Dark Mode
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

