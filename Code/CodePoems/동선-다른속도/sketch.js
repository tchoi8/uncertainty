var x1,y1,x2,y2;
var x= 100;
var y= 200;
var i= 0;
var o= 0;
var j =0;
var i2=0;
function setup() {

createCanvas(windowWidth,windowHeight);
background(255);
}

function draw() {

  background(255);

 
  
  장소(400,100,600,100,20);
 
  장소2(300,200,600,200,0.11);  
  
  장소(200,400,800,300,20);  
 
  
} 

function 장소(x1,y1,x2,y2,v)
{
  
stroke(255,0,0);
strokeWeight(4);
line(x1,y1,x2,y2);

stroke(0,255,100);
strokeWeight(30);
point(x1,y1);
point(x2,y2);
 


  if (i<=100){
    i = i+1;
  }else{
    i= 0;
  }
var incre_x = map(i,0,100,x1,x2);
 

 if (o<=100){
    o = o+1;
  }else{
    o= 0;
  }
var incre_y = map(o,0,100,y1,y2);
 

 noStroke();
  fill(155,155,0);
  ellipse(incre_x,incre_y,10,10);

 
   
}

function 장소2(x1,y1,x2,y2,v)
{
  
stroke(255,0,0);
strokeWeight(4);
line(x1,y1,x2,y2);

stroke(0,255,100);
strokeWeight(30);
point(x1,y1);
point(x2,y2);
 
 
var incre_x = map(i2,0,100,x1,x2);
  
  if (i2<=100){
    i2 = i2+v;
  }else{
    i2 = 0;
  }

  noStroke();
  fill(155,155,0);
  ellipse(incre_x,y1,10,10);


  if (j<=100){
    j = j+.1;
  }else{
    j= 0;
  }
  var incre_x2 = map(j, 0, 100, x1, x2);

      ellipse(incre_x2, y1, 20, 20);
}
