function setup() {
createCanvas(500,500);
}

function draw() {
  angleMode(DEGREES);
  rotate(30);
  rect(150,100,100,100)
 
   rotate(-40);
  translate(100,50);
  textSize(50);
  text("hello",150,100);
}