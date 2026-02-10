/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by Finley
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	//Setup
	console.log("setup: t04");
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

	//Platform
	platform_top = new Sprite(900, 0, 1800, 10, 'k');
	platform_top.rotation = 0;
	platform_top.color = '#fc0000';
	platform_top.bounciness = 0.5;

	platform_bottom = new Sprite(900, 900, 1800, 10, 'k');
	platform_bottom.rotation = 0;
	platform_bottom.color = '#b700ff';
	platform_bottom.bounciness = 0.4;

	platform_left = new Sprite(0, 450, 900, 10, 'k');
	platform_left.rotation = 90;
	platform_left.color = '#15ff00';
	platform_left.bounciness = 0.2;

	platform_right = new Sprite(1800, 450, 900, 10, 'k');
	platform_right.rotation = 90;
	platform_right.color = '#3700ff';
	platform_right.bounciness = 0.1;
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