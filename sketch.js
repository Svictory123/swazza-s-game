var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;
var bullets = 70


function preload(){
  bgImg = loadImage('bg.jpeg')
  shooterImg = loadImage('shooter_2.png')
  shooter_shooting = loadImage('shooter_3.png')
  zombieImg = loadImage('zombie.png')
  heart1Img = loadImage('heart_1.png')
  heart2Img = loadImage('heart_2.png')
  heart3Img = loadImage('heart_3.png')


}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
player. addImage(shooterImg)
player.scale =0.3

heart1 = createSprite(displayWidth-150, 40,20,20)
heart1.addImage(heart1Img)
heart1.scale =0.4
heart1.visible = false

heart2 = createSprite(displayWidth-100, 40,20,20)
heart2.addImage(heart2Img)
heart2.scale =0.4
heart2.visible = false

heart3 = createSprite(displayWidth-150, 40,20,20)
heart3.addImage(heart3Img)
heart3.scale =0.4
heart1.visible = false


zombieGroup = new Group()


bulletGroup = new Group()


}
  function draw(){
    background(0) 

if(keyDown('up_arrow')){
  player.y = player.y - 30
}

if(keyDown('down_arrow')){
  player.y = player.y + 30
}
if(keyWentDown('space')){
  player.addImage(shooter_shooting)
 bullet = createSprite(displayWidth-1150,player.y-30,20,10)
 bullet.velocityX = 20
 bulletGroup.add(bullet)

}

else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


if (zombieGroup.isTouching(bulletGroup)){
  for(var i = 0; i < zombieGroup.length; i++){
    if(zombieGroup[i].isTouching(bulletGroup)){
      zombieGroup[i].destroy()
      bulletGroup.destroyEach()
    }

  }

}

if (zombieGroup.isTouching(player)){
  for(var i = 0; i < zombieGroup.length; i++){
    if(zombieGroup[i].isTouching(player)){
      zombieGroup[i].destroy()
      
    }

  }

}

 enemy();
drawSprites();
}



//creating function to spawn zombies
function enemy(){
  if(frameCount%50===0){

    zombie = createSprite(random(500,1100),random(100,500),40,40);
zombie. addImage(zombieImg)
zombie.scale =0.2
zombie.velocityX = -3
zombieGroup.add(zombie)
  }
  }


