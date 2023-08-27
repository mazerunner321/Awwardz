const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Mouse Circle
function circleMouseFollower() {
  window.addEventListener("mousemove", function (info) {
    // console.log(info.clientX, info.clientY);
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${info.clientX}px, ${info.clientY}px)`;
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
