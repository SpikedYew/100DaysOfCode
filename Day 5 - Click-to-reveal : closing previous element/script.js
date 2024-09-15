
const btnShows = document.querySelectorAll('.expand');

btnShows.forEach((btnShow) => {
    const addClass = btnShow.closest('.info-box').nextElementSibling;
    const arrow = btnShow.querySelector('.arrow');

//check value of arrow rotation
    function getRotationValue() {
        return window.getComputedStyle(arrow).getPropertyValue('transform');
    }

    // setting arrow rotation basic value
    arrow.style.transform = 'rotate(45deg)';

    btnShow.addEventListener('click', function() {
        // closes every opened sesion
        document.querySelectorAll('.info-box-show.slide').forEach((openBox) => {
            openBox.classList.remove('slide');
            const openArrow = openBox.previousElementSibling.querySelector('.arrow');
            openArrow.style.transform = 'rotate(45deg)';
        });

        // if clicked element wasnt opened, open it 
        if (getRotationValue() === 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)') {
            addClass.classList.add('slide');
            arrow.style.transform = 'rotate(225deg)';
        }
    });
});
