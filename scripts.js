const colorButton = document.getElementById("color-button");
const rainbowButton = document.getElementById("rainbow-button");
const greyscaleButton = document.getElementById("greyscale-button");
const eraserButton = document.getElementById("eraser-button");
const clearButton = document.getElementById("clear-button");
const sizeButton = document.getElementById("size-button");
const grid = document.getElementById("grid");

// let currentColor = 0x144444;
// let currentMode = colorMode;
// let currentSize = sizeMode;

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

// BASIC TOGGLE TO IMPLEMENT - replace classes and names to suit ⬇️
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
