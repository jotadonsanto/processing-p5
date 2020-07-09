let fps = 120;
let middleX = 600;
let middleY = 600;
let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(30), random(30), random(30));
  frameRate(fps);
  colorMode(RGB, 255, 255, 255, 1);
}
function draw(){
  stroke(random(220,255),random(220,255),random(220,255),random(0.5,0.75));
  line(mouseY, mouseY, mouseX, 0);
  if (frameCount % 30 === 0){
    background(random(20), random(30), random(30));
  }

  if (frameCount == 400){
    frameCount = 0;
  }


  
  textSize(40);
  textAlign(CENTER, TOP);
  fill(random(0, 10))
  text(score, windowWidth / 2, (windowHeight / 2) - 50);
  score = score + 1;
  stroke(255,255,255);
  strokeWeight(1);
  fill(random(100,155),random(90,140),random(95, 145),random(0.8,1));
  ellipse(middleX, middleY, frameCount, frameCount);
  if (mouseX < (windowWidth / 2)) {
    //izquierda
    middleX = middleX + random(30);
  } else {
    //derecha
    middleX = middleX - random(30);
  }
  if (mouseY < (windowHeight / 2)) {
    //izquierda
    middleY = middleY + random(30);
  } else {
    //derecha
    middleY = middleY - random(30);
  }

  if(middleY > windowHeight || middleY < 0 || middleX > windowWidth || middleX < 0){
    textSize(100);
    textAlign(CENTER, CENTER);
    text('perdiste', windowWidth / 2, windowHeight / 2);
    fill(0, 102, 153);
    text('perdiste', windowWidth / 2, (windowHeight / 2) - 20);
    fill(0, 102, 153, 51);
    text('perdiste', windowWidth / 2, (windowHeight / 2) - 50);
    score = 0;
  }
  fillBackground();
}


function fillBackground(){
  stroke(220,220,random(255));
  strokeWeight(frameCount % 2);
  point(random(windowWidth), random(windowHeight));
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(random(30), random(30), random(30));
}