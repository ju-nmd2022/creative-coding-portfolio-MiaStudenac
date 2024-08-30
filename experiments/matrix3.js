//heavily inspired by the famous pattern from The Matrix movie
//partially inspired by Vera Molnars line artwork
//used chatGPT for help with logics

//variation three: updated first variation, added opacity drop down the lines, white numbers "falling out" of the matrix

let gap = 10; // gap between the numbers
let minLineLength = 3; // min length of a line
let maxLineLength = 60; // max length of a line
let numLines = 120; // num of lines to draw
let fontSize = 10;
let numWhiteRandoms = 100; // increased number of random white numbers to be drawn

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  textAlign(CENTER, CENTER);
  textSize(fontSize);
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

  // generate more frequent random white numbers which rotate
  for (let i = 0; i < numWhiteRandoms; i++) {
    let x = random(width);
    let y = random(height);
    let rotation = random(TWO_PI); // random rotation
    drawRandomWhiteNumber(x, y, rotation);
  }
}

// let all lines start from the top of the canvas
function drawVerticalLine(x, length) {
  let startY = 0;

  for (let i = 0; i < length; i++) {
    let numY = startY + i * gap;
    if (numY < height) {
      // calculate opacity based on the vertical position
      let opacity = map(numY, 0, height, 255, 77); // color fade from 255 (100%) to 77 (30%)
      drawNumber(x, numY, opacity); // draw with opacity only, white numbers stay at 100% opacity
    }
  }
}

// generating a random number between 1 and 10
function drawNumber(x, y, opacity) {
  let num = floor(random(1, 10));
  fill(0, 255, 0, opacity); // green color with opacity
  text(num, x, y);
}

function drawRandomWhiteNumber(x, y, rotation) {
  push(); // save the current drawing state
  translate(x, y);
  rotate(rotation);
  fill(255, 255, 255, 255); // white color with full opacity
  text(floor(random(1, 10)), 0, 0);
  pop(); // restore the previous drawing state
}
