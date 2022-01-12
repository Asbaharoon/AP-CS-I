function preload() {

}

function setup() {
    createCanvas(400, 400);
}

var movies = [{
    title: "Puff the Magic Dragon",
    review: "Best movie ever!!"
}];

function draw() {
    fill(84, 140, 209);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(movies[0].title, 200, 50);
};