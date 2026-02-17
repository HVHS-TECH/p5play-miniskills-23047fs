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
	world.gravity.y = 40;

	//Rectangle
	rectangle = new Sprite(900, 450, 100, 100, 'd');
	rectangle.color = '#03fca5';

	//Ground
	let isOnFloor = 1;

	groundGroup = new Group();

	platform = new Sprite(1400, 500, 1000, 10, 'k');
	platform.color = '#6a3899';
	platform.rotation = 315;
	groundGroup.add(platform);

	floor = new Sprite(900, 875, 1850, 50, 'k');
	floor.color = '#ee4410';
	floor.bounciness = 0.3;
	groundGroup.add(floor);

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#b8b8b8'); 

	//Text
	text("Mouse X " + round(mouse.x), 900, 400);
	text("Mouse Y " + round(mouse.y), 900, 350);

	//Keyboard Movement
	rectangle.vel.x = rectangle.vel.x/1.04;
	rectangle.rotationSpeed = rectangle.rotationSpeed/1.035;

	//Jump
	if (groundGroup.colliding(rectangle)) {
		isOnFloor = 1;
	} else {
		isOnFloor = 0;
	};
	if (kb.pressing ('w') && isOnFloor == 1) {
		// Set sprite's velocity to the up
		rectangle.vel.y = -15;
		isOnFloor = 0;
	};
	
	//Left
	if (kb.pressing('a')) {
		// Set sprite's velocity to the left
		rectangle.vel.x = -6;
		rectangle.rotationSpeed = -3.5;
	};

	//Right
	if (kb.pressing ('d')) {
		// Set sprite's velocity to the right
		rectangle.vel.x = 6;
		rectangle.rotationSpeed = 3.5;
	};

}

/*******************************************************/
//  END OF APP
/*******************************************************/