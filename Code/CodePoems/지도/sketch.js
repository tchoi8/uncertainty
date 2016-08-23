var x1,y1,x2,y2
// 좌표 변수? 

x1 = 100;
y1 = 500;
//첫 번째 좌표

x2 = 500;
y2 = 100;
//두 번째 좌표

function setup() {

createCanvas(windowWidth,windowHeight);
background(255);
}

function draw() {
noStroke();
textSize(30);
text("집",x1-10,y1-20);
stroke(255,0,0);
strokeWeight(3);
line(x1,y1,x2,y2);


noStroke();
textSize(30);
text("불확실한 학교",x2-10,y2-20);
stroke(100);
strokeWeight(10);
point(x1,y1);
point(x2,y2);
//포인트 그리기 
  
} 