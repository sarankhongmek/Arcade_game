// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 505)
    {
      this.x = -101;
      this.speed =  Math.floor((Math.random() * 410) + 250);

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {

  constructor (x, y,) {
    this.x = 202;
    this.y = 390;
    this.sprite = 'images/char-boy.png';
  }

  update(){
    for (let enemy of allEnemies){
      if (this.y === enemy['y'] && (enemy['x'] + 50 > this.x && enemy['x'] < this.x + 50)){
        this.x = 202;
        this.y = 390;
      } else if (this.y < 0){
        this.x = 202;
        this.y = 390;
        swal({  type: "success",
                title:'Congratulations! You Won!',
                confirmButtonText:'Play again!',

              })
      }
    }

  }

  render(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
  }
//handle method of the Player
//condition to check the player is w
  handleInput(keyPress){
    if(keyPress === 'up' && this.y > -15){
      this.y -= 81;
    } else if (keyPress === 'down' && this.y < 390){
      this.y += 81;
    } else if (keyPress === 'left' && this.x > 0){
      this.x -= 101;
    } else if (keyPress === 'right' && this.x < 404){
      this.x += 101;
    }

  }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// 66,147,228

const enemy0 = new Enemy (-101,66,300);
const enemy1 = new Enemy (-101,147,250);
const enemy2 = new Enemy (-101,228,400);
const allEnemies = [enemy0,enemy1,enemy2];
let player = new Player();






// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
