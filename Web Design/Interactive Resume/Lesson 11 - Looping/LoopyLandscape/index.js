let grass;
let tree;

function preload() {
    grass = loadImage('assets/Grass-Block.png');
    tree = loadImage('assets/tree.png');
}

function setup() {
    // Get images from library and remember in variables
    createCanvas(400, 400);
}

function draw() {
    background(144, 240, 234);

    // Draw the sun
    noStroke();
    fill(255, 140, 0);
    ellipse(335, 66, 70, 70);

    // Draw the tree and grass once
    image(grass, 0, 270, 128, 128);
    image(tree, 0, 150, 128, 128);
};