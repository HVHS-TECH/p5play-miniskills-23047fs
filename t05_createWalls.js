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
	Rectangle = new Sprite(900, 450, 100, 100, 'd');
	Rectangle.color = '#03fca5';
	Rectangle.rotationSpeed = 2;
	Rectangle.vel.x = 2;

	/*
	//Circle
	Circle = new Sprite(900, 175, 100, 's');
	Circle.color = '#03fca5';
	*/

	//Platform
	platform_1 = new Sprite(900, 0, 900, 10, 'k');
	platform_1.rotation = 0;
	platform_1.color = '#fc0000';
	platform_1.bounciness = 1;

	platform_2 = new Sprite(900, 1800, 900, 10, 'k');
	platform_2.rotation = 0;
	platform_2.color = '#b700ff';
	platform_2.bounciness = 1;

	platform_3 = new Sprite(0, 450, 1800, 10, 'k');
	platform_3.rotation = 90;
	platform_3.color = '#15ff00';
	platform_3.bounciness = 1;

	platform_4 = new Sprite(1800, 450, 1800, 10, 'k');
	platform_4.rotation = 90;
	platform_4.color = '#3700ff';
	platform_4.bounciness = 1;
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