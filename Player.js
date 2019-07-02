'use strict'

function Player(canvas) {
    this.canvas = canvas;
    this.ctx = cnavas.getContext('2d');
    this.height = '20';
    this.width = '20';
    this.color = 'blue';
    this.totalPoints = '';
    this.x = this.canvas.width / 2;
    this.y = '20';
};