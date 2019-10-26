// basic setup for elements
const carouselContainer = document.querySelector(".carousel-container");
const carouselSlider = document.querySelector(".carousel-slider");
const carouselItems = document.querySelectorAll(".carousel-slider div");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const pageInd = document.querySelector(".page-indicator input");

// sizing setup for carousel
let size = carouselItems[0].clientWidth;

nextBtn.style.left = `${size - 30}px`;
carouselContainer.style.width = `${size}px`;

let sizeMargin = size + 70;
let counter = 0;
pageInd.value = counter;

const updateCounter = () => {
  carouselSlider.style.transition = `transform 0.4s ease-in-out`;
  carouselSlider.style.transform = `translateX(-${sizeMargin * counter}px)`;
  pageInd.value = counter;
};
carouselSlider.style.transform = `translateX(-${sizeMargin * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter <= carouselItems.length - 2) {
    counter++;
    updateCounter();
  }
});
prevBtn.addEventListener("click", () => {
  if (counter >= 1) {
    counter--;
    updateCounter();
  }
});

// creating the page jumper

pageInd.addEventListener("focusout", () => {
  if (pageInd.value >= 0 && pageInd.value <= 56) {
    counter = pageInd.value;
    carouselSlider.style.transition = "none";
    carouselSlider.style.transform = `translateX(-${sizeMargin * counter}px)`;
    pageInd.style.boxShadow = "none";
    pageInd.style.border = "none";
  } else {
    pageInd.style.border = "2px solid rgba(255,0,0, 0.4)";
    pageInd.style.boxShadow = "0px 0px 3px red";
  }
});
