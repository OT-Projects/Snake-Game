class Food {
    constructor() {
      this.spawn();
    }
  
    spawn() { // Giving the food a random location on the grid
      let randX = random(width);
      let randY = random(height);
      
      //Allowing us to align the food woithtin a grid square
      this.x = randX - randX % (width / GRID_SIZE);
      this.y = randY - randY % (height / GRID_SIZE)
    }
  
    draw() {
      fill(255, 100, 100);
      rect(this.x, this.y, width / GRID_SIZE, height / GRID_SIZE);
    }
  }