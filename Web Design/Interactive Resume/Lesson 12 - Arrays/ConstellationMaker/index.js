let star;

function preload() {
    star = loadImage('assets/star.png');
}

function setup() {
    createCanvas(400, 400);
}

var xPositions = [100, 200];
var yPositions = [200, 100];

function draw() {
    background(9, 5, 59);
    imageMode(CENTER);
    for (var i = 0; i < yPositions.length; i++) {
        image(star, xPositions[i], yPositions[i], 30, 30);
    }
};