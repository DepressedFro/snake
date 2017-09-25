//snake.js

/** @class Snake
    the snake in a snake game
*/
module.exports = Snake;

class Snake
{
    constructor(x, y, segments)
    {
        this.body = [];
        for(var i = 0; i < segments; i++)
        {
            this.body.push({
                x: x - i,
                y: y
            });
        }
        this.direction = "right";
        thissegmentSize = 15;
    }
    checkForConsumption(food)
    {

    }
    update()
    {
        //did we smack a wall
        //did we eat food
        //did we eat outselves
        //do we need to grow

    }
    /**
        @function render
    */
    render(ctx)
    {
        
        this.body.forEach(function (segement) {
            ctx.save();
            ctx.fillStyle = "green";
            ctx.fillRect(segment.x * this.Segmentsize, segment.y * this.segmentSize, 1, 1);
            ctx.restore();
        });
    }
}