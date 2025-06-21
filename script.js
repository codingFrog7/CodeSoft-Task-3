
let Loader = document.getElementById("#loader-wrapper");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    Loader.style.display = "none";
  }, 3000);
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    
    ScrambleTextPlugin,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
    TextPlugin,
    Draggable,
    
  );
});
let smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 2,

  effects: true,
});

gsap.set("h1", { opacity: 1 });

let split_hero = SplitText.create("#hero-left", { type: "chars" });
let hero = gsap.timeline();

hero.from(split_hero.chars, {
  y: 70,
  autoAlpha: 0,
  stagger: 0.1,
  ease: "elastic.out(1.2,0.3)",
  duration: 5,
  repeat: -1,
});

let tl = gsap.timeline();
tl.from("#header", {
  y: -100,
  autoAlpha: 0,
  duration: 3,
  ease: "elastic.out(1.2,0.3)",
});
gsap.from("#hero-right", {
  x: -100,
  autoAlpha: 0,
  duration: 3,
  ease: "elastic.out(1.2,0.3)",
});
gsap.from("#hero-left", {
  x: 100,
  autoAlpha: 0,
  duration: 3,
  ease: "elastic.out(1.2,0.3)",
});

gsap.from(".card", {
  y: -100,
  opacity:0,
stagger:2,
  yoyo: true,
  duration: 5,
  ease: "elastic.out(1.2,0.3)",
  scrollTrigger: {
    trigger: "#hero3",
    start: "top 60%",
    end: "top 10%",
    scrub: 1,
   
  },
});
gsap.from(".ui-card", {
  y: -30,
  stagger: 0.5,
  speed: 0.1,
  yoyo: true,
  duration: 2,
  repeate: -1,
  ease: "elastic.out(1.2,0.3)",
  scrollTrigger: {
    trigger: "#hero2",
    start: "top 80%",
    end: "top 20%",
    
  },
});

let main = document.querySelector("#wrapper");
let cursor = document.querySelector("#cursor");
main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.1,
    ease: "power1.out",
  });
});
let timg = gsap.timeline();
timg.to("#hero-right img", {
  rotation: 20,

  scale: 1,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  duration: 1,
});
Draggable.create("#logo", {
  type: "rotation",
  bounds: "#wrapper",
  inertia: true,
});
Draggable.create("#mode", {
  type: "rotation",
  bounds: "#wrapper",
  inertia: true,
});
Draggable.create("#maincon", {
  type: "x",
  bounds: "#wrapper",
  inertia: true,
});

Draggable.create(".title", {
  type: "x",
  bounds: "#wrapper",
  inertia: true,
});

const modeButton = document.querySelector("#mode button");
const modeIcon = modeButton.querySelector("i");
modeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeIcon.classList.remove("ri-moon-line");
    modeIcon.classList.add("ri-sun-line");
  } else {
    modeIcon.classList.remove("ri-sun-line");
    modeIcon.classList.add("ri-moon-line");
  }
});






