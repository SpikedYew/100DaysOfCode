const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const blokMove = document.querySelector('.contain-galeria');
const dotUnderGal = document.querySelectorAll('#one');
    let x = 0;
btnLeft.addEventListener('click', () => {
    x += 30;
    x >= 60 ? x = -60 : console.log(x);
    blokMove.style.transform = `translateX( ${x}vw)`;
});
btnRight.addEventListener('click', () => {
    x -= 30;
    x <= -90 ? x = 30 : console.log(x);
    blokMove.style.transform = `translateX( ${x}vw)`;
});


//gallery circles under



