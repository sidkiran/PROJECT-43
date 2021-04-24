var hr, mn, sc;
var hAngle, mAngle, sAngle;


function setup() {

  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {

  background(0);
  translate(200,200);
  rotate(-90)
  
  
  //predefined function
  hr = hour();
  mn = minute();
  sc = second();


  //for iterative rotaion
  sAngle = map(sc, 0, 60, 0, 360);
  mAngle = map(mn,0,60,0,360);
  hAngle = map(hr % 12, 0, 12, 0, 360);

  //draw seconds hand
 push();
 rotate(sAngle)
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,100,0);
 pop();

 // draw minutes hand 
 push();
 rotate(mAngle);
 stroke(0,255,0);
 strokeWeight(7);
 line(0,0,75,0);
 pop();
 
 // draw hours hand 
 push();
 rotate(hAngle);
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,50,0);
 pop();

 // draw a point 
 stroke(0,255,255);
 point(0,0);

// drawing arcs 
strokeWeight(10)
noFill ()

// for seconds 
stroke(255,0,0)
arc(0,0,300,300,0,sAngle)

//for minutes
stroke(0,255,0)
arc(0,0,280,280,0,mAngle)

// for hours 
stroke(0,0,255)
arc(0,0,260,260,0,hAngle)

}