

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!

    let svg = document.querySelector("svg");
    let path = svg.querySelector('path');

    //measure the length of path

    const pathLength = path.getTotalLength();

    console.log(pathLength);

    gsap.set(path, {strokeDasharray: pathLength});

    gsap.fromTo(
        path,
        {
            strokeDashoffset:pathLength,
        },
        {
            strokeDashoffset: 0,
            duration: 10,
            ease: "none",
            scrollTrigger: {
                trigger: ".svg-container",
                start: "top bottom",
                end: "bottom bottom", //at this point it is being drawn
                scrub: 1, //scrub makes it react to user scroll behavior
                // markers: true,
            },
        }
         )
    
   });

   $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  const btnActive = document.getElementById('btn');
  const showMenu = document.querySelector('button');
  const textShow = document.querySelector('.menu');
  btnActive.addEventListener('click', () => {
    showMenu.classList.toggle('btn-active');
    textShow.classList.toggle('hidden');
  });
