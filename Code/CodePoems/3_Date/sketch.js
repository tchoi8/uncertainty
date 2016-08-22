 
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  fill(255);
  textSize(70);



  var 월 = month();
  var 일 = day();
  var 년 = year();
  

  text(월 + ". " + 일 + "," + 년, 250, height/2);

  var 시 = hour();
  var 분 = minute();
  var 초 = second();

   text(시 + " : " + 분 + " : " + 초, 250, height/2+100);

}