const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const previousButton = document.querySelector('.carousel-button--left');

console.log(slides);

// const slideSize = slides[0].getBoundingClientRect();
// console.log(slideSize);
// const slideWidth = slideSize.width;
const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);

slides[0].style.left = 0;



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



