'use strict'

function GuitarPicks(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = 30;
    this.width = 30;
    this.color = 'red';
    this.Points = '0';
    this.x = (this.canvas.width / 2) - 15;
    this.y = -20;
    this.direction = 1;
    this.velocity = 2;
};

GuitarPicks.prototype.move = function() {
    this.y = this.y + this.direction * this.velocity;
}


GuitarPicks.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
};