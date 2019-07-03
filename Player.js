'use strict'

function Player(canvas, x, y) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = '30';
    this.width = '30';
    this.color = 'blue';
    this.totalPoints = '';
    this.x = x;
    this.y = y;
    this.lives = 3;
};

Player.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    // this.ctx.stroke();
};

Player.prototype.setTouch = function(newTouch) {
    this.touch = newTouch;
};