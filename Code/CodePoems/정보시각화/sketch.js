var 스티커갯수; 

var 높이 = 50;
var 간격 = 100;
//시각화된 정보의 열 사이 높이와 간격

  function setup() {
        createCanvas(windowWidth, windowHeight);
        background(255);
        noLoop();
        //루프 안함/ 쳇바퀴를 한번 돌리고 멈춘다.  
  }

  function draw() {
    //시각화("동물이름", 스티커개수);
        시각화("기린", 1);        
        시각화("하마", 3);
        시각화("개구리", 8);
        시각화("종달새", 3);
  }



  function 시각화(이름, 스티커갯수){
     //설문조사 
        높이 = 높이 + 간격;
        fill(10);
        text(이름, 150, 높이 + 50);
        for (i = 0; i < 스티커갯수; i = i + 1) {
              fill('grey');
              ellipse(200 + i * 70, 높이, 50, 50);
        }
  }

