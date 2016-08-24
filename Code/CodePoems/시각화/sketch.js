    //설문조사 

  var 스티커갯수;
  var 높이 = 50;


  function setup() {
        createCanvas(windowWidth, windowHeight);
        background(255);
        noLoop();
  }

  function draw() {

        시각화("강아지", 1)
        시각화("고양이", 2)
        시각화("개구리", 8)
        시각화("종달새", 3)
        시각화("개미", 4)
        시각화("두꺼비", 7)
        시각화("귀뚜라미", 5)
  }

  function 시각화(이름, 스티커갯수)

  {
        fill(10);
        text(이름, 150, 높이 + 50);
        for (i = 0; i < 스티커갯수; i = i + 1) {
              fill(100, 200);
              ellipse(200 + i * 70, 높이, 50, 50);
        }
        높이 = 높이 + 100;
  }