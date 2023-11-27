// Define botao ativo no navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const links = navbar.querySelectorAll("li");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((link) => link.classList.remove("active"));

      this.classList.add("active");
    });
  });
});

// Menu mobile
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});

// Transition Navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 350) {
    nav.classList.add("navbar");
  } else {
    nav.classList.remove("navbar");
  }
});
