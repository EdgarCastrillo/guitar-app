'use strict';

function Game(canvas) {
    this.player = null;
    this.isGameOver = false;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.onGameOver = null;
    this.GuitarPicks = []
    this.cont = 0;
    this.score = 0;
};

Game.prototype.startGame = function() {
    this.player = new Player(this.canvas, this.canvas.width / 2, this.canvas.height - 40);
    this.player2 = new Player(this.canvas, this.canvas.width / 3.5, this.canvas.height - 40);
    this.player3 = new Player(this.canvas, this.canvas.width / 1.4, this.canvas.height - 40);

    setInterval(() => {
        if (Math.random() > 0.40) {
            this.generatePicks();
        }
    }, 500);
    var loop = () => {
        this.update();
        this.clear();
        this.draw();
        if (!this.isGameOver) {
            requestAnimationFrame(loop)
        } else {
            this.onGameOver();
        };
    };
    loop();
};

Game.prototype.generatePicks = function() {
    var newGuitarPicks = new GuitarPicks(this.canvas);
    this.GuitarPicks.push(newGuitarPicks);
};


// Game.prototype.eliminatePicks = function() {
//     var y = this.canvas.height;
//     GuitarPicks.forEach(function(GuitarPick) {
//         if (GuitarPick.y > y - 40) {

//         }
//     });
// };


Game.prototype.update = function() {
    if (this.GuitarPicks) {
        this.GuitarPicks.forEach((pick) => {
            pick.move();
        });
    };
};

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
    this.player.draw();
    this.player2.draw();
    this.player3.draw();

    if (this.GuitarPicks) {
        this.GuitarPicks.forEach((pick) => {
            pick.draw();
        });
    };
};

Game.prototype.checkCollisions = function() {
    console.log('checkfunction');
    var done = false;
    this.GuitarPicks.forEach((GuitarPicks, i) => {
        var rightLeft = this.player.x + this.player.width >= GuitarPicks.x;
        var leftRight = this.player.x <= GuitarPicks.x + GuitarPicks.width;
        var bottomTop = this.player.y + this.player.height >= GuitarPicks.y;
        var topBottom = this.player.y <= GuitarPicks.y + GuitarPicks.height;

        if (bottomTop && topBottom && rightLeft && leftRight) {
            this.GuitarPicks.splice(i, 1);
            this.score++;
            console.log('Win score: ' + this.score);
            done = true;
        };
    });

    if (!done) {
        this.score--;
        console.log('Retarded: ' + this.score);
    };
};

Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
};