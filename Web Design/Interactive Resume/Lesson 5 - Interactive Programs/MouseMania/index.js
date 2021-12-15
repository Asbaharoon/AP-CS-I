function setup() {
    createCanvas(400, 400);
}


function draw() {

    noStroke();
    fill(mouseX, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);
}