let fps = 50;
let yPos = 100;

function setup() {
  // Creo un canvas full width.
  createCanvas(windowWidth, windowHeight);
  // FPS (cuantas veces ejecutas draw por seg)
  background(random(30), random(30), random(30));
  frameRate(fps)
}

function draw() {
  fillBackground();

  if (frameCount == 50){
    frameCount = 0;
  }

  if (frameCount % 10 == 0){
    drawLine(2);
  }
  stroke(255,255,255);
  strokeWeight(1);
  fill('rgba(255,255,255, 0.25)');
  ellipse(mouseX, mouseY, frameCount, frameCount);
}

function fillBackground(){
  stroke(220,220,random(255));
  strokeWeight(frameCount % 2);
  point(random(windowWidth), random(windowHeight));
}

function drawLine(weight, color){
  yPos = yPos - 10;
  if (yPos < 0) {
    yPos = height;
  }
  stroke(random(255),0,0);
  strokeWeight(weight);
  line(random(width), yPos, random(width), yPos);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}