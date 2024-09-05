function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);

  let numShapes = 600;
  for (let i = 0; i < numShapes; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(5, 30);
    let isCircle = random() > 0.5;

    if (isCircle) {
      noFill();
      stroke(0);
      ellipse(x, y, size);
    } else {
      fill(0);
      noStroke();
      rect(x, y, size, size);
    }
  }
}
