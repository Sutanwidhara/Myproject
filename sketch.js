var backgroundImage , backgroundsp;
var spaceshipImage , spaceship;



function preload() {
backgroundImage = loadImage("./Assets/Spacebackground.jpg");
spaceshipImage = loadImage("./Assets/spaceship.png");
}

function setup() {
  createCanvas(600, 800);
  backgroundsp = createSprite( 400 , 500 );
  backgroundsp.addImage("space",backgroundImage);
  backgroundsp.velocityY = 2 ;

  spaceship = createSprite( 200 , 400);
  spaceship.addImage("spaceship",spaceshipImage);
  spaceship.scale = 0.5 ;
  spaceship.velocityY = -2 ;


}

function draw() {
  background(15,17,74);
  drawSprites();
  }

  
/*function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}*/
 