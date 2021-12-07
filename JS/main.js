const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button--right");
const previousButton = document.querySelector(".carousel-button--left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const firstSlide = slides[slides.length - slides.length];
const lastSlide = slides[slides.length - 1];
const firstDot = dots[dots.length - dots.length];
const lastDot = dots[dots.length - 1];

// const slideSize = slides[0].getBoundingClientRect();
//  console.log(slideSize);
// const slideWidth = slideSize.width;
const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const setCurrentSlide = (track, currentSlide, targetSlide) => {
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
};

const moveToSlide = (track, currentSlide, targetSlide) => {
  if (targetSlide === null && currentSlide === lastSlide) {
    targetSlide = firstSlide;

    setCurrentSlide(track, currentSlide, targetSlide);
  } else if (targetSlide === null && currentSlide === firstSlide) {
    targetSlide = lastSlide;

    setCurrentSlide(track, currentSlide, targetSlide);
  } else {
    setCurrentSlide(track, currentSlide, targetSlide);
  }

  //fade-in animation when moving to slide
  currentSlide.classList.remove("fade-in");
  targetSlide.classList.add("fade-in");
};

const setClassOnDot = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  if (targetDot === null && currentDot === lastDot) {
    targetDot = firstDot;

    setClassOnDot(currentDot, targetDot);
  } else if (targetDot === null && currentDot === firstDot) {
    targetDot = lastDot;

    setClassOnDot(currentDot, targetDot);
  } else {
    setClassOnDot(currentDot, targetDot);
  }
};

//when i click left, move to the left;
previousButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const previousDot = currentDot.previousElementSibling;

  moveToSlide(track, currentSlide, previousSlide);
  updateDots(currentDot, previousDot);
});

// when i click right, move to the right;
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
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
  updateDots(currentDot, targetDot);
});

//options
//arrange the slides next to one another
//when i click left, move to the left;
//when i click right, move to the right;
//when I click the nav indicator ,move to that slide

// /done
//extra options
//when i click left and I'm on the first slide, move to the last slide
//when i click right and I'm on the last slide, move to the last slide

// done

//custom options
//when i click left ,move slide behind other slide on the left side
//when i click right ,move slide behind other slide on the right side
//Expand buttons to make it touch friendly

// Work in progress
