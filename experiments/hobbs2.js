//Garrits example of flow fields code used as a base
//chatGpt used for figuring out the logics regarding followCircle

class Agent {
  constructor(x, y, maxSpeed, maxForce, radius) {
    this.position = createVector(x, y);
    this.lastPosition = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
    this.angle = Math.random() * TWO_PI;
    this.radius = radius;
    this.center = createVector(x, y);
  }

  followCircle() {
    let desiredDirection = createVector(
      this.center.x + this.radius * cos(this.angle),
      this.center.y + this.radius * sin(this.angle)
    );

    this.angle += 0.05;
    if (this.angle > TWO_PI) {
      this.angle -= TWO_PI;
    }

    desiredDirection.sub(this.position);
    desiredDirection.setMag(this.maxSpeed);
    let steer = p5.Vector.sub(desiredDirection, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.lastPosition = this.position.copy();

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  checkBorders() {
    if (this.position.x < 0) {
      this.position.x = innerWidth;
      this.lastPosition.x = innerWidth;
    } else if (this.position.x > innerWidth) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = innerHeight;
      this.lastPosition.y = innerHeight;
    } else if (this.position.y > innerHeight) {
      this.position.y = 0;
      this.lastPosition.y = 0;
    }
  }

  draw() {
    push();
    let colors = [color(255, 0, 0), color(0, 0, 255)];
    let baseColor = colors[Math.floor(Math.random() * colors.length)];
    let randomColor = lerpColor(baseColor, color(255), Math.random());
    stroke(randomColor);
    strokeWeight(1);
    line(
      this.lastPosition.x,
      this.lastPosition.y,
      this.position.x,
      this.position.y
    );
    pop();
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
  generateAgents();
}

function generateAgents() {
  for (let i = 0; i < 200; i++) {
    let radius = Math.random() * 100 + 20;
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let agent = new Agent(x, y, 4, 0.1, radius);
    agents.push(agent);
  }
}

let agents = [];

function draw() {
  background(255, 255, 255, 255 * 0.01); // slightly clear the background after the lines have been created
  for (let agent of agents) {
    agent.followCircle();
    agent.update();
    agent.checkBorders();
    agent.draw();
  }
}
