//inspired by Garrits example on pure perlin nose

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  noiseSeed(0);
  noStroke();
  const divider = 100;

  for (let x = 0; x < innerWidth; x++) {
    for (let y = 0; y < innerHeight; y++) {
      const noiseValue = noise(x / divider, y / divider);
      const r = map(noiseValue, 0, 1, 100, 255);
      const g = map(noiseValue, 0, 1, 50, 200);
      const b = map(noiseValue, 0, 1, 150, 255);

      fill(r, g, b);

      if (random() < 0.5) {
        rect(x, y, 1, 1);
      } else {
        ellipse(x + 0.5, y + 0.5, 1);
      }
    }
  }

  noLoop();
}
