var robot
var plasma

function preload() {
  robotImg = loadImage("Robot.png")
  backgroundImg = loadImage("BgImg.jpg")
}

function setup() {
  canvas = createCanvas(850, 400);
  bg = createSprite(450, 200)
  bg.addImage(backgroundImg)
  //plasma = createSprite(5,5,20,20)
  robot = createSprite(250, 200)
  robot.addImage(robotImg)
  robot.scale = 0.2
  plasmaGroup=new Group()
  enemyGroup=new Group()
}

function draw() {
  background(backgroundImg);

  move()
  shoot()
  //spawnPlasma()
  if (keyDown("space")) {
    robot.velocityY = -10
  }
  robot.velocityY=robot.velocityY+0.5
  if (keyDown("f")) {
    shootPlasma()
  }

  if (frameCount % 80 === 0) {
    spawnEnemy();
  }
  drawSprites()

}

function shoot() {

}

function move() {
  if (keyDown("w")) {
    robot.y -= 5
  }
  if (keyDown("s")) {
    robot.y += 5
  }
  if (keyDown("a")) {
    robot.x -= 5
  }
  if (keyDown("d")) {
    robot.x += 5
  }
  

}

function spawnEnemy(){
  enemy = createSprite(800,random(20,780),40,40);
 // enemy.addImage(enemyImg);
 // enemy.scale = 0.1;
  enemy.velocityX = -2;
  enemy.lifetime = 400;
  enemyGroup.add(enemy);
}

function handleBubbleCollision(plasmaGroup){
 
     score=score+1;
 
  bulletGroup.destroyEach()
  bubbleGroup.destroyEach()
}

function shootPlasma(){
  plasma= createSprite(250, width/2, 50,20)
  plasma.y= robot.y-20
  //bullet.addImage(bulletImg)
  plasma.scale=0.12
  plasma.velocityX= 7
  plasmaGroup.add(plasma)
}
