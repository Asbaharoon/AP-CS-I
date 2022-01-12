function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255, 255, 247);
    stroke(173, 222, 237);

    var i = 0;
    while (i < 20) {
        var lineY = 20 + (i * 20);
        line(0, lineY, 400, lineY);
        i++;
    }
};