
var ground,groundImage;
var obstacle;
var openImage;
var player,playerImage
var input,button;
var name1;
var gameState="wait"
var bg,bgImage
var obImage,obImag
var bgImg;
var x1 = 0;
var x2;
var obGroup
var scrollSpeed = 2;
var obImage1
var playerJump;
var invisibleground;
var score 


var start,startimg,play,playimg,exit,exitimg,pause,pauseimg

function preload(){


startimg=loadImage("start.png")


playimg=loadImage("play.png")

pauseimg=loadImage("pause.png")

exitimg=loadImage("exit.png")





  bgImg = loadImage("bgnew.jpg");
openImage=loadImage("start1.jpg")
insturctionsimg=loadImage("instructions.jpg")


//bgImage=loadImage("start.png")
playerImage=loadAnimation("run1.png","run5.png","run6.png")
playerJump=loadImage("jump2.png")


obImag=loadImage("ob1.png")
obImage=loadImage("ob6.png")
obImage1=loadImage("ob5.png")
newimg=loadImage("Zombie.png")

}


function setup() {
 createCanvas(displayWidth, displayHeight-displayHeight/7);
 score=0

  x2 = width;
  //createCanvas(windowWidth-10, windowHeight-30);
  //background('green')
obGroup=new Group()
 
play=createSprite(100,100)
play.addImage(playimg)
play.visible=false

pause=createSprite(100,200)
pause.addImage(pauseimg)
pause.visible=false

exit=createSprite(100,200)
exit.addImage(exitimg)
exit.visible=false

ground=createSprite(windowWidth/2,windowHeight/2,width,height)
ground.addImage(openImage)
ground.scale=2.845

invisibleground=createSprite(width/2,height,width,10)
invisibleground.visible=false

player=createSprite(width/4,height-height/3,100,100)
player.addAnimation("running",playerImage)

player.scale=0.5
player.visible=false

start=createSprite(width/2,height-height/10)
start.addImage(startimg)

instructions=createSprite(width/2,height/2)
instructions.addImage(insturctionsimg)
instructions.visible=false
/*input=createInput("name")
button=createButton("submit")
input.position(width/2,height/2+100);
button.position(width/2+200,height/2+100)*/
}

function draw() {

  if (mousePressedOver(start)) {
ground.visible=false
instructions.visible=true
gameState="start"
play.visible=true
exit.visible=true
pause.visible=true

  }



  fill("Yellow")
  strokeWeight(3)
  stroke("red")
  text("Score: "+ score, 500,50);
  //background("green");
  image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);
  
  console.log(player.y)
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  if (keyDown("space") && player.y>=589){
    player.velocityY=-19
  }

 player.velocityY=player.velocityY+0.5


  /*if(bg.x<0){
    bg.x=bg.width/2
  }*/
  /*button.mousePressed(()=>{
    input.hide()
    button.hide()
    var name=input.value()
    name1=name
    gameState="level1"
    
  })*/
 

if(gameState==="level1"){
  // background(bgImage)
ground.visible=false
//bg.visible=true
player.visible=true
score = score + Math.round(frameCount/90);



SpawnObstacles()
if(obGroup.isTouching(player)){
  // player.visible=false
  obGroup.setVelocityXEach(0)
 player.addImage(playerJump)
 }
 
}
player.collide(invisibleground)
drawSprites()

if (gameState==="wait"){
textSize(100)
fill("Yellow")
strokeWeight(10)
stroke("red")
text("WAR ZONE",width/3,height/2)
text("DARE TO FIGHT WITH US",width/8,height/2+ 200)
}
}

function SpawnObstacles(){
  if (frameCount % 80 === 0){
     obstacle = createSprite(width,(height-height/12),0,40);
    obstacle.velocityX = -6
var no =Math.round(random(1,3))
switch(no){
case 1:  obstacle.addImage(obImage)
break;
case 2: obstacle.addImage(obImag)
break;
case 3:obstacle.addImage(obImage1)
break;
default: break;

}
obstacle.lifetime = 300;
obGroup.add(obstacle)

}}


