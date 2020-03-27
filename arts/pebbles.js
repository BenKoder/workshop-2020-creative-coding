/*
Welcome! Enter your name below if you want your art
to be in the app so we can put you in the credits!

Name: Ben Koder
*/

// Setup the canvas context object into the ctx variable
let canvas = document.getElementById('pebbles');
let ctx = canvas.getContext('2d');

// Constants
const height = 1080;
const width = 1080;

//functions
//Random Colour
function getRandomColor() {
    var hex = '0123456789ABCDEF';
    var hash = '#';
    for (var i = 0; i < 6; i++) {
      hash += hex[Math.floor(Math.random() * 16)];
    }
    return hash;
}
//Random X
function randX() {
  return Math.floor(Math.random() * width);
}
//Random Y
function randY() {
  return Math.floor(Math.random() * height);
}
//Random range
function randRange(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Draw background (a rectangle that fills the whole canvas)
ctx.fillStyle = getRandomColor();
ctx.fillRect(0, 0, height, width);
// Your code goes here!
var getsmol = 108;
for (i = 0; i < 108; i ++){
  ctx.shadowColor = getRandomColor();
  ctx.shadowBlur = getsmol;
  ctx.shadowOffsetY = 3;

  ctx.fillStyle = getRandomColor();
  ctx.beginPath();
  ctx.arc(randRange((height / 2) - getsmol, (height / 2) + getsmol),
          (randRange(height/2 + getsmol*5, height/2 + getsmol*5) - height/3),
          getsmol * 7.5, 0, 2 * Math.PI, false);
  ctx.fill();
  getsmol--;
}
