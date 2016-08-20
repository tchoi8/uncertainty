var poem = "내려갈 때 보았네 올라갈 때 보지 못한 그 꽃"
//고은 「그 꽃」

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230,140,140,200);
    textSize(50);
    fill(255,255,255,100);
    text(poem, 150, windowHeight / 2);
}