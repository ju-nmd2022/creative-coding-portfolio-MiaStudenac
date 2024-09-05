function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  noFill();
  stroke(0);

  let numSquares = 600;
  for (let i = 0; i < numSquares; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(5, 30);

    rect(x, y, size, size);
  }
}
