
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  monkey = createSprite(50,height-20,20,50);
  
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(600,height-20,2000,20);
  ground.velocityX = -(6);
  
  gameOver = createSprite(width/2,height/2);
  
  
  restart = createSprite(width/2,height/2 + 40);

  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
 
  
}

  



function draw() {
   background (255)
    if (ground.x < 0){
      ground.x = 600
    }
  
    monkey.collide(ground);
  
   if(keyDown("space") && monkey.y >= height - 61) {
      monkey.velocityY = -12;
    }
      monkey.velocityY = monkey.velocityY + 0.5
  
     spawnBananas();
     spawnObstacles();
     drawSprites();
}
function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(width,height-60,40,10);
    banana.y = Math.round(random(height-180,height - 100));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(width,height-35,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6);
    
     obstacle.addImage(obstacleImage)
   
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}





