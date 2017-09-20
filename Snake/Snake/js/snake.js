/**@constructor Snake
constructs a new snake object
*/
function Snake()
{
    this.cellSize = 10;
    this.width = 15;
    this.height = 15;
    this.snake = [{ x: 7, y: 7 }, {x:6, y:7}, {x:5, y:7}];
    this.direction = "right";
    this.food = [];
    //create canvas
    var canvas = document.createElement("canvas");
    canvas.width = this.width * this.cellSize;
    canvas.height = this.height * this.cellSize;
    document.body.appendChild(canvas);
    this.ctx = canvas.getContext("2d");
    window.setInterval(() =>this.loop(), 1000);

    window.onkeydown = this.handleKeyDown;
}

Snake.prototype.handleKeyDown = function(event)
{
    switch(event.keyCode)
    {
        case "w":
            this.direction = "up";
            break;
    }
}

Snake.prototype.render = function()
{
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.width * this.cellSize, this.height * this.cellSize);
    this.ctx.fillStyle = "ivory";
    this.snake.forEach((segment) =>
    {
        this.ctx.fillRect(segment.x * this.cellSize, segment.y * this.cellSize, this.cellSize, this.cellSize);
    });
    this.ctx.fillStyle = "gold";
    this.food.forEach((food) =>
    {
        this.ctx.fillRect(segment.x * this.cellSize, segment.y * this.cellSize, this.cellSize, this.cellSize);
    })
}

Snake.prototype.update = function()
{
    var x = this.snake[0].x;
    var y = this.snake[0].y;
    
    switch(this.drection)
    {
        case "right":
            {
                x++;
                break;
            }
        case "left":
            {
                x--;
                break;
            }
        case "up":
            {
                y--;
                break;
            }
        case "down":
            {
                y++;
                break;
            }
    }
    if(x < 0 || x > this.width || y < 0 || y > this.height)
    {
        return;
    }
    this.snake.pop();
    this.snake.unshift({ x: x, y: y });
}

Snake.prototype.loop = function()
{
    this.update();
    this.render();
}

new Snake();