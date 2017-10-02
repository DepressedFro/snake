// game.js

import Snake from './snake';

/** @class Game
  * Represents a snake game
  */
export default class Game 
{
    constructor() 
    {
        this.snake = new Snake(50, 50, 3);
        this.food = [];
        this.over = false;
        this.input = {
            direction: "right"
        };
        // Create the back buffer canvas
        this.backBufferCanvas = document.createElement('canvas');
        this.backBufferCanvas.width = 100;
        this.backBufferCanvas.height = 100;
        this.backBufferContext = this.backBufferCanvas.getContext('2d');
        // Create the screen buffer canvas
        this.screenBufferCanvas = document.createElement('canvas');
        this.screenBufferCanvas.width = 100;
        this.screenBufferCanvas.height = 100;
        document.body.appendChild(this.screenBufferCanvas);
        this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
        // Bind class functions
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.loop = this.loop.bind(this);
        // Start the game loop
        this.interval = setInterval(this.loop, 500);
}

/**
    @method handleKeyDown
*/
handleKeyDown(event)
{
    event.preventDefault();
    switch(event.key){
        case 'w':
        case 'ArrowUp':
            this.direction = 'up';
            break;
        case 'a':
        case 'ArrowLeft':
            this.direction = 'left';
            break;
        case 's':
        case 'ArrowDown':
            this.direction = 'down';
            break;
        case 'd':
        case 'ArrowRight':
            this.direction = 'right';
            break;
    }
}
}
    /** @method update
      * Updates the game world.
      */
update() 
{   var x = this.body[0].x;
    var y = this.body[1].y;
    if(this.direction === "right" && input.direction ==="left" || this.direction === "left" && input.direction ==="right" || this.direction === "up" && input.direction ==="down" || this.direction ==="down" && input.direction ==="up")
    {
        
    }
    this.direction = input.direction;
        this.food.forEach((food) => {
            food.update();
        });
        this.over = this.snake.update();
    }
    /** @method render
      * Renders the game world
      */
render() 
{
        this.backBufferContext.fillStyle = '#ccc';
        this.backBufferContext.fillRect(0, 0, 100, 100);
        this.food.forEach((food) => {
            food.render(this.backBufferContext);
        })
        this.snake.render(this.backBufferContext);
        this.screenBufferContext.drawImage(this.backBufferCanvas,0,0)
    }
    loop() {
        this.update();
        this.render();
    }
}