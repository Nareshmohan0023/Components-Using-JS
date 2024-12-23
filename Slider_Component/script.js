const slides = document.querySelectorAll(".slide");
const RB = document.querySelector(".right-btn");
const LB = document.querySelector(".left-btn");

let cur_slide = 0;
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

function Move_Slide(cur_slide) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - cur_slide) * 100}%)`;
  });
}

RB.addEventListener("click", () => {
  if (cur_slide === slides.length - 1) {
    cur_slide = 0;
    Move_Slide(cur_slide);
  } else {
    cur_slide++;
    Move_Slide(cur_slide);
  }
});
LB.addEventListener("click", () => {
  if (cur_slide === 0) {
    cur_slide = slides.length - 1;
    Move_Slide(cur_slide);
  } else {
    cur_slide--;
    Move_Slide(cur_slide);
  }
});
