let array = 3;
let yPos = 0;
let mouseNotPressed = true;

function setup() {
  // Creo un canvas full width.
  createCanvas(windowWidth, windowHeight);
  // FPS (cuantas veces ejecutas draw por seg)
  frameRate(10)
}

function draw() {
  // Seteo un background color random
  background(random(255), random(255), random(255));

  // Si no clickeas, ejecuta las funciones anteriores.
  if (mouseNotPressed) { 
    drawRandomTriangles(120);
    drawCircles(10);
  } else {
    drawFollowCircle();
  }
}

function drawCircles(weight){
  // Dibujo un ellipse en el centro de la pantalla.
  var xposition = windowWidth / 2;
  var yposition = windowHeight / 2;
  stroke(random(255), random(255), random(255));
  strokeWeight(weight);
  ellipse(xposition, yposition, 50, 50);
}

function drawFollowCircle(weight){
  // Dibujo un ellipse en el centro de la pantalla.
  var xposition = windowWidth / 2;
  var yposition = windowHeight / 2;
  stroke(random(255), random(255), random(255));
  strokeWeight(weight);
  ellipse(mouseX, mouseY, 50, 50);
}

function drawLine(weight, color){
  yPos = yPos - 5;
  if (yPos < 0) {
    yPos = height;
  }
  stroke(255, 120, 230);
  strokeWeight(weight);
  line(0, yPos, width, yPos);
}

function drawRandomTriangles(weight){
  // Recorre el for y dibuja un triangulo por cada loop.
  for (let index = 0; index < array; index++) {
    stroke(random(255), random(255), random(255));
    strokeWeight(weight);
    triangle(random(width), random(height), random(width), random(height), random(width), random(height));

    if (index < 2) {
      drawLine(1);
    }
  }
}

function mousePressed() {
  mouseNotPressed = false;
  noLoop();
}

function mouseReleased() {
  mouseNotPressed = true;
  loop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}