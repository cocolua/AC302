
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(150,25);
ctx.lineTo(225,150);
ctx.lineTo(75,150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();



var c1 = document.getElementById("one");

var ctx1 = c1.getContext("2d");

for (i=0; i < 50; i++)
{
ctx1.beginPath();
var colour = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")" ;
ctx1.strokeStyle = colour;
ctx1.arc(Math.floor(Math.random()*450),Math.floor(Math.random()*450),Math.floor(Math.random()*20),0,6.24);
var fillOptions = [true, false];
var toFill = fillOptions[Math.floor(Math.random()*2)] ;
if(toFill)
{
ctx1.fillStyle = colour;
ctx1.fill();
}
ctx1.closePath();
ctx1.stroke();
}


