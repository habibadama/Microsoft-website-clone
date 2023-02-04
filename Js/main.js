const menu = document.getElementById("menu");
const navbar = document.querySelector("ul");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
