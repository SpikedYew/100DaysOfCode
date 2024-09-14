//scroll trigger


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    const entries = document.querySelectorAll('.entry');

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px", () => {

        entries.forEach(entry => {
            let containerLeft = entry.querySelector('.container-left');
            let containerRight = entry.querySelector('.container-right');
    
            gsap.set(containerLeft, {
                yPercent: 100,
                opacity: 0
            })
            gsap.set(containerRight, {
                xPercent: 100,
                opacity:0
            })
            gsap.to(containerLeft, {
                scrollTrigger: {
                    trigger: entry,
                    start: 'top center',
                    end: 'bottom 90%',
                    //markers: true, //show markers on web
                    scrub: true //ties progres of animation to cursor
                },
                yPercent: 0,
                opacity: 1
            })
            gsap.to(containerRight, {
                scrollTrigger: {
                    trigger: entry,
                    start: 'top center',
                    end: 'bottom 90%',
                    // markers: true,
                    scrub: true //ties progres of animation to cursor
                },
                xPercent: 0,
                opacity: 1
            })
    
        })
        mm.add("(max-width: 799px)", () => {
            
            entries.forEach(entry => {
                let containerLeft = entry.querySelector('.container-left');
                let containerRight = entry.querySelector('.container-right');
        
                gsap.set(containerLeft, {
                    xPercent: -100,
                    opacity: 0
                })
                gsap.set(containerRight, {
                    xPercent: 100,
                    opacity:0
                })
                gsap.to(containerLeft, {
                    scrollTrigger: {
                        trigger: entry,
                        start: 'top bottom',
                        end: 'bottom 90%',
                        //markers: true, //show markers on web
                        scrub: true //ties progres of animation to cursor
                    },
                    xPercent: 0,
                    opacity: 1
                })
                gsap.to(containerRight, {
                    scrollTrigger: {
                        trigger: entry,
                        start: 'top center',
                        end: 'bottom 90%',
                        //markers: true,
                        scrub: true //ties progres of animation to cursor
                    },
                    xPercent: 0,
                    opacity: 1
                })
          });


    });


   });
   });





//cookies button
const cookies = document.querySelector('.cookies');
const cookiesBox = document.querySelector('.cookies-box');

//This function scroll 100vh down - it is used in button as onclick="scrollDOwn();"
function scrollDown() {
    window.scroll(0, window.scrollY + window.innerHeight);
} 


cookies.addEventListener('click', () => {
    
    cookiesBox.classList.toggle('hidden');
})

//lenis GSAP
// Function to detect if the browser is Safari then lenis is played
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  
  if (!isSafari()) {
    console.log('This is not Safari, code runs.');
  
    const lenis = new Lenis();
  
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  
    lenis.on('scroll', ScrollTrigger.update);
  
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  
    gsap.ticker.lagSmoothing(0);
  
  } else {
    // Code for Safari or if you want to disable it entirely
    console.log('This is Safari, code is disabled.');
  };
  