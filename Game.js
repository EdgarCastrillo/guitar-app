'use strict';

function Game(canvas) {
    this.player = null;
    this.isGameOver = false;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.onGameOver = null;
    this.GuitarPicks = []
    this.cont = 0;
};

Game.prototype.startGame = function() {
    // inicializar player y enenmies
    this.player = new Player(this.canvas, this.canvas.width / 2, this.canvas.height - 40);
    //this.player2 = new Player(this.canvas, this.canvas.width / 3, this.canvas.height - 40);

    setInterval(() => {
        if (Math.random() > 0.50) {
            this.generatePicks();
        }
    }, 500);
    var loop = () => {
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

Game.prototype.generatePicks = function() {
    var newGuitarPicks = new GuitarPicks(this.canvas);
    this.GuitarPicks.push(newGuitarPicks);
};
/*
Game.prototype.eliminatePicks = function() {
    var y = this.canvas.height;
    GuitarPicks.forEach(function(GuitarPick) {
        // if (GuitarPick.y > y);
    });
};*/

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
    //this.player2.draw();

    if (this.GuitarPicks) {
        this.GuitarPicks.forEach((pick) => {
            pick.draw();
        });
    };
};

Game.prototype.checkCollisions = function() {

};

Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
};