const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
const blokMove = document.querySelector(".contain-galeria");
const dotUnderGal = document.querySelectorAll("#one");

let x = 0;

function handleScreenSizeChange() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    // Code for screen sizes wider than 758px
    btnLeft.addEventListener("click", () => {
      x += 60;
      x >= 120 ? (x = -120) : console.log(x);
      blokMove.style.transform = `translateX( ${x}vw)`;
    });
    btnRight.addEventListener("click", () => {
      x -= 60;
      x <= -180 ? (x = 60) : console.log(x);
      blokMove.style.transform = `translateX( ${x}vw)`;
    });
    // Your code for wider screens
  } else {
    // Code for screen sizes less than 758px

    // Your code for smaller screens
    btnLeft.addEventListener("click", () => {
      x += 80;
      x >= 160 ? (x = -160) : console.log(x);
      blokMove.style.transform = `translateX( ${x}vw)`;
    });
    btnRight.addEventListener("click", () => {
      x -= 80;
      x <= -240 ? (x = 80) : console.log(x);
      blokMove.style.transform = `translateX( ${x}vw)`;
    });
  }
}

handleScreenSizeChange();

window.addEventListener("resize", handleScreenSizeChange);

//gallery circles under
