//inspired by Garrits example on pure perlin nose

let noiseOffsetX = 0;
let noiseOffsetY = 1000;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(0);
  noStroke();
  const divider = 30;

  for (let x = 0; x < innerWidth; x += 10) {
    // increase step size
    for (let y = 0; y < innerHeight; y += 10) {
      // increase step size
      const noiseValueX = noise(noiseOffsetX + x / divider);
      const noiseValueY = noise(noiseOffsetY + y / divider);
      const r = map(noiseValueX, 0, 1, 50, 200);
      const g = map(noiseValueY, 0, 1, 100, 255);
      const b = map(noiseValueX, 0, 1, 150, 200);

      fill(r, g, b);

      const size = map(noiseValueX, 0, 1, 15, 30); // adjust size range for larger shapes
      const offsetX = map(noiseValueX, 0, 1, -size / 2, size / 2); // use noise to create movement
      const offsetY = map(noiseValueY, 0, 1, -size / 2, size / 2); // use noise to create movement

      rect(x + offsetX, y + offsetY, size, size);
    }
  }

  noiseOffsetX += 0.01;
  noiseOffsetY += 0.01;
}
