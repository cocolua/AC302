

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var mac1 = new Image();
var mac2 = new Image();
var mac3 = new Image();
var mac4 = new Image();
var mac5 = new Image();

mac1.src = "mac1.png";
mac2.src = "mac2.png";
mac3.src = "mac3.png";
mac4.src = "mac4.png";
mac5.src = "mac5.png";

mac1.onload = function(){

	ctx.drawImage(mac1,0,0, 100,100);
}
mac2.onload = function(){
	ctx.drawImage(mac2,150,150, 100,100);
}
mac3.onload = function(){
	ctx.drawImage(mac3,320,350, 100,100);
}
mac4.onload = function(){
	ctx.drawImage(mac4,450,150, 100,100);
}
mac5.onload = function(){
	ctx.drawImage(mac5,650,150, 100,100);
}

ctx.fillStyle = "rgb(242, 140, 242)";
ctx.fillRect(0,200, 800,200);
