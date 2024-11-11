const GRID_SIZE = 20;

let snake;
function setup() {
   createCanvas(700, 700); //create the board for the game
   snake = new Snake(); // create an instance for the Snake class
   frameRate(4); //????
}

function draw() {
  background(155, 204, 153); //canvas background color
  snake.update(); //to update the snake on the board

  if (snake.hasEatenFood()) {   //if the sanke ate the food, spawn a new food at a random location
    Food.spawn(); //call the spawn fucntion declared in the food class to re-spawn the food at a random location
    snake.grow(); //Call the grow function declared in the snake class to increase the snake length
  }

  stroke(155, 204, 153);
  snake.draw(); //create the snake on the board
  Food.draw(); //create the food on the board
}

//Change the direction of the snake
//When we press right and we're not going left change direction to the right and vice versa
//When we press down and we're not going up, go down and vice versa
// Left arrow: 37
// Up arrow: 38
// Right arrow: 39
// Down arrow: 40
function keyPressed() {
    if (keyCode === 39 && snake.dir !== 3) {
      snake.dir = 1;
    } else if (keyCode === 40 && snake.dir !== 4) {
      snake.dir = 2;
    } else if (keyCode === 37 && snake.dir !== 1) {
      snake.dir = 3;
    } else if (keyCode === 38 && snake.dir !== 2) {
      snake.dir = 4;
    } 
}