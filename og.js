//https://processing.org/reference/PGraphics.html

var r;
var r2;
var r3;
var ex;
var why;

function setup () {
  var myCanvas = createCanvas (windowWidth, windowHeight);
  myCanvas.parent ('canvas-container');
  // background (0);
  r=random(0,255);
  r2=random(0,255);
  r3=random(0,255);
  ex=random(10,790);
  why=random(10,490);
}

function draw ()  {
if (mouseIsPressed) {
    //background (0);
    noStroke();
    fill(0,7);
    rect(0,0,width,height);
    fill (r,mouseX/6,mouseY/2);
    ellipse (mouseX, mouseY, 40, 40);
    var opX = map(mouseX,0,width,width,0);
    var opY = map(mouseY,0,height,height,0);
    ellipse (opX, opY, 40, 40);
} else {
  noStroke();
    //background (255);
    fill(0,7);
    rect(0,0,width,height);
    fill (mouseX/6,mouseY/2,r2);
    ellipse (mouseX, mouseY, 40, 40);
    var opX = map(mouseX,0,width,width,0);
    var opY = map(mouseY,0,height,height,0);
    ellipse (opX, opY, 40, 40);
}
    /*fill (r,r2,r3);
    stroke(r,r2,r3);
    ellipse (ex + 80, mouseY, 15, 25);
    fill (r3,r,r2);
    stroke(r3,r,r2);
    ellipse (mouseX, why, 50, 30);
    fill (r3,r,r2);
    stroke(r3,r,r2);
    ellipse (mouseX, why + 80, 25, 15); */
    //fill (r2-50,r,r2);
    //stroke(#DB3C2A);
    //ellipse (mouseX - 50, mouseY , 17, 17);
  }
