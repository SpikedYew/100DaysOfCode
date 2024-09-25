gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

gsap.defaults({ease: "none"});

const circlePulses = gsap.timeline({
    defaults: {
        scale:1.5,
        autoAlpha:1, //adds visibility of balls
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
    }
})
.to(".ball02, .text01", {}, 0.84)
.to(".ball03, .text02", {}, 1.36)
.to(".ball04, .text03", {}, 1.92)

const main = gsap.timeline({
    scrollTrigger: {
        trigger:"#svg",
        scrub: true,
        start:"top center",
        end: "bottom center"
    }
})
.to(".ball01", {autoAlpha:1, duration:0.05})
.from(".theLine", {drawSVG:0, duration:4}, 0)
.to(".ball01", {motionPath:{path:".theLine", align:".theLine", alignOrigin:[0.5, 0.5]/*offerts the position of circle*/}, duration:4}, 0) //the ball is not attached to path, path is applied to position of ball
.add(circlePulses, 0)

//triggering ball to expand when line touches it 