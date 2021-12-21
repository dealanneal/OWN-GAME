var bg, bgImg
var ground;
var balloon, balloonImg
var obsBottom1, obsBottom2, obsBottom3

function preload() {
  bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")
}



function setup(){

  createCanvas (1000, 1000);

  //creating a ground sprite
  ground = createSprite(200, 200, 50, 100);
  console.log(ground.position.x)
  ground.shapeColor = "black";

//background image
bg = createSprite(285,585,1,1);
//bg.addImage(bgImg);
bg.scale = 1.8


      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
          ground.collide(balloon);
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}