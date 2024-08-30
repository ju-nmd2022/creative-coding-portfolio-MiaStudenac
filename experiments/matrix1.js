//heavily inspired by the famous pattern from The Matrix movie
//partially inspired by Vera Molnars line artwork
//used chatGPT for help with logics

//variation one: numbers falling down vertical lines, random length and x position and overlapping

let gap = 10; // gap between the numbers
let minLineLength = 3; // min length of a line
let maxLineLength = 60; // max length of a line
let numLines = 120; // num of lines to draw
let fontSize = 10;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0); //
  textAlign(CENTER, CENTER);
  textSize(fontSize);
  fill(0, 255, 0);
  noLoop();
}

// generate vertical lines that are overlapping
// set random X position and random line length

function draw() {
  for (let i = 0; i < numLines; i++) {
    let startX = random(width);
    let lineLength = floor(random(minLineLength, maxLineLength + 1));
    drawVerticalLine(startX, lineLength);
  }
}

// let all lines start from the top of the canvas
function drawVerticalLine(x, length) {
  let startY = 0;

  for (let i = 0; i < length; i++) {
    let numY = startY + i * gap;
    if (numY < height) {
      drawNumber(x, numY);
    }
  }
}

// generating a random number between 1 and 10
function drawNumber(x, y) {
  let num = floor(random(1, 10));
  text(num, x, y);
}
