function setup() {
    createCanvas(400, 400);
}

function draw() {
    fill(0, 255, 68); // start color

    if (mouseIsPressed) {
        fill(33, 112, 52); // click color
    }
    rect(50, 150, 250, 100); // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("PRESS ME!", 93, 193);
};