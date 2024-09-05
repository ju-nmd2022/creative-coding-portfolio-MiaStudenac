//inspired by Garrits example on pure perlin nose
//changed noise value, color randomizer and shapes

let noiseOffsetX = 0;
let noiseOffsetY = 1000;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop(); // Stop the draw loop initially
}

function draw() {
  background(0);
  noStroke();
  const divider = 30;

  for (let x = 0; x < innerWidth; x += 10) {
    for (let y = 0; y < innerHeight; y += 10) {
      const noiseValueX = noise(noiseOffsetX + x / divider);
      const noiseValueY = noise(noiseOffsetY + y / divider);

      // Calculate color values with time-based wave effect
      const r = map(
        sin((frameCount * 0.01 + noiseValueX * 10) * TWO_PI),
        -1,
        1,
        50,
        200
      );
      const g = map(
        sin((frameCount * 0.01 + noiseValueY * 10) * TWO_PI),
        -1,
        1,
        100,
        255
      );
      const b = map(
        sin((frameCount * 0.09 + (noiseValueX + noiseValueY) * 10) * TWO_PI),
        -1,
        1,
        150,
        200
      );

      fill(r, g, b);

      const size = map(noiseValueX, 0, 1, 15, 30);
      const offsetX = map(noiseValueX, 0, 1, -size / 2, size / 2);
      const offsetY = map(noiseValueY, 0, 1, -size / 2, size / 2);

      rect(x + offsetX, y + offsetY, size, size);
    }
  }

  noiseOffsetX += 0.001;
  noiseOffsetY += 0.001;

  // Use requestAnimationFrame to continuously redraw the canvas
  requestAnimationFrame(draw);
}
