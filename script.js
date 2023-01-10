let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2500);
}
let bottomslide = 0;
botSlides();

function botSlides() {
  let i;
  let newSlides = document.getElementsByClassName("bottom");

  for (i = 0; i < newSlides.length; i++) {
    newSlides[i].style.display = "none";
  }
  bottomslide++;
  if (bottomslide > newSlides.length) {
    bottomslide = 1;
  }
  newSlides[bottomslide - 1].style.display = "block";

  setTimeout(botSlides, 2500);
}

// //////////////////////////////////////////////////////////
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
