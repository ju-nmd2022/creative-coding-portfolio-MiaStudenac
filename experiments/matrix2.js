//heavily inspired by the famous pattern from The Matrix movie
//partially inspired by Vera Molnars line artwork
//used chatGPT for help with logics

//variation two: numbers lined in a grid form, random overlapping, white numbers "falling out"

let gap = 30; // gap between the numbers
let lineProbability = 0.5; // probability that numbers will appear in a line
let coverageFactor = 0.7; // percentage of the canvas that would be covered by the grid

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  noLoop();
}

// setting random start position for the grid
// end position is based on coverage factor
function draw() {
  let startX = random(0, width * (1 - coverageFactor));
  let startY = random(0, height * (1 - coverageFactor));
  let endX = startX + width * coverageFactor;
  let endY = startY + height * coverageFactor;

  for (let x = startX; x < endX; x += gap) {
    for (let y = startY; y < endY; y += gap) {
      if (random(1) < lineProbability) {
        drawDiagonalLineOfNumbers(x, y);
      } else {
        drawRotatedRandomNumber(x, y);
      }
    }
  }
}

// setting random line length between 3 and 8 characters
function drawDiagonalLineOfNumbers(x, y) {
  let length = floor(random(3, 8));

  for (let i = 0; i < length; i++) {
    let numX = x + i * gap;
    let numY = y + i * gap;
    if (numX < width && numY < height) {
      drawNumber(numX, numY, false); // numbers which are not rotated, default is green color
    }
  }
}

function drawRotatedRandomNumber(x, y) {
  push();
  translate(x + random(-gap / 2, gap / 2), y + random(-gap / 2, gap / 2));
  rotate(random(-PI / 8, PI / 8)); // rotate number
  drawNumber(0, 0, true); // numbers which are rotated, white color
  pop();
}

function drawNumber(x, y, isRotated) {
  let num = floor(random(0, 10));
  if (isRotated) {
    fill(255); // white color if number rotates
  } else {
    fill(0, 255, 0); // green color if number doesn't rotate
  }
  text(num, x, y);
}
