var value = 0;
var lastkey = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(230);
  noStroke();
  rect(25, 25, width, height);
  fill(value);
  textSize(200);
  text(lastkey, width / 2, height / 2);
}

function keyTyped() {
 
  lastkey = key;
}