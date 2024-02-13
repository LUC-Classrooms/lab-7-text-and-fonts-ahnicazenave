/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  
}

function draw() {
  background(200);
  
  if(mouseIsPressed) {
    textFont("Courier New")
    textSize(32);
    text("cause i'm a mastermind.", 100, 160);
  }
  else {
    textFont("Georgia");
    textSize(25);
    text("it was all by design ...", 30, 60);
  }
  

}
