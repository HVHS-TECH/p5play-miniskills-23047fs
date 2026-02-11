/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by finley
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function preload() {
  imgBG = loadImage('assets/images/space.jpg');
  imgFace = loadImage('assets/images/face.png');

}

function setup() {
	console.log("setup:t20");
	cnv = new Canvas(1800, 900);

	ball = new Sprite(900, 450, 50, 'd');
	ball.bounciness = 1;
	ball.friction   = 0;
	ball.image = (imgFace);
	imgFace.resize(50, 50);

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/