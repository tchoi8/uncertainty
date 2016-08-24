 var 집x, 집y, 학교x, 학교y;
// 집의 x,y 좌표 변수, 학교의 x,y 좌표 변수를 선언합니다. 

var 화면너비, 화면높이;
//브라우저 화면너비와 높이 변수입니다. 

 function setup() {

       화면너비 = windowWidth;
       화면높이 = windowHeight;

       집x = 화면너비 * 3/8;
       집y = 화면높이 * 7/8;
//집의 상대적 위치 

       학교x = 화면너비 * 7/8;
       학교y = 화면높이 * 3/8;
//학교의 상대적 위치

       createCanvas(화면너비, 화면높이);

 }

 function draw() {

       background(255); 
       stroke('grey');
       strokeWeight(20);
       //점의 색과 두께

       point(집x, 집y);
       //집의 상대적 위치에 점을 찍는다 
       
       point(학교x, 학교y);
       //학교의 상대적 위치에 점을 찍는다 

       strokeWeight(5);
       //선의 두께를 5로 지정합니다.

//두 점을 연결해 보세요 line(?,?,?,?);      
//라인 line(첫번 째 x축 값,첫번 째 y축 값,두번 째 x축 값,두번 째 y축 값) 

       noStroke();
       textSize(25);
       text("불확실한 학교", 학교x - 10, 학교y - 20);
       text("집",집x - 10,집y - 20); 
       //각 좌표에서 10픽셀을 뺀 위치에 좌표의 이름을 표시합니다.
 }


