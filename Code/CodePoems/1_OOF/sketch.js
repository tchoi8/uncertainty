function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 255);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(150);
  textStyle(BOLD);
  text("OOF", width / 2, height / 2);
}