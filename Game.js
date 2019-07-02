'use strict';

function Game(canvas) {
    this.player = null;
    this.picks = [];
    this.isGameOver = false;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.onGameOver = null;
};

Game.prototype.startGame = function() {
    // inicializar player y enenmies
    this.player = new Player(this.canvas);
    var loop = () => {

        if (Math.random() > 0.77) {
            var randomY = Math.random() * this.canvas.height - 10;
            var newGuitarPicks = new GuitarPicks(this.canvas, randomY);
            this.picks.push(newGuitarPicks);
        };

        this.update();
        this.clear();
        this.draw();
        this.checkCollisions()
        if (!this.isGameOver) {
            requestAnimationFrame(loop)
        } else {
            this.onGameOver();
        };
    };
    loop();
};

Game.prototype.update = function() {
    this.picks.forEach(function(GuitarPicks) {
        // GuitarPicks.move();
    });
};

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
    this.player.draw();
    this.picks.forEach(function(GuitarPicks) {
        GuitarPicks.draw();
    });
};

Game.prototype.checkCollisions = function() {
    this.picks.forEach((GuitarPicks, index) => {
        var rightLeft = this.player.x + this.player.width >= GuitarPicks.x;
        var leftRight = this.player.x <= GuitarPicks.x + GuitarPicks.width;
        var bottomTop = this.player.y + this.player.height >= GuitarPicks.y;
        var topBottom = this.player.y <= GuitarPicks.y + GuitarPicks.height;

        if (rightLeft && leftRight && bottomTop && topBottom) {
            this.picks.splice(index, 1);
            this.player.lives--;
            if (this.player.lives === 0) {
                this.isGameOver = true;
            };
        };
    });
};

Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
};