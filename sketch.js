
var player,playerImg;
var Bullet,bulletImg;
var enemy,enemyImg;
var invisible;
var bgImg,bg;
var Inb;


function preload(){

playerImg=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
enemyImg=loadImage("e3.png");
bulletImg=loadImage("b.png");
bgImg=loadImage("bg1.png");

}

function setup() {

  var canvas= createCanvas(1000,500);
  canvas.position(280,120)

  bg=createSprite(500,200,800,400)
  bg.addImage("bg",bgImg)
  bg.velocityX=-2;
  bg.scale=1.5;

  Bullet=createSprite(195,225)
  Bullet.addImage("b",bulletImg)
  Bullet.scale=0.2;

  player=createSprite(200,400)
  player.addAnimation("pImg",playerImg)
  player.scale=1.3;

  enemy=createSprite(800,280)
  enemy.addImage("eImg",enemyImg)
  enemy.scale=0.6;

  invisible=createSprite(400,450,700,20)
  invisible.visible=false;

  Inb=createSprite(1000,230,10,90)
  Inb.visible=false;

}

function draw() {

  background(0);

  player.collide(invisible);

  if(bg.x<0){
   bg.x=bg.width/2
  }

 if(keyDown("SPACE")){
   Bullet.velocityX=18;
  }

  if(Bullet.isTouching(Inb)){
    Bullet.x=200;
    Bullet.y=230;
    Bullet.velocityX=0;
  }


  drawSprites();

  textSize(20)
  fill("black")
  text("PRESS SPACE TO FIRE",400,100)

  }

/*
function spawnBg(){

  if(frameCount % 100 === 0 ){

    var bg=createSprite(player.x+100,200,800,400)
        bg.addImage("bg",bgImg)

        player.depth=bg.depth+1;
  }

}*/