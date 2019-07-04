'use strict'

function Player(canvas, x, y, numPlayer) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = 100;
    this.width = 100;
    this.color = 'blue';
    this.totalPoints = '';
    this.x = x;
    this.y = y;
    this.lives = 3;
    this.btn = document.getElementById(`btn-${numPlayer}`);
    this.btnHover = document.getElementById(`btn-${numPlayer}-hover`);
    this.isPush = false;
};

Player.prototype.draw = function() {
    if (!this.isPush) {
        this.ctx.drawImage(this.btn, this.x, this.y, this.width, this.height)
    } else {
        this.ctx.drawImage(this.btnHover, this.x, this.y, this.width, this.height)
    }
    // this.ctx.fillStyle = this.color;
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
};