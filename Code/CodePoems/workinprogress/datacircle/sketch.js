//설문조사 

var x,y,w,h;

function setup() {

createCanvas(windowWidth,windowHeight);
background(255);
}

function draw() {

  
  //강아지 6
  //고양이 9
  //거북이 1


  정보("강아지",200,200,6);
 
  정보("고양이",500,200,9);
 
  정보("거북이",800,200,1);
  
} 

function 정보(이름,x,y,w)
{
 var w = map(w,0,10,10,300);

 fill(255,150,0);
 noStroke();
 ellipse(x,y,w,w); 
 fill(5)
 textSize(30);
text(이름,x-50, y);

}


