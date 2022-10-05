const menuToggle = document.querySelector(".menu-toggle");
const ul = document.querySelector("ul .menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

ul.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
