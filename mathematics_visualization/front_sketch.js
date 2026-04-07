let cols;
let rows;
let dist_mouse = 80;
let size = 15;
let blocks = [];

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);

  cols = width / size;
  rows = height / size;

  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(
        size / 2 + i * size,
        size / 2 + j * size
      );
    }
  }
}

function draw() {
  background(0, 0, 0, 20); // motion trail

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}
