function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  stroke(0);

  let numLines = 600;
  for (let i = 0; i < numLines; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2, y2;

    let direction = int(random(4));

    switch (direction) {
      case 0: // horizontal
        x2 = x1 + random(-width / 2, width / 2);
        y2 = y1;
        break;
      case 1: // vertical
        x2 = x1;
        y2 = y1 + random(-height / 2, height / 2);
        break;
    }

    line(x1, y1, x2, y2);
  }
}
