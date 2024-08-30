//code inspired by Garrits grid example
//some ideas from Georg Nees' artwork with squares

const size = 35;
const gap = 1;
const amount = 16;

const colors = [
  color(255, 255, 255),
  color(0, 0, 0),
  color(128, 128, 128),
  color(169, 169, 169),
  color(192, 192, 192),
];

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function drawElement() {
  push();
  const fields = 2;
  const s = size / fields;
  for (let x = 0; x < fields; x++) {
    for (let y = 0; y < fields; y++) {
      push();
      noStroke();
      const randomColor = random(colors);
      fill(randomColor);
      square(x * s, y * s, s);
      pop();
    }
  }
  pop();
}

function draw() {
  background(255, 255, 255);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(1);

  const centerX = (width - size) / 2;
  const centerY = (height - size) / 2;
  for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
    for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
      let xPosition = centerX + x * (size + gap);
      let yPosition = centerY + y * (size + gap);
      if (amount % 2 === 0) {
        xPosition += size / 2;
      }
      push();
      translate(xPosition, yPosition);
      drawElement();
      pop();
    }
  }

  noLoop();
}
