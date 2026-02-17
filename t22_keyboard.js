/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by finley
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	//Setup
	console.log("setup: 22");
	cnv = new Canvas(1800, 900);
	//world.gravity.y = 10;

	//Rectangle
	rectangle = new Sprite(900, 450, 100, 100, 'd');
	rectangle.color = '#03fca5';

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#b8b8b8'); 

	//Text
	text("Hello World", 50, 50, 2000, 2000) 

	//Keyboard Movement
	rectangle.vel.x = rectangle.vel.x/1.025;
	rectangle.vel.y = rectangle.vel.y/1.025;

	if (kb.pressing('a')) {
		// Set sprite's velocity to the left
		rectangle.vel.x = -5;
	};
	if (kb.pressing ('d')) {
		// Set sprite's velocity to the right
		rectangle.vel.x = 5;
	};
	if (kb.pressing ('w')) {
		// Set sprite's velocity to the up
		rectangle.vel.y = -5;
	};
	if (kb.pressing ('s')) {
		// Set sprite's velocity to the down
		rectangle.vel.y = 5;
	};

	//Keyboard Rotation
	rectangle.rotationSpeed = rectangle.rotationSpeed/1.03;

	//Rotate rectangle
	if (kb.pressing ('q')) {
		// Set sprite's rotation to the left
		rectangle.rotationSpeed = -1.5;
	};
	if (kb.pressing ('e')) {
		// Set sprite's rotation to the left
		rectangle.rotationSpeed = 1.5;
	};

	//Set rectangle straight
	if (kb.pressing ('f')) {
		rectangle.rotationSpeed = 0;
		rectangle.rotation = 0;
	} 

}

/*******************************************************/
//  END OF APP
/*******************************************************/