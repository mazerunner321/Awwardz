//Locomotive Scroll:
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//To make circle skew according to movement:
function circleSkew() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (details) {
    var xdiff = details.clientX - xprev;
    var ydiff = details.clientY - yprev;

    xprev = details.clientX;
    yprev = details.clientY;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    circleMouseFollower(xscale, yscale);
  });
}
circleSkew();

// Mouse Circle
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (info) {
    // console.log(info.clientX, info.clientY);
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${info.clientX}px, ${info.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleMouseFollower();

// GSAP:
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 3,
      delay: -2,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 2,
      delay: -1.75,
      ease: Expo.easeInOut,
    });
}
firstPageAnim();

//Image
document.querySelectorAll(".elem").forEach((elem) => {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration: 0.5,
      ease: Power3,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    // console.log(elem.getBoundingClientRect());
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    });
  });
});
