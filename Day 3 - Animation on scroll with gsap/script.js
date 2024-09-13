//scroll trigger
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    const entries = document.querySelectorAll('.entry');

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
                start: 'top center',
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
                // markers: true,
                scrub: true //ties progres of animation to cursor
            },
            xPercent: 0,
            opacity: 1
        })

    })

   });





//cookies button
const cookies = document.querySelector('.cookies');
const cookiesBox = document.querySelector('.cookies-box');
console.log(cookies.style)
cookies.addEventListener('click', () => {
    cookiesBox.classList.toggle('hidden');
})

//lenis GSAP

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e);
})

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
})

gsap.ticker.lagSmoothing(0);