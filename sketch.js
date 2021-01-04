
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score,survivalTime;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
  
//creating monkey
  monkey = createSprite(30,370,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  
   //creating ground and its velocity
  ground = createSprite(300,390,1200,10)
  ground.velocityX = -10 

  //creating new groups
  obstacleGroup = new Group()
  foodGroup = new Group()
 
}


function draw() {
  
  //background colour
background("white");
   
  //resetting the ground
  if(ground.x <0 ){
      ground.x = ground.width/2
  }
  
  //gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
  //colliding so that monkey don't fall out
  monkey.collide(ground);
       
  //making monkey jump on pressing space
  if(keyDown("space")&&monkey.y >= 350) {
     monkey.velocityY = -18;
  }
  
  //survival time display
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime,100,50);  
 
  //spawing differnt functions
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
  
}

//spawing bananas
function spawnBananas(){
  
   if(frameCount % 80 == 0 ){
    banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 100;
     
    foodGroup.add(banana);
   }
}

//spawning obstacles
 function spawnObstacles(){
   if(frameCount % 300 == 0 ){
     obstacle = createSprite(400,368,10,10);
     obstacle.addImage("obstacle",obstacleImage);
     obstacle.velocityX = -4;
     obstacle.scale = 0.1;
      obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
     
   } 
   }