var 시작, 끝, 속도;
var x = 시작;

function setup() {
      createCanvas(windowWidth, windowHeight);
      background(255);
}

function draw() {
      위치(100, 500, 3);         

      //위치(시작, 끝, 속도);
      //변수 값을 바꿔보세요.  
}

function 위치(시작, 끝, 속도) {
      background(255);
      stroke(100);
      strokeWeight(4);
      line(시작, 200, 끝, 200);

      strokeWeight(30);
      point(시작, 200);
      point(끝, 200);

      noStroke();
      fill(255, 0, 0);
      ellipse(x, 200, 20, 20);

      if (x < 끝) {
            x = x + 속도;
      } else {
            x = 시작;
      }

}
