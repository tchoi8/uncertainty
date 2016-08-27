var 스티커갯수; 
var 높이 = 50;
var 간격 = 100;
  function setup() {
        createCanvas(windowWidth, windowHeight);
        background(255);
        noLoop();
        //루프 안함 
  }

  function draw() {
    //시각화("동물이름", 스티커개수);
        시각화("기린", 1);        
        시각화("하마", 3);
        시각화("개구리", 8);
        시각화("종달새", 3);
        시각화("개미", 4);
        시각화("두꺼비", 7);
        시각화("자라", 5);
  }



  function 시각화(이름, 스티커갯수){
     //설문조사 
        높이 = 높이 + 간격;
        fill('black');
        text(이름, 150, 높이 + 50);
        for (i = 0; i < 스티커갯수; i = i + 1) {
              fill('grey');
              ellipse(200 + i * 70, 높이, 50, 50);
        }
  }

