function setup() {
    createCanvas(400, 400);
}

var xPositions = [167, 245];
var yPositions = [43, 111];

function draw() {
    background(204, 247, 255);

    noStroke();
    fill(0, 200, 255);

    for (var i = 0; i < xPositions.length; i++) {
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
    }
};

mouseClicked = function() {
    xPositions.push(mouseX);
    yPositions.push(mouseY);
};