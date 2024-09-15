// "use strict";

// const btnShow = document.querySelector('.expand');
// const btnClose = document.querySelector('body');
// const addClass = document.querySelector('.info-box-show');
// let arrowRotate = document.querySelector('.down').style.transform = 'rotate(45deg)';

// // btnShow.addEventListener('click', function() {
// //     addClass.classList.add('slide');
// //     arrowRotate.style.transform = 'rotate(225deg)';

// //     btnShow.addEventListener('click', function() {
// //         addClass.classList.remove('slide');
// //         arrowRotate.style.transform = 'rotate(45deg)';
// //     })
// // })

// if (arrowRotate == 'rotate(45deg)') {
//     btnShow.addEventListener('click', function() {
//         addClass.classList.add('slide');
//         arrowRotate = 'rotate(225deg)';
//     })
// } else {
//     btnShow.addEventListener('click', function() {
//         addClass.classList.remove('slide');
//         arrowRotate = 'rotate(45deg)';
//     })
// }
const btnShows = document.querySelectorAll('.expand');

btnShows.forEach((btnShow) => {
    const addClass = btnShow.closest('.info-box').nextElementSibling;
    const arrow = btnShow.querySelector('.arrow');

    // Funkcja do sprawdzenia aktualnej rotacji strzałki
    function getRotationValue() {
        return window.getComputedStyle(arrow).getPropertyValue('transform');
    }

    // Ustawienie początkowej rotacji
    arrow.style.transform = 'rotate(45deg)';

    btnShow.addEventListener('click', function() {
        // Zamknij wszystkie otwarte sekcje
        document.querySelectorAll('.info-box-show.slide').forEach((openBox) => {
            openBox.classList.remove('slide');
            const openArrow = openBox.previousElementSibling.querySelector('.arrow');
            openArrow.style.transform = 'rotate(45deg)';
        });

        // Jeśli kliknięty element nie był otwarty, otwórz go
        if (getRotationValue() === 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)') {
            addClass.classList.add('slide');
            arrow.style.transform = 'rotate(225deg)';
        }
    });
});
