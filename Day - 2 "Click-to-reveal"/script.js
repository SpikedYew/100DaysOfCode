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

"use strict";

const btnShow = document.querySelector('.expand');
const addClass = document.querySelector('.info-box-show');
const arrow = document.querySelector('.down');

// Funkcja do sprawdzenia aktualnej rotacji strzałki
function getRotationValue() {
    return window.getComputedStyle(arrow).getPropertyValue('transform');
}


// Ustawienie początkowej rotacji
arrow.style.transform = 'rotate(45deg)';

btnShow.addEventListener('click', function() {
    if (getRotationValue() === 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)') { // Odpowiada 'rotate(45deg)'
        addClass.classList.add('slide');
        arrow.style.transform = 'rotate(225deg)';
    } else {
        addClass.classList.remove('slide');
        arrow.style.transform = 'rotate(45deg)';
    }
});
