function setup() {
    createCanvas(400, 400);
}

var recipeTitle = "Bread";
var recipeServings = 2;
var recipeIngredients = ["Flour", "Water"];

function draw() {
    fill(26, 26, 26);
    textSize(20);
    text(recipeTitle, 10, 23);
    text("Serves: " + recipeServings, 10, 55);
    text("Ingredients: " + recipeIngredients, 10, 85);
};