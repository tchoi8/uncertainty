poem = "내려갈 때 보았네 \n올라갈 때 보지 못한 \n그 꽃"
//고은 「그 꽃」

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230,140,140);
    textSize(50);
    fill(255,255,255,200);
    text(poem, width/2-200, height / 2, 600,300);
}