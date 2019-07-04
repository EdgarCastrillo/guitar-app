'use strict'

function GuitarPicks(canvas, x) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = 50;
    this.width = 50;
    this.color = 'red';
    this.Points = '0';
    this.x = x;
    this.y = -20;
    this.direction = 1;
    this.velocity = 2;
    this.picks = document.getElementById(`picks-${Math.floor(Math.random() * (4 - 1) + 1)}`);
};

GuitarPicks.prototype.move = function() {
    this.y = this.y + this.direction * this.velocity;
}


GuitarPicks.prototype.draw = function() {
    this.ctx.drawImage(this.picks, this.x, this.y, this.width, this.height)
};