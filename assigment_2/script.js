const menuToggle = document.querySelector(".menu-toggle");
const ul = document.querySelector("ul .menu-toggle");
const nav = document.querySelector("nav ul");
const containerImg = document.querySelector(".container-img");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const upload = document.querySelector("#upload");
const editForm = document.querySelector(".btn-edit");
const form = document.querySelector(".form");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

ul.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

containerImg.addEventListener("mouseenter", function () {
  upload.style.display = "block";
});

containerImg.addEventListener("mouseleave", function () {
  upload.style.display = "none";
});

file.addEventListener("change", function () {
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});

editForm.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
