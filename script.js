let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let currentColor = document.querySelector("h3");
let body = document.querySelector("body");
let button = document.querySelector("button");

function setColor(col1, col2) {
  body.style.background =
    "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
  currentColor.textContent = body.style.background + ";";
}

color1.addEventListener("input", setColor.bind(this, color1, color2));
color2.addEventListener("input", setColor.bind(this, color1, color2));

function randomizeColors() {
  let col1 = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  let col2 = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

  if (col1.length < 7 || col2.length < 7) randomizeColors();
  color1.value = col1;
  color2.value = col2;
  setColor(color1, color2);
}

button.addEventListener("click", randomizeColors);

setColor(color1, color2);
