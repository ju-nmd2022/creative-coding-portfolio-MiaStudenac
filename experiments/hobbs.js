//Garrits example of flow fields code used as a base

class Agent {
  constructor(x, y, direction, color) {
    this.position = createVector(x, y);
    this.direction = direction.copy();
    this.color = color;
  }

  //line with randomness to make it look more like ink
  draw() {
    const lineSpacing = 5;
    let currentPos = this.position.copy();

    stroke(this.color);
    strokeWeight(2);

    beginShape();
    while (currentPos.x >= margin && currentPos.x <= innerWidth - margin) {
      // adding noise to make the line wavy
      const noiseOffset = map(
        noise(currentPos.x * 0.01, currentPos.y * 0.01),
        0,
        1,
        -2,
        2
      );
      vertex(currentPos.x, currentPos.y + noiseOffset);
      currentPos.add(this.direction.copy().mult(lineSpacing));
    }
    endShape();
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
  field = generateField();
  generateAgents();
}

function generateField() {
  let field = [];
  noiseSeed(Math.random() * 100);
  for (let x = 0; x < maxCols; x++) {
    field.push([]);
    for (let y = 0; y < maxRows; y++) {
      field[x].push(createVector(1, 0));
    }
  }
  return field;
}

function generateAgents() {
  const inkColor = color(0);

  for (let y = 0; y < maxRows; y++) {
    const direction = createVector(1, 0);
    let agent = new Agent(
      margin,
      y * fieldSize + fieldSize / 2 + 10 + margin,
      direction,
      inkColor
    );
    agents.push(agent);
  }
}

const fieldSize = 6;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const margin = 30;
let field;
let agents = [];

function draw() {
  noFill();
  for (let agent of agents) {
    agent.draw();
  }
  noLoop();
}
