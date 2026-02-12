/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by finley
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	//Setup
	console.log("setup: 21");
	cnv = new Canvas(1800, 900);
	world.gravity.y = 10;

	//Rectangle
	rectangle = new Sprite(900, 450, 100, 100, 'd');
	rectangle.color = '#03fca5';
	rectangle.rotationSpeed = 2;
	rectangle.vel.x = 0.1;
	rectangle.vel.y = 0.1;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#b8b8b8'); 

	//rectangle.moveTowards(mouseX, mouseY, 0.02);
	if (mouse.presses()) {
		rectangle.moveTo(mouseX, mouseY, 12);
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/