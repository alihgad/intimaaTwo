





document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});





const nav = document.querySelector("nav"); // Select the nav element
const navLinks = document.querySelectorAll("nav .lg\\:flex a"); // Select nav links

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("bg-white", "rounded-lg"); // Add background and border radius
  } else {
    nav.classList.remove("bg-white", "rounded-lg"); // Remove on scroll up
  }
});