'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE

ctx.strokeStyle="green";
ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(300,100);
ctx.stroke();

ctx.strokeStyle="red";
ctx.beginPath();
ctx.moveTo(400,200);
ctx.lineTo(200,200);
ctx.stroke();

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

// ctx.moveTo(300,300);
// ctx.lineTo(300,100);