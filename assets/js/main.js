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

// Open Video
document
  .getElementById("videoLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let modal = document.getElementById("videoModal");
    let iframe = document.getElementById("videoIframe");
    iframe.src = "https://www.youtube.com/embed/0WusMvoFnaQ?autoplay=1";
    modal.style.display = "block";
  });

document.getElementsByClassName("close")[0].onclick = function () {
  let modal = document.getElementById("videoModal");
  let iframe = document.getElementById("videoIframe");
  iframe.src = "";
  modal.style.display = "none";
};

window.onclick = function (event) {
  let modal = document.getElementById("videoModal");
  if (event.target == modal) {
    let iframe = document.getElementById("videoIframe");
    iframe.src = "";
    modal.style.display = "none";
  }
};

// Transition Navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 350) {
    nav.classList.add("navbar");
  } else {
    nav.classList.remove("navbar");
  }
});
