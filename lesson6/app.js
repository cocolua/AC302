
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var width = 600;
var height = 600;
var x = 300;
var y = 300;
var r = 50;
var my =0;
var mx = 0;

var circleX;
var circleY;
var circleR = 50;
var collided = false;
var score = 0;



function drawPacman()
{
 
 var pacman = new Image();
 pacman.src = "pacman.png";
 ctx.drawImage(pacman, x, y, 50, 50);
}

function drawCircle()
{
	var circle = new Image();
	circle.src = "circle.png";
	ctx.drawImage(circle, circleX, circleY, circleR, circleR);
}

function clear()
{
	ctx.clearRect(0,0, width, height);
}

function init()
{
	circleX = Math.floor(Math.random()*(width-circleR));
	circleY = Math.floor(Math.random()*(height-circleR));
	window.onkeydown = keydownControl;
	return setInterval(draw, 10);
}

function draw()
{
	clear();
	drawPacman();
	drawCircle();
	// Tells our sprite to bounce off the walls and go in the opposite direction
	if (x + mx > width - r || x + mx < 0){
		mx = -mx;
	} else if (y + my > height - r || y + my < 0) {
		my = -my;
	}

	// Moves our sprite
	x += mx;  
	y += my;
	collisonCheck();
	handleCollison();

}
// onload works but have to set src outside the drawPacman fuction
//pacman.onload = drawPacman;

function keydownControl(e) {
	// Change the direction depending on which button is pressed
	if(e.keyCode == 37) {
		mx = -4;
		my = 0;
	} else if (e.keyCode == 38) {
		mx = 0;
		my = -4;
	} else if (e.keyCode == 39) {
		mx = 4;
		my = 0;
	} else if (e.keyCode == 40) {
		mx = 0;
		my = 4;
	}
}

function collisonCheck()
{
	if ((x + r >= circleX) && (x<=circleX + circleR) &&
		(y+r >= circleY) && (y <= circleY + circleR))
		{
			collided = true;
			
		}
		else
		{
			collided = false;
		}
}

function handleCollison()
{
	if (collided){
	    circleX = Math.floor(Math.random() * (width-circleR));
	    circleY = Math.floor(Math.random() * (height-circleR));
	    score++;
		$("#score").text("Score: " + score);
		//document.getElementById("score").innerHTML = "Score :" + score;
	}
	
} 

function moveCircle()
{
	circleX = Math.floor(Math.random() * (width-circleR));
	    circleY = Math.floor(Math.random() * (height-circleR));
	}

init();
setInterval(moveCircle, 2000);

