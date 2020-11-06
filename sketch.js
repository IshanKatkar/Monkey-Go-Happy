
var monkey , monkey_running;
var banana ,bananaImage, Obstacle, ObstacleImage;
var FoodGroup;

var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 500);
  
monkey=createSprite(180,385,40,30)
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.2;



  
  
ground=createSprite(300,420,120000,10)
ground.velocityX=-4;
ground.width=ground.width /2;
ground.velocityX=0;

  FoodGroup=new Group();
  
  ObstacleGroup=new Group();
  
  
  survivalTime=0;
}

function draw() {
background("yellow")
  

  
  monkey.collide(ground);
  if(keyDown("space") && monkey.y >= 100){
  monkey.velocityY=-13
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(ObstacleGroup.isTouching(monkey)){

    monkey.velocityX=0;
    banana.velocityX=0;
    rock.velocityX=0;
  }
  
  
  monkey.velocityY = monkey.velocityY + 0.7
  
  
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
  }
    Food();
  Obstacle();
  drawSprites();
  
  stroke("white");
  textSize=20;
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize=20;
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  
  
  
}


function Food(){
if(frameCount%80===0){
  
  banana=createSprite(270,350,40,40);
  banana.addImage(bananaImage);
  banana.y=Math.round(random(120,200));
  banana.scale=0.2;
  banana.velocityX=-3;
  banana.lifetime=-100;
  FoodGroup.add(banana);

}
}


function Obstacle(){
if(frameCount%300===0){


  rock=createSprite(380,380,50,50);
  rock.addImage(ObstacleImage);
  rock.scale=0.2;
  rock.lifetime=-100;
  rock.velocityX=-3;
  ObstacleGroup.add(rock);
  
  
  
  
}




}

