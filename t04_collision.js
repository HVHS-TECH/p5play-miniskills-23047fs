/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
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
	platform_1 = new Sprite(900, 700, 400, 10, 'k');
	platform_1.rotation = 0.2;
	platform_1.color = '#9e49bf';
	platform_1.bounciness = 1;
	platform_1.friction = 0.5;
	platform_1.drag = 0;
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