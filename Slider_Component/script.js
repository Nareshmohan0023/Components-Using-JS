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
  if (cur_slide >= slides.length - 1) {
    cur_slide = 0;
    Move_Slide(cur_slide);
    dotChanger();
  } else {
    cur_slide++;
    Move_Slide(cur_slide);
    dotChanger();
  }
});
LB.addEventListener("click", () => {
  if (cur_slide === 0) {
    cur_slide = slides.length - 1;
    Move_Slide(cur_slide);
    dotChanger();
  } else {
    cur_slide--;
    Move_Slide(cur_slide);
    dotChanger();
  }
});

const dots = document.querySelector(".F_Dots");
console.log(dots);
console.log("hello");

dots.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const { index } = e.target.dataset;
    cur_slide = index;
    Move_Slide(cur_slide);
    dotChanger();
  }
});

// function dotClicker(index) {
//   cur_slide = index;
//   Move_Slide(cur_slide);
//   dotChanger();
// }

function dotChanger() {
  let allbtns = document.querySelectorAll(".btn");
  console.log(allbtns);

  for (let i = 0; i <= allbtns.length - 1; i++) {
    if (i == cur_slide) {
      allbtns[i].style.background = "red";
    } else {
      allbtns[i].style.background = "gray";
    }
  }
}

dotChanger();
