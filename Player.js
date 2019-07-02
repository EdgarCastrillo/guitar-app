'use strict'

function Player(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = '20';
    this.width = '20';
    this.color = 'blue';
    this.totalPoints = '';
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 40;
};

Player.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    this.ctx.stroke();
};