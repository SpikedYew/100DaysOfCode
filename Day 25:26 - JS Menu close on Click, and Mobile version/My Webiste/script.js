// use a script tag or an external JS file
x = window.matchMedia("");
document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!

  let svg = document.querySelector("svg");
  let path = svg.querySelector("path");

  //measure the length of path

  const pathLength = path.getTotalLength();

  console.log(pathLength);

  gsap.set(path, { strokeDasharray: pathLength });

  gsap.fromTo(
    path,
    {
      strokeDashoffset: pathLength,
    },
    {
      strokeDashoffset: 0,
      duration: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".svg-container",
        start: "top bottom",
        // markers: true,
        end: "bottom bottom", //at this point it is being drawn
        scrub: 1, //scrub makes it react to user scroll behavior
        // markers: true,
      },
    }
  );
});

//  $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){

//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

const windowHeight = window;
console.log(window);

const boxes = document.querySelectorAll(".card");

//listen to event, happend when scrolled, when scroll happpens it fires checkBoxes function
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  // Height of our current window
  //console.log(window.innerHeight);
  // We can devide it by 5 then multipy by 4 so we get a marker at 20% from the bottom of the page, and at that height the box will appear
  //console.log(window.innerHeight / 5 * 4);

  const triggerBottom = (window.innerHeight / 5) * 4;
  //const triggerTop = window.innerHeight / 5 * 4.5; this is for testing -> you can decide when the box disappears

  //i put x because we can put whatever we want into here
  boxes.forEach((x) => {
    const boxTop = x.getBoundingClientRect().top;
    //getBoundingClientRect() gives info about and disposition of the port
    //By adding .top we get data from top of the view port

    if (boxTop < triggerBottom) {
      x.classList.add("show");
    } else {
      x.classList.remove("show");
    }
    //This line is for triggerTop testing
    // } else if (boxTop > triggerTop){
    //      x.classList.remove('show');
    // }
  });
}

const btnActive = document.getElementById("btn");
const showMenu = document.querySelector("button");
const textShow = document.querySelector(".menu");
btnActive.addEventListener("click", () => {
  showMenu.classList.toggle("btn-active");
  textShow.classList.toggle("hidden");
});

const menuBtnClose = document.querySelectorAll("#close-onclick");

menuBtnClose.forEach((item) => {
  item.addEventListener("click", () => {
    showMenu.classList.toggle("btn-active");
    textShow.classList.toggle("hidden");
  });
});
// menuBtnClose.addEventListener("click", () => {
//   console.log("Siema");
//   showMenu.classList.remove("btn-active");
//   textShow.classList.remove("hidden");
// });
