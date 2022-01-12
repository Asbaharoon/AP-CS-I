let leaf;

function preload() {
    leaf = loadImage('assets/leaf-green.png');
}

function setup() {
    createCanvas(400, 400);
}

var paintBrush = {
    x: 200,
    y: 200,
};

function paintCanvas() {
    imageMode(CENTER);
    image(leaf, paintBrush.x, paintBrush.y, paintBrush.x, paintBrush.y);
};

function draw() {
    paintCanvas();
};