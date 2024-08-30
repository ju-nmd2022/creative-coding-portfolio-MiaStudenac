//code inspired by Garrits grid example
//some ideas from Georg Nees' artwork with squares

const size = 35;
const gap = 1;
const amount = 16;

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
      const strokeWeightValue = random(0.6, 6); // Random stroke weight between 1 and 5
      strokeWeight(strokeWeightValue);

      noFill();
      square(x * s, y * s, s);
      pop();
    }
  }
  pop();
}

function draw() {
  background(255, 255, 255);

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
