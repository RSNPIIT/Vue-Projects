function setup() {
  createCanvas(400, 400);
}

function draw() {
  strokeWeight(10);
  stroke("orange");
  background(220);
  fill("yellow")
  circle(200,200,300);
  stroke("black");
  point(260,120);
  point(120,260);
  strokeWeight(5)
  line(260,120,120,260);
  stroke("olive");
  fill("pink");
  rect(110,100,50,70);
}
