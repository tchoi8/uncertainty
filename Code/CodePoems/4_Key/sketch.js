var 입력 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(230);
  noStroke();
  rect(100, 100, windowWidth, windowHeight);
  fill(0);
  textSize(200);
  text(입력, windowWidth / 2, windowHeight / 2);
}

function keyTyped() {
 
  입력 = key;
}