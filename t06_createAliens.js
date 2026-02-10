/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by FInley
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	//Setup
	console.log("setup: t06");
	cnv = new Canvas(1800, 900);
	world.gravity.y = 10;

	//Rectangle
	Rectangle = new Sprite(900, 450, 50, 25, 'd');
	Rectangle.color = '#03fca5';
	Rectangle.rotationSpeed = 2;
	Rectangle.vel.x = 0;

	/*
	//Circle
	Circle = new Sprite(900, 175, 100, 's');
	Circle.color = '#03fca5';
	*/

	//Walls
	wallTop = new Sprite(900, 0, 1800, 10, 'k');
	wallTop.rotation = 0;
	wallTop.color = '#fc0000';
	wallTop.bounciness = 0.5;

	wallBottom = new Sprite(900, 900, 1800, 10, 'k');
	wallBottom.rotation = 0;
	wallBottom.color = '#b700ff';
	wallBottom.bounciness = 0.4;

	wallLeft = new Sprite(0, 450, 8, 900, 'k');
	wallLeft.rotation = 0;
	wallLeft.color = '#15ff00';
	wallLeft.bounciness = 0.2;

	wallRight = new Sprite(1800, 450, 8, 900, 'k');
	wallRight.rotation = 0;
	wallRight.color = '#3700ff';
	wallRight.bounciness = 0.1;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#b8b8b8'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/