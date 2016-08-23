var x1,x2,y1,y2;
var x, y;
 
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
}

function draw(){
  
  장소(200,200,400,400);
} 


function 장소(x1,y1,x2,y2){
  background(255);
  stroke(100);
  strokeWeight(4);
  line(x1,y1,x2,y2);


  strokeWeight(30);
  point(x1,y1);
  point(x2,y2);


  noStroke();
  fill(255,0,0);
  ellipse(x,y,10,10);
 
  if(x<x2){ 
    x=x+1;
    }
  else{
    x=x1;

  }

  if(y<y2){ 
    y=y+1;
    }
  else{
    y=y1;

  }

}