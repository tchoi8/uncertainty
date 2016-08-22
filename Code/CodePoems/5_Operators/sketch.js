 
function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  fill(255);
  ellipse(width/2, height/2, 100, 100);

  if (mouseX > width/2 || mouseY > height/2) {
    fill(0);
    ellipse(width/2, height/2, 100, 100);
  }
}