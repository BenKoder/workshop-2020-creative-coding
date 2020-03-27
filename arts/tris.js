/*
Welcome! Enter your name below if you want your art
to be in the app so we can put you in the credits!

Name: Ben Koder
*/

// Setup the canvas context object into the ctx variable
let canvas = document.getElementById('tris');
let ctx = canvas.getContext('2d');

// Constants
const height = 1080;
const width = 1080;
const centreX = width/2;
const centreY = height/2;
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
//draw a triangle pointing up
function drawTriangleUp(x, y, scale) {
  let height = scale  * Math.cos(Math.PI / 6);
  ctx.beginPath();
  ctx.moveTo(x - scale, y);//Left
  ctx.lineTo(x + scale, y);//Right
  ctx.lineTo(x, y - height * 2);//Top
  ctx.closePath();

  // the fill color
  ctx.fill();
}
//draw a triangle pointing down
function drawTriangleDown(x, y, scale) {
  let height = scale * Math.cos(Math.PI / 6);
  ctx.beginPath();
  ctx.moveTo(x -scale, y);//Left
  ctx.lineTo(x + scale, y);//Right
  ctx.lineTo(x, y + height * 2);//Top
  ctx.closePath();

  // the fill color
  ctx.fill();
}
// Draw background (a rectangle that fills the whole canvas)
ctx.fillStyle = getRandomColor();
ctx.fillRect(0, 0, height, width);
// Your code goes here!

var scale = 100;
var patternX = 0;
var patternY = 0;
//I dunno just put randomcolor in random
for (i = 0; i < 12; i++){ //left to right
  //
  for (j = 0; j < 8; j++){ //top to bottom
    //draws a diamond shape using two triangles, one pointing up, the other down
    //Origin is at the line perpendicular to the origin
    ctx.fillStyle = getRandomColor();
    drawTriangleUp(patternX, patternY, scale);
    ctx.fillStyle = getRandomColor();
    drawTriangleDown(patternX, patternY-1, scale); //-1 on Y axis to avoid weird sub-pixel gaps
    patternY += height/Math.PI * scale/200; //maths on this checks out

    }
  patternY = 0;
  patternX += width/5.4 * scale/200; //maths on this does not check out...

}
