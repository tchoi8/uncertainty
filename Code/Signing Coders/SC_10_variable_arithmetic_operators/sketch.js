var i = 100;

function setup() {
  createCanvas(200, 200);
  background(0);
}

function draw() {
  fill(0, 200, 0);
  rect(i + 20, i - 20, i - 50, i - 30);
  print(i);
}