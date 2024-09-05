const squares = 6;
const size = 90;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function drawSquares() {
  let colors = [color(0, 0, 0)];
  const squareColors = [];
  for (let sc = 0; sc < squares * squares; sc++) {
    squareColors.push(random(colors));
  }

  for (let i = 0; i < 10; i++) {
    let s = 0;
    for (let y = 0; y < squares; y++) {
      for (let x = 0; x < squares; x++) {
        push();
        translate(width / 14 + x * size, height / 14 + y * size);
        stroke(squareColors[s]);
        strokeWeight(2);
        let numLines = int(random(2, 6));
        for (let j = 0; j < numLines; j++) {
          line(
            random(-size / 2, size / 2),
            random(-size / 2, size / 2),
            random(-size / 2, size / 2),
            random(-size / 2, size / 2)
          );
        }
        pop();
        s++;
      }
    }
  }
}

function draw() {
  background(255);
  noLoop();
  noFill();
  colorMode(RGB);
  drawSquares();
}
