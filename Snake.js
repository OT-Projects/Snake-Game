
//Add the following
// When the snake hits the edge of the map the game should restart or the snake should come out the other side of the wall
// Add a scoring system and display the number (Could just be the snakes body length)
// Make sure the food doesn't spawn on the snake's body.
// Start the snake off already with a body size of 5

class Snake {
    constructor() { // For creating the body of the surgery
      this.spawn();
    }

    spawn() {
        this.body = [];
        this.body.push({x: width/2, y: height/2}); 
        this.dir = 1; 
        this.lastX = width/2;
        this.lastY = height/2;
    }
  
    draw() { //draws the rectangle represent the body of the snake
      fill(0); //fill a grid with the snake head (Black)
      for (let b of this.body) {
        rect(b.x, b.y, width / GRID_SIZE, height / GRID_SIZE)
      }
    }
  
    update() { //update the snake size, movement of the snake
        this.hitDetection();

        this.lastX = this.body[this.body.length-1].x;     // track the last X and Y  
        this.lastY = this.body[this.body.length-1].y;     // so we can put the new body there
        for (let i = this.body.length-1; i >= 1; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }

      if (this.dir == 1) {
        this.body[0].x += width / GRID_SIZE;  
      } else if (this.dir == 2) {
        this.body[0].y += height / GRID_SIZE;
      } else if (this.dir == 3) {
        this.body[0].x -= width / GRID_SIZE;
      } else if (this.dir == 4) {
        this.body[0].y -= height / GRID_SIZE;
      }
    }

    hitDetection() {
        for (let i = 1; i < this.body.length; i++) {
          if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
            this.spawn();
          }
        }
      }

    grow() { //snake grows after eating food
        this.body.push({x: this.lastX, y: this.lastY});
    }

    hasEatenFood() {
        // if the location of the head of the snake is the same has the location of the food, return true
        if (this.body[0].x == food.x && this.body[0].y == food.y) {
          return true;     
        }
      }

  }