function setup() {
    createCanvas(400, 400);
}

var textX = random(0, 300);
var textY = random(0, 300);
var yourName = "Your Name";

function draw() {


    fill(255, 0, 0);
    textSize(30);
    text("Hiiii, " + yourName, textX, textY);
}