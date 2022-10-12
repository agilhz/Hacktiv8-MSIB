// =========================================================================
// menu-toggle =========================================================================
// =========================================================================

const menuToggle = document.querySelector(".menu-toggle");
const ul = document.querySelector("ul .menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

ul.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// =========================================================================
// ubah gambar =========================================================================
// =========================================================================

const containerImg = document.querySelector(".container-img");
const img = document.getElementById("photo");
const file = document.getElementById("file");

containerImg.addEventListener("mouseenter", function () {
  upload.style.display = "block";
});

containerImg.addEventListener("mouseleave", function () {
  upload.style.display = "none";
});

file.addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    localStorage.setItem("image", reader.result);
  });
  reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", function () {
  img.src = localStorage.getItem("image");
});

// =========================================================================
// form =========================================================================
// =========================================================================

const editForm = document.getElementById("btn-edit");
const form = document.querySelector(".form");

editForm.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

// =========================================================================
// edit form =========================================================================
// =========================================================================

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const inputNama = document.getElementById("input-nama").value;
  const inputRole = document.getElementById("input-role").value;
  const inputAvailability = document.getElementById("input-availability").value;
  const inputUsia = document.getElementById("input-usia").value;
  const inputLokasi = document.getElementById("input-lokasi").value;
  const inputYearsExp = document.getElementById("input-years-experience").value;
  const inputEmail = document.getElementById("input-email").value;

  localStorage.setItem("nama", inputNama);
  localStorage.setItem("role", inputRole);
  localStorage.setItem("availability", inputAvailability);
  localStorage.setItem("usia", inputUsia);
  localStorage.setItem("lokasi", inputLokasi);
  localStorage.setItem("yearExperience", inputYearsExp);
  localStorage.setItem("email", inputEmail);
});

const inputNama = localStorage.getItem("nama");
const inputRole = localStorage.getItem("role");
const inputAvailability = localStorage.getItem("availability");
const inputUsia = localStorage.getItem("usia");
const inputLokasi = localStorage.getItem("lokasi");
const inputYearExp = localStorage.getItem("yearExperience");
const inputEmail = localStorage.getItem("email");

document.getElementById("nama").innerText = inputNama;
document.getElementById("role").innerText = inputRole;
document.getElementById("availability").innerText = inputAvailability;
document.getElementById("usia").innerText = inputUsia;
document.getElementById("lokasi").innerText = inputLokasi;
document.getElementById("years-experience").innerText = inputYearExp;
document.getElementById("email").innerText = inputEmail;
