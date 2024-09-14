const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const blokMove = document.querySelector('.contain');
const dotUnderGal = document.querySelectorAll('#one');
    let x = 0;
btnLeft.addEventListener('click', () => {
    x += 300;
    x >= 600 ? x = -600 : console.log(x);
    blokMove.style.transform = `translateX( ${x}px)`;
});
btnRight.addEventListener('click', () => {
    x -= 300;
    x <= -900 ? x = 300 : console.log(x);
    blokMove.style.transform = `translateX( ${x}px)`;
});


//gallery circles under



