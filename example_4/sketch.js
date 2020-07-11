let fps = 1500;
let coordX = 0;
let coordY = 0;

let lines = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(30), random(30), random(30));
  frameRate(fps);
  colorMode(RGB, 255, 255, 255, 1);
  noCursor();
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(random(30), random(30), random(30));
}
function draw(){
  background(0,0,0, random(0,0.5));
  let medio = windowWidth / 2;
  stroke(255,0,0,.5);
  line(coordX, coordY, mouseX, mouseY);

  for (let index = 0; index < lines; index++) {
    stroke(random(220, 240),random(220, 240),random(220, 240),0.325);
    line(coordX + (index * 30), coordY + (index * 30), 0, 0);
    line(coordX - (index * 30), coordY - (index * 30), windowHeight, windowWidth);
  }
  console.log('x es ' + coordX + ' y es ' + coordY)
  if (coordX < windowWidth && coordY == 0 ){
    coordX = coordX + 50;
  } else if (coordX >= windowWidth && coordY < windowHeight){
    coordY = coordY + 50;
  } else if (coordY >= windowHeight && coordX != 0) {
    coordX = coordX - 50;
  } else if (coordX == 0 && coordY > 0){
    coordY = coordY - 50;
  }
  fillBackground();
}

function fillBackground(){
  for (let index = 0; index < 100; index++) {
    stroke(220,220,random(255));
    strokeWeight(frameCount % 2);
    point(random(windowWidth), random(windowHeight));
  }
}