// Enemies our player must avoid
var Enemy = function(x, y) {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < 520) {
        this.x += (160 * dt);
    } else {
        this.x = -90;
    }

    // If the enemy and the player collide.

    if (this.x < player.x + 35 && this.x + 65 > player.x && this.y < player.y + 65 && this.y + 45 > player.y) {
        player.reset();
    }
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function() {
    this.sprite = 'images/char-horn-girl.png';
    this.x = 205;
    this.y = 320;
};

Player.prototype.update = function() {

    // If the player reaches the water

    if (player.y < 18) {
        alert('You Win!');
        this.reset();
    }

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.handleInput = function(direction) {
    /*  switch (direction) {
      case 'up':
          this.y -= 90;
          break;
      case 'down':
          this.y += 90;
          break;
      case 'left':
          this.x -= 100;
          break;
      case 'right':
          this.x += 100;
          break;
      }
      */
    //this way the Player stays in the field

    if (direction == 'left' && this.x > 0) {
        this.x -= 30;
    }
    if (direction == 'right' && this.x < 400) {
        this.x += 30;
    }
    if (direction == 'up' && this.y > 3) {
        this.y -= 30;
    }
    if (direction == 'down' && this.y < 400) {
        this.y += 50;
    }
};

// Is called when the player is reset to the starting point

Player.prototype.reset = function() {
    this.x = 205;
    this.y = 320;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

const allEnemies = [
    enemy1 = new Enemy(-80, 50),
    enemy2 = new Enemy(-150, 150),
    enemy3 = new Enemy(-180, 240),
    enemy4 = new Enemy(-270, 150),
    enemy5 = new Enemy(-370, 50)
];

// Place the player object in a variable called player

const player = new Player();


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
