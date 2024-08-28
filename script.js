// scripts.js

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".service-card");
  const totalSlides = slides.length;
  const carouselContainer = document.querySelector(".carousel-container");

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const translateX = -currentSlide * (100 / totalSlides);
  carouselContainer.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialize the first slide
showSlide(currentSlide);
