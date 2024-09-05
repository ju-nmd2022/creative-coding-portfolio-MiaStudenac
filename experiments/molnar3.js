const squares = 6;
const size = 90;
const colors = [color(225, 40, 100), color(0, 25, 93), color(82, 63, 155)];

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function drawSquares() {
  for (let i = 0; i < 50; i++) {
    for (let y = 0; y < squares; y++) {
      for (let x = 0; x < squares; x++) {
        push();
        translate(width / 14 + x * size, height / 14 + y * size);
        noFill();

        let numLines = int(random(2, 6));
        for (let j = 0; j < numLines; j++) {
          stroke(random(colors));
          strokeWeight(2);
          line(
            random(-size / 2, size / 2),
            random(-size / 2, size / 2),
            random(-size / 2, size / 2),
            random(-size / 2, size / 2)
          );
        }
        pop();
      }
    }
  }
}

function draw() {
  background(255);
  noLoop();
  drawSquares();
}
