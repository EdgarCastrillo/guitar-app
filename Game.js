'use strict';

function Game(canvas) {
    this.player = null;
    this.isGameOver = false;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.onGameOver = null;
    this.GuitarPicks = []
    this.score = 0;
    this.time = 0;
    this.totalTime = 215;
};

Game.prototype.startGame = function() {
    this.player = new Player(this.canvas, (this.canvas.width / 3.5) - 50, this.canvas.height - 120, 1);
    this.player2 = new Player(this.canvas, (this.canvas.width / 2) - 50, this.canvas.height - 120, 2);
    this.player3 = new Player(this.canvas, (this.canvas.width / 1.4) - 50, this.canvas.height - 120, 3);

    setInterval(() => {
        if (Math.random() > 0.10) {
            this.generatePicks();
        };
    }, 350);
    var loop = () => {
        this.time++;
        this.countDown();
        this.deletePicks();
        this.update();
        this.clear();
        this.draw();
        if (!this.isGameOver) {
            requestAnimationFrame(loop)
        } else {
            this.onGameOver(this.score);
        };
    };
    loop();
};

Game.prototype.generatePicks = function() {
    var numRandom = Math.floor((Math.random() * 10));
    if (numRandom <= 3) {
        var newGuitarPicks = new GuitarPicks(this.canvas, (this.canvas.width / 3.5) - 25);
    } else if (numRandom <= 6) {
        var newGuitarPicks = new GuitarPicks(this.canvas, (this.canvas.width / 2) - 25);
    } else {
        var newGuitarPicks = new GuitarPicks(this.canvas, (this.canvas.width / 1.4) - 25);
    }
    this.GuitarPicks.push(newGuitarPicks);
};

Game.prototype.update = function() {
    if (this.GuitarPicks) {
        this.GuitarPicks.forEach((pick) => {
            pick.move();
        });
    };
    var globalScore = document.querySelector('#global-score');
    globalScore.innerHTML = 'Score: ' + this.score;
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

Game.prototype.checkCollisions = function(player) {
    var done = false;
    this.GuitarPicks.forEach((GuitarPicks, i) => {
        var rightLeft = player.x + player.width >= GuitarPicks.x;
        var leftRight = player.x <= GuitarPicks.x + GuitarPicks.width;
        var bottomTop = player.y + player.height >= GuitarPicks.y;
        var topBottom = player.y <= GuitarPicks.y + GuitarPicks.height;

        if (bottomTop && topBottom && rightLeft && leftRight) {
            this.GuitarPicks.splice(i, 1);
            this.score += 20;
            console.log('Win score: ' + this.score);
            done = true;
        };
    });

    if (!done) {
        this.score -= 10;
        console.log('Retarded: ' + this.score);
    };
};


Game.prototype.deletePicks = function() {
    this.GuitarPicks.forEach((pick, i) => {
        if (pick.y >= this.canvas.height) {
            this.GuitarPicks.splice(i, 1);
            console.log('pick perdido');
            this.score -= 10;
        };
    });
};

Game.prototype.countDown = function() {

    if (this.time % 60 === 0) {
        this.totalTime--;
    } else if (this.totalTime === 0) {
        this.isGameOver = true;
    }

    var paragraph = document.querySelector('#countdown'); // seleccionamos la p del DOM
    paragraph.innerHTML = 'Time: ' + this.totalTime;
};

Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
};