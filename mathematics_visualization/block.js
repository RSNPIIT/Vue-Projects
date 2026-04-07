class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.targetAngle = 0;
    this.offset = random(360);
  }

  move() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    if (d < dist_mouse) {
      this.targetAngle = map(d, 0, dist_mouse, 90, 0);
    } else {
      this.targetAngle = 0;
    }

    // smooth rotation
    this.angle = lerp(this.angle, this.targetAngle, 0.1);
  }

  display() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    let hue = map(d, 0, width, 0, 360);
    let alpha = map(d, 0, dist_mouse * 2, 100, 40);
    let pulse = sin(frameCount * 0.05 + this.offset) * 3;

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noFill();
    stroke(hue, 80, 100, alpha);
    rect(0, 0, size + pulse, size + pulse);
    pop();
  }
}
