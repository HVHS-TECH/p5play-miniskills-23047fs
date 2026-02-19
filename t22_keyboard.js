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

	bg1 = new Sprite(475, 785, 100, 130, 'n');
	bg1.color = '#7e7e7e';

	bg2 = new Sprite(100, 785, 100, 130, 'n');
	bg2.color = '#7e7e7e';

	bg3 = new Sprite(850, 695, 100, 310, 'n');
	bg3.color = '#7e7e7e';

	bg4 = new Sprite(1220, 713, 100, 275, 'n');
	bg4.color = '#7e7e7e';

	//Floor
	let isOnFloor = 1;
	let isClimbing = 1;

	floorGroup = new Group();
	hitBoxGroup = new Group();
	ladderGroup = new Group();
	jumpPadGroup = new Group();

	ground = new Sprite(900, 875, 1850, 50, 'k');
	ground.color = '#ee4410';
	ground.strokeWeight = 0;
	ground.bounciness = 0.3;
	floorGroup.add(ground);

	platform1 = new Sprite(475, 720, 100, 10, 'k');
	platform1.color = '#ee4410';
	platform1.strokeWeight = 0;
	floorGroup.add(platform1);

	platform2 = new Sprite(300, 725, 80, 250, 'k');
	platform2.color = '#ee4410';
	platform2.strokeWeight = 0;
	floorGroup.add(platform2);

	platform3 = new Sprite(100, 720, 100, 10, 'k');
	platform3.color = '#ee4410';
	platform3.strokeWeight = 0;
	floorGroup.add(platform3);

	platform4 = new Sprite(850, 540, 100, 10, 'k');
	platform4.color = '#ee4410';
	platform4.strokeWeight = 0;
	floorGroup.add(platform4);

	platform5 = new Sprite(1220, 575, 100, 10, 'k');
	platform5.color = '#ee4410';
	platform5.strokeWeight = 0;
	floorGroup.add(platform5);

	//Walls
	wall1 = new Sprite(795, 695, 10, 320, 'k');
	wall1.color = '#ee4410';
	wall1.strokeWeight = 0;
	floorGroup.add(wall1);

	//Ladders
	ladder1 = new Sprite(1440, 650, 10, 400, 'k');
	ladder1.color = '#56ee10';
	ladder1.strokeWeight = 0;
	ladderGroup.add(ladder1);

	//Jump Pad
	jumpPad1 = new Sprite(1035, 854, 150, 10, 'k');
	jumpPad1.color = '#7810ee';
	jumpPad1.strokeWeight = 0;
	jumpPadGroup.add(jumpPad1);

	//Hitboxes
	hitBoxGround = new Sprite(900, 855, 1850, 10, 'k');
	hitBoxGround.color = '#ff00ea';
	hitBoxGround.color.setAlpha(1);
	hitBoxGround.strokeWeight = 0;
	hitBoxGround.bounciness = 0.3;
	hitBoxGroup.add(hitBoxGround);

	hitBoxPlatform1 = new Sprite(475, 718, 98, 6, 'k');
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

	hitBoxPlatform3 = new Sprite(100, 718, 98, 6, 'k');
	hitBoxPlatform3.color = '#ff00ea';
	hitBoxPlatform3.color.setAlpha(1);
	hitBoxPlatform3.strokeWeight = 0;
	hitBoxPlatform3.bounciness = 0.3;
	hitBoxGroup.add(hitBoxPlatform3);

	hitBoxPlatform4 = new Sprite(850, 538, 98, 10, 'k');
	hitBoxPlatform4.color = '#ff00ea';
	hitBoxPlatform4.color.setAlpha(1);
	hitBoxPlatform4.strokeWeight = 0;
	hitBoxPlatform4.bounciness = 0.3;
	hitBoxGroup.add(hitBoxPlatform4);

	hitBoxPlatform5 = new Sprite(1220, 573, 98, 10, 'k');
	hitBoxPlatform5.color = '#ff00ea';
	hitBoxPlatform5.color.setAlpha(1);
	hitBoxPlatform5.strokeWeight = 0;
	hitBoxPlatform5.bounciness = 0.3;
	hitBoxGroup.add(hitBoxPlatform5);

	//Player
	player = new Sprite(850, 810, 75, 75, 'd');
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

	//Climbing
	if (ladderGroup.colliding(player)) {
		isClimbing = 1;
	} else {
		isClimbing = 0;
	};

	if (kb.pressing ('w') && isClimbing == 1) {
		// Set sprite's velocity to the up
		player.vel.y = -10;
		isClimbing = 0;
	};
	
	//Jumping on Jump Pads
	if (jumpPadGroup.colliding(player) && isOnFloor == 0) {
		isOnFloor = 0;
		//Reverse player y velocity and add a bit
		player.vel.y = (player.vel.y * -1) - 5;
	};

	//Left
	if (kb.pressing('a') && kb.pressing('q')) {
		// Set sprite's velocity to the left
		player.vel.x = -1;
	} else if (kb.pressing('a')) {
		// Set sprite's velocity to the left
		player.vel.x = -6;
		player.rotationSpeed = -2.5;
	};

	//Right
	if (kb.pressing('d') && kb.pressing('q')) {
		// Set sprite's velocity to the left
		player.vel.x = 1;
	} else if (kb.pressing ('d')) {
		// Set sprite's velocity to the right
		player.vel.x = 6;
		player.rotationSpeed = 2.5;
	};

}

/*******************************************************/
//  END OF APP
/*******************************************************/