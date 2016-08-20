function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  textSize(200);

  m = month();
  d = day();
  y = year();
  
  text(m + '.' + d + ',' + y, 250, windowHeight/2);
}