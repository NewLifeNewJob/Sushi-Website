document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector('[data-toggle="collapsible"]');
  const collapsibleContent = document.querySelector(".collapsible_content");

  toggleButton.addEventListener("click", () => {
    collapsibleContent.classList.toggle("active");
  });
});

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

let slideIndex = 1;
showSlides(slideIndex);

const currentSlide = (n) => {
  slideIndex = n;
  showSlides(slideIndex);
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
