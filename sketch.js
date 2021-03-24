var hour,minute,seconds;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  hour = hour();
  minute = minute();
  seconds = second();
}

function draw() {
  background(255,255,255);
  
  
  
  drawSprites();
}