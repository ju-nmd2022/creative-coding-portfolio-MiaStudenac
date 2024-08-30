//heavily inspired by the famous pattern from The Matrix movie
//partially inspired by Vera Molnars line artwork
//used chatGPT for help with logics

//variation four: horizontal lines with random x positions overlap with vertical white lines which also overlap with each other

let gap = 10; // gap between the numbers
let minLineLength = 3; // min length of a line
let maxLineLength = 60; // max length of a line
let numLines = 60; // number of horizontal lines
let numVerticalLines = 40; // number of vertical lines
let fontSize = 10;
let lineSpacing = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0); // Black background
  textAlign(CENTER, CENTER);
  textSize(fontSize);
  noLoop();
}

// generate horizontal lines that are not overlapping
// set X position for each line and random line length
function draw() {
  for (let i = 0; i < numLines; i++) {
    let startY = i * lineSpacing; // position each line with reduced spacing
    if (startY < height) {
      let startX = random(width);
      let lineLength = floor(random(minLineLength, maxLineLength + 1));
      drawHorizontalLine(startX, startY, lineLength);
    }
  }

  // generate vertical lines which are overlapping and white color
  // set random X position and random line length
  for (let i = 0; i < numVerticalLines; i++) {
    let startX = random(width);
    let lineLength = floor(random(minLineLength, maxLineLength + 1));
    drawVerticalLine(startX, lineLength);
  }
}

// draw a horizontal line starting from startX
function drawHorizontalLine(startX, y, length) {
  for (let i = 0; i < length; i++) {
    let numX = startX + i * gap;
    if (numX < width) {
      drawNumber(numX, y, color(0, 255, 0)); // green color for horizontal lines
    }
  }
}

// draw a vertical line starting from top of the canvas
function drawVerticalLine(x, length) {
  for (let i = 0; i < length; i++) {
    let numY = i * gap;
    if (numY < height) {
      drawNumber(x, numY, color(255, 255, 255)); // white color for vertical lines
    }
  }
}

function drawNumber(x, y, c) {
  fill(c); // set fill color based on the passed color
  text(floor(random(1, 10)), x, y); // draw the number at the specified position
}
