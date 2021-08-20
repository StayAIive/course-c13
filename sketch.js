var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var cactus, cactusGroup, cImg1, cImg2, cImg3, cImg4, cImg5, cImg6;

var score = 0;

var newImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadAnimation("trex_collided.png");

  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png");

  cImg1 = loadImage("obstacle1.png");
  cImg2 = loadImage("obstacle2.png");
  cImg3 = loadImage("obstacle3.png");
  cImg4 = loadImage("obstacle4.png");
  cImg5 = loadImage("obstacle5.png");
  cImg6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  console.log("Hello" + 5)

}

function draw() {
  background(180);

  text("score: " + score, 500,50);
  score = score + Math.round(frameCount / 60);

  if (keyDown("space") && trex.y >= 150) {
    trex.velocityY = -13;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisibleGround);

  //spawn the clouds
  spawnClouds();
  spawnCactus();



  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10, 60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;


    //assigning lifetime to the variable
    cloud.lifetime = 210;

    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
  }
}

function spawnCactus() {

  if (frameCount % 60 == 0) {
    cactus = createSprite(600, 165, 10, 10);
    cactus.velocityX = -4;

    var rand = Math.round(random(1, 6));

    switch (rand) {
      case 1:
        cactus.addImage("1", cImg1);
        break;

      case 2:
        cactus.addImage("2", cImg2);
        break;

      case 3:
        cactus.addImage("3", cImg3);
        break;

      case 4:
        cactus.addImage("4", cImg4);
        break;

      case 5:
        cactus.addImage("5", cImg5);
        break;

      case 6:
        cactus.addImage("6", cImg6);
        break;

      default:
        break;
    }
    cactus.scale = 0.5;
    cactus.lifetime = 155;
  }

}

