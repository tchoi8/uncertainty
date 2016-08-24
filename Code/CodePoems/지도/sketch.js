 var 집x, 집y, 학교x, 학교y;
// 집의 x,y 좌표 변수, 학교의 x,y 좌표 변수를 선언합니다. 

 function setup() {

       createCanvas(windowWidth, windowHeight);
       background(255);
 }

 function draw() {

       집x = windowWidth/4;
       집y = windowHeight/2;
//집의 상대적 위치 

       학교x = windowWidth/2;
       학교y = windowHeight/4;
//학교의 상대적 위치
       
      stroke(100);
       strokeWeight(20);
//점의 색과 두꼐

       point(집x, 집y);
//집의 상대적 위치에 점을 찍는다 
       point(학교x, 학교y);
//학교의 상대적 위치에 점을 찍는다 


       stroke(100);
       strokeWeight(5);
       line(집x,집y,학교x,학교y);
//선의 색과 두꼐, 그리고 시작점과 끝나는 점을 지정합니다. 
   

       noStroke();
       textSize(25);
       text("불확실한 학교", 학교x - 10, 학교y - 20);
       text("집",집x - 10,집y - 20); 
//각 좌표에서 10픽셀을 뺀 위치에 좌표의 이름을 표시합니다.

 
 }
