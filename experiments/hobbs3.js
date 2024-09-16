//Garrits example of flow fields code used as a base
//figured out the general logics using chatGpt

class Agent {
  constructor(x, y, maxSpeed, maxForce, radius) {
    this.position = createVector(x, y);
    this.lastPosition = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
    this.radius = radius;
    this.randomDirection = createVector(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    ).normalize();
    this.directionChangeInterval = Math.random() * 100 + 50;
    this.framesSinceLastChange = 0;
  }

  followCursor() {
    // follow cursor only if it's within canvas dimensions
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
      let desiredDirection = createVector(mouseX, mouseY);
      desiredDirection.sub(this.position);
      desiredDirection.setMag(this.maxSpeed);
      let steer = p5.Vector.sub(desiredDirection, this.velocity);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    } else {
      // move in random direction if the cursor is outside of canvas
      this.randomMovement();
    }
  }

  randomMovement() {
    // apply random movement
    let desiredDirection = this.randomDirection.copy().mult(this.maxSpeed);
    desiredDirection.sub(this.velocity);
    let steer = p5.Vector.sub(desiredDirection, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);

    // update the frames since last direction change
    this.framesSinceLastChange++;

    // change the random direction after the interval
    if (this.framesSinceLastChange > this.directionChangeInterval) {
      this.randomDirection = createVector(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize();
      this.directionChangeInterval = Math.random() * 100 + 50; // reset the interval
      this.framesSinceLastChange = 0; // reset the frames counter
    }
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
      this.position.x = width;
      this.lastPosition.x = width;
    } else if (this.position.x > width) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = height;
      this.lastPosition.y = height;
    } else if (this.position.y > height) {
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
  background(255, 255, 255, 255 * 0.05); // slightly clear the background after the lines have been created
  for (let agent of agents) {
    agent.followCursor(); // follow the cursor or move randomly
    agent.update();
    agent.checkBorders();
    agent.draw();
  }
}
