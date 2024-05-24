const x = document.querySelectorAll(".nameCard");

let keyframes = [
  { opacity: 0 },
  { opacity: 0.5 },
  { opacity: 1, transform: "translate(0,-100px)" },
  { opacity: 0.8, transform: "translate(0)" },
];
let options = {
  delay: 300,
  duration: 2000,
  easing: "ease-in",
  iterations: Infinity,
  fill: "forwards",
};

let afKeyframes = [{ opacity: 1, transform: "translate(0)" }];
let afOptions = {
  delay: 1000,
  iterations: Infinity,
  fill: "forwards",
};

x.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    e.style.border = `3px solid yellow`;
    e.style.dropShadow = "0 8px 4px 0";
    e.animate(keyframes, options);
  });

  e.addEventListener("mouseout", function () {
    e.style.border = `0`;
    e.style.dropShadow = "0 0 0 0";
    e.animate(afKeyframes, afOptions);
  });
});

const container = document.getElementsByClassName("container");
// console.log(container);
// const divArray = document.querySelectorAll("div");
// divArray.forEach((div) => console.log(div));
x.forEach((card) => card.addEventListener("click", () => console.log(card)));
