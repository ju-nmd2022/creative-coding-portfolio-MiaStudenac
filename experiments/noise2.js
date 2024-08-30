//inspired by Garrits example on pure perlin nose
//changed noise value, color randomizer and shapes

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  noiseSeed(0);
  noStroke();
  const divider = 10;

  for (let x = 0; x < innerWidth; x++) {
    for (let y = 0; y < innerHeight; y++) {
      const noiseValue = noise(x / divider, y / divider);
      const r = map(noiseValue, 0, 1, 50, 200); // Color ranges adjusted
      const g = map(noiseValue, 0, 1, 100, 255);
      const b = map(noiseValue, 0, 1, 150, 200);

      fill(r, g, b);

      const size = map(noiseValue, 0, 1, 5, 15);
      const offsetX = random(-2, 2);
      const offsetY = random(-2, 2);

      rect(x + offsetX, y + offsetY, size, size);
    }
  }

  noLoop();
}
