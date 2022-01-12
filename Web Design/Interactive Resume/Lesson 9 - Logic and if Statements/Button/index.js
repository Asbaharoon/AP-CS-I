function setup() {
    createCanvas(400, 400);
}

function draw() {
    fill(0, 255, 68); // start color
    rect(0, 0, 400, 200); // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("Press me!", 145, 115);
};