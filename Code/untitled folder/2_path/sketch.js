var 시작, 끝, 속도;
var x = 시작;

function setup() {
      createCanvas(windowWidth, windowHeight);
      background(255);
 
}

function draw() {
      위치(100, 900, 3);         

      //위치(시작, 끝, 속도);
      //변수 값을 바꿔보세요.  
}

function 위치(시작, 끝, 속도) {
      background(255,20);
      stroke(100);
      strokeWeight(4);
      line(시작, 200, 끝, 200);

      strokeWeight(30);
      point(시작, 200);
      point(끝, 200);

      noStroke();
      fill(255, 0, 0);
      ellipse(x, 200, 20, 20);

//원의 x좌표 값은 변수 x입니다.

      if (x < 끝) {
            x = x + 속도;
      } else {
            x = 시작;
      }
      //만약에 x값이 끝보다 작다면, x는 x값 더하기 속도이다. 그렇지 않다면 x는 시작값으로 돌아간다. 

}
