/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by finley
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function preload() {


}

function setup() {
	//Setup
	console.log("setup: 22");
	cnv = new Canvas(1800, 900);
	world.gravity.y = 40;

	//Background (floor y is 850)

	bg1 = new Sprite(475, 785, 50, 130, 'n');
	bg1.color = '#7e7e7e';

	//Floor
	let isOnFloor = 1;

	floorGroup = new Group();
	hitBoxGroup = new Group();

	platform1 = new Sprite(475, 720, 50, 10, 'k');
	platform1.color = '#ee4410';
	platform1.strokeWeight = 0;
	floorGroup.add(platform1);

	platform2 = new Sprite(300, 725, 80, 250, 'k');
	platform2.color = '#ee4410';
	platform2.strokeWeight = 0;
	floorGroup.add(platform2);

	ground = new Sprite(900, 875, 1850, 50, 'k');
	ground.color = '#ee4410';
	ground.strokeWeight = 0;
	ground.bounciness = 0.3;
	floorGroup.add(ground);

	//Hitboxes

	hitBoxGround = new Sprite(900, 855, 1850, 10, 'k');
	hitBoxGround.color = '#ff00ea';
	hitBoxGround.color.setAlpha(1);
	hitBoxGround.strokeWeight = 0;
	hitBoxGround.bounciness = 0.3;
	hitBoxGroup.add(hitBoxGround);

	hitBoxPlatform1 = new Sprite(475, 718, 48, 6, 'k');
	hitBoxPlatform1.color = '#ff00ea';
	hitBoxPlatform1.color.setAlpha(1);
	hitBoxPlatform1.strokeWeight = 0;
	hitBoxPlatform1.bounciness = 0.3;
	hitBoxGroup.add(hitBoxPlatform1);

	hitBoxPlatform2 = new Sprite(300, 605, 78, 10, 'k');
	hitBoxPlatform2.color = '#ff00ea';
	hitBoxPlatform2.color.setAlpha(1);
	hitBoxPlatform2.strokeWeight = 0;
	hitBoxPlatform2.bounciness = 0.3;
	hitBoxGroup.add(hitBoxPlatform2);

	//Player
	player = new Sprite(900, 450, 75, 75, 'd');
	player.color = '#03fca5';
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
	player.vel.x = player.vel.x/1.04;
	player.rotationSpeed = player.rotationSpeed/1.035;

	//Jump
	if (hitBoxGroup.colliding(player)) {
		isOnFloor = 1;
	} else {
		isOnFloor = 0;
	};

	if (kb.pressing ('w') && isOnFloor == 1) {
		// Set sprite's velocity to the up
		player.vel.y = -15;
		isOnFloor = 0;
	};
	
	//Left
	if (kb.pressing('a')) {
		// Set sprite's velocity to the left
		player.vel.x = -6;
		player.rotationSpeed = -3.5;
	};

	//Right
	if (kb.pressing ('d')) {
		// Set sprite's velocity to the right
		player.vel.x = 6;
		player.rotationSpeed = 3.5;
	};

}

/*******************************************************/
//  END OF APP
/*******************************************************/