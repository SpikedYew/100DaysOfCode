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
const btnShows = document.querySelectorAll(".expand");

btnShows.forEach((btnShow) => {
  const addClass = btnShow.closest(".info-box").nextElementSibling;
  const arrow = btnShow.querySelector(".arrow");

  // Funkcja do sprawdzenia aktualnej rotacji strzałki
  function getRotationValue() {
    return window.getComputedStyle(arrow).getPropertyValue("transform");
  }

  // Ustawienie początkowej rotacji
  arrow.style.transform = "rotate(45deg)";

  btnShow.addEventListener("click", function () {
    // Zamknij wszystkie otwarte sekcje
    document.querySelectorAll(".info-box-show.slide").forEach((openBox) => {
      openBox.classList.remove("slide");
      const openArrow = openBox.previousElementSibling.querySelector(".arrow");
      openArrow.style.transform = "rotate(45deg)";
    });

    // Jeśli kliknięty element nie był otwarty, otwórz go
    if (
      getRotationValue() ===
      "matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)"
    ) {
      addClass.classList.add("slide");
      arrow.style.transform = "rotate(225deg)";
    }
  });
});

// Rotacja grey :)
const btnShows2 = document.querySelectorAll(".expand-grey");

btnShows2.forEach((btnShow) => {
  const addClass = btnShow.closest(".info-box-grey").nextElementSibling;
  const arrow = btnShow.querySelector(".arrow-grey");

  // Funkcja do sprawdzenia aktualnej rotacji strzałki
  function getRotationValue() {
    return window.getComputedStyle(arrow).getPropertyValue("transform");
  }

  // Ustawienie początkowej rotacji
  arrow.style.transform = "rotate(45deg)";

  btnShow.addEventListener("click", function () {
    // Zamknij wszystkie otwarte sekcje
    document
      .querySelectorAll(".info-box-grey-show.slide-grey")
      .forEach((openBox) => {
        openBox.classList.remove("slide-grey");
        const openArrow =
          openBox.previousElementSibling.querySelector(".arrow-grey");
        openArrow.style.transform = "rotate(45deg)";
      });

    // Jeśli kliknięty element nie był otwarty, otwórz go
    if (
      getRotationValue() ===
      "matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)"
    ) {
      addClass.classList.add("slide-grey");
      arrow.style.transform = "rotate(225deg)";
    }
  });
});
function screenChangeText() {
  const zawTel = document.getElementById("zaw");
  if (window.matchMedia("(min-width: 768px)").matches) {
    console.log("Its ok");
  } else {
    zawTel.innerHTML =
      'Cześć! Nazywam się Paweł Glosz i założyłem tę firmę, by dzielić się swoją pasją oraz pomagać artystom na wielu płaszczyznach w tej ciężkiej, lecz fascynującej branży.<span class="break"> Jeśli potrzebujesz miejsca, w którym nagrasz swoją twórczość, otrzymasz wysokiej klasy obróbkę dźwięku, będziesz mógł zasięgnąć rady, a nawet rozpocząć swoją przygodę w świecie muzyki, to trafiłeś we właściwe miejsce. Zapraszam serdecznie do zapoznania się z ofertą MFC Studio!</span>';
  }
}
screenChangeText();
