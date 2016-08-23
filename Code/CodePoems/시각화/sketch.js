   //설문조사 

  var 스티커;
  var 높이 = 50;


  function setup() {
        createCanvas(windowWidth, windowHeight);
        background(255);
        noLoop();
  }

  function draw() {

        dataviz("강아지", 1)
        dataviz("고양이", 2)
        dataviz("개구리", 8)
        dataviz("종달새", 3)
        dataviz("개미", 4)
        dataviz("두꺼비", 7)
        dataviz("귀뚜라미", 5)
  }

  function dataviz(이름, 스티커)

  {
        fill(10);
        text(이름, 150, 높이 + 50);
        for (i = 0; i < 스티커; i = i + 1) {
              fill(100, 200);
              ellipse(200 + i * 70, 높이, 50, 50);
        }
        높이 = 높이 + 100;
  }