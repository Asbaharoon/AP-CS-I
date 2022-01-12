function preload() {

}

function setup() {
    createCanvas(400, 400);
}

var faceObj = {
    centerX: 100,
    centerY: 100
};

var drawSmiley = function(faceObj) {
    fill(168, 124, 70);
    ellipse(faceObj.centerX, faceObj.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(faceObj.centerX - 30, faceObj.centerY - 30, 20, 20);
    ellipse(faceObj.centerX + 30, faceObj.centerY - 30, 20, 20);
    noFill();
    strokeWeight(3);
    arc(faceObj.centerX, faceObj.centerY + 10, 50, 50, 0, PI);
};

function draw() {
    drawSmiley(faceObj);
};