const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button--right");
const previousButton = document.querySelector(".carousel-button--left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const firstSlide = slides[slides.length - slides.length];
const lastSlide = slides[slides.length - 1];

console.log(firstSlide);
console.log(lastSlide);
//  console.log(slides);

// const slideSize = slides[0].getBoundingClientRect();
// console.log(slideSize);
// const slideWidth = slideSize.width;
const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);

//arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 +  'px';
// slides[1].style.left = slideWidth * 1 +  'px';
// slides[2].style.left = slideWidth * 2 +  'px';

// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// })

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  if (targetSlide === lastSlide) {
    console.log(lastSlide);
    console.log(targetSlide);
    targetSlide = firstSlide;
    console.log(targetSlide);
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  } else if (targetSlide === null) {
    targetSlide = lastSlide;
    console.log(targetSlide);
    console.log(currentSlide);
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  } else {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";

    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  }

  //fade-in animation when moving to slide
  currentSlide.classList.remove("fade-in");
  targetSlide.classList.add("fade-in");
};

// const updateDots = (currentDot, targetDot) => {
//   currentDot.classList.remove("current-slide");
//   targetDot.classList.add("current-slide");
// };

// const hideShowArrows = (slides, previousButton, nextButton, targetIndex) => {
//   if (targetIndex === 0) {
//     previousButton.classList.add("is-hidden");
//     nextButton.classList.remove("is-hidden");
//   } else if (targetIndex === slides.length - 1) {
//     previousButton.classList.remove("is-hidden");
//     nextButton.classList.add("is-hidden");
//   } else {
//     previousButton.classList.remove("is-hidden");
//     nextButton.classList.remove("is-hidden");
//   }
// };

//when i click left, move to the left;
previousButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const previousDot = currentDot.previousElementSibling;
  const previousIndex = slides.findIndex((slide) => slide === previousSlide);

  moveToSlide(track, currentSlide, previousSlide);
  //   updateDots(currentDot, previousDot);
  //   hideShowArrows(slides, previousButton, nextButton, previousIndex);
});

//when i click right, move to the right;
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  //   updateDots(currentDot, nextDot);
  //   hideShowArrows(slides, previousButton, nextButton, nextIndex);
});

//when I click the nav indicator ,move to that slide

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  //   updateDots(currentDot, targetDot);
  //   hideShowArrows(slides, previousButton, nextButton, targetIndex);
});

//options
//arrange the slides next to one another
//when i click left, move to the left;
//when i click right, move to the right;
//when I click the nav indicator ,move to that slide

//extra options
//when i click left and I'm on the first slide, move to the last slide
//when i click right and I'm on the last slide, move to the last slide

//custom options
//when i click left ,move slide behind other slide on the left side
//when i click right ,move slide behind other slide on the right side
//Expand buttons to make it touch friendly
