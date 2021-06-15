var mon1,mon2,mon3,player,prize,loser,dot, dotsGroup;
var monster1_img,monster2_img,monster3_img,player_img,prize_img,loser_img;
var score = 0;
var lives = 3;
var point1_img;
var count = 0;
var dots = [];
var gameState = "PLAY";

function preload(){
  monster1_img = loadImage("monster1.png");
  monster2_img = loadImage("monster2.png");
  player_img = loadImage("tomb.jpg");
  point1_img = loadImage("point1.png");
  monster3_img = loadImage("monster3.png");
  prize_img = loadImage("prize-cup-.png");
  loser_img = loadImage("loser-trophy.png")
}

function setup() {
  createCanvas(1000,500);

  dotsGroup = new Group();
  wallGroup = new Group();

  wallCreation();
  dotCreation();

  player = createSprite(900,430,85,100);
  player.addImage(player_img);
  //player.scale = 0.;

  mon1 = createSprite(207,408,85,100);
  mon1.addImage(monster1_img);
  mon1.scale = 0.07;
  mon1.velocityX = 1;

  mon2 = createSprite(390,180,85,100);
  mon2.addImage(monster2_img);
  mon2.scale = 0.2;
  mon2.velocityY = 1;
  
  mon3 = createSprite(659,159,100,100);
  mon3.addImage(monster3_img);
  mon3.scale = 0.2;
  mon3.velocityX = 3;
  mon3.velocityY = 3;

  prize = createSprite(390,300,100,100);
  prize.addImage(prize_img);
  prize.scale = 0.5;
  prize.visible = false;

  loser = createSprite(390,300,100,100);
  loser.addImage(loser_img);
  loser.scale = 0.5;
  loser.visible = false;

}

function draw() {
  background("black");
  textSize(20);
  text("SCORE: " + score,860,20);
  text(mouseX + ":" + mouseY,mouseX,mouseY);

  if(gameState === "PLAY"){
    if(keyDown(UP_ARROW)){
      player.y -= 5;
    }
    if(keyDown(DOWN_ARROW)){
      player.y += 5;
    }
    if(keyDown(RIGHT_ARROW)){
      player.x += 5;
    }
    if(keyDown(LEFT_ARROW)){
      player.x -= 5;
    }
  
    for(var i =0;i< count; i++){ 
      dots[i].check(); 
    }

    mon2.bounceOff(wallGroup);
    mon1.bounceOff(wallGroup);
    mon3.bounceOff(wallGroup);
    player.bounceOff(wallGroup);

    if(player.isTouching(mon1) || player.isTouching(mon2) || player.isTouching(mon3) ){
       gameState = "LOSE";
    }

    if(score === count){
      gameState = "WIN";
    }
  }

  else if(gameState === "LOSE") {
      loser.visible = true;
      textSize(30);
      textAlign(CENTER);
      text("YOU LOST THE GAME" ,390,450);
  }

  else {
      textSize(30);
      textAlign(CENTER);
      text("CONGRATULATION" ,390,390);
      prize_img.visble = true;
  }
  
  drawSprites();
}

function dotCreation() {
  //dot line 1
  for(var i = 290; i< 860; i+= 40){
    dots.push(new Dot(i,430));
    count++;
  }
  
  for(var i = 366; i<= 409; i+= 40){
    dots.push(new Dot(290,i));
    count++;
  }
  // dot line 3
  for(var i = 360; i<= 460; i+= 40){
    dots.push(new Dot(228,i));
    count++;
  }
  //dot line 4
  for(var i = 650; i<= 710; i+= 40){
    dots.push(new Dot(i,360));
    count++;
  }
  
  for(var i = 655; i<= 710; i+= 40){
    dots.push(new Dot(i,310));
    count++;
  }
  
  for(var i = 655; i<= 710; i+= 40){
    dots.push(new Dot(i,280));
    count++;
  }
  
  for(var i = 655; i<= 710; i+= 40){
    dots.push(new Dot(i,250));
    count++;
  }

  for(var i = 170; i<= 400; i+= 40){
    dots.push(new Dot(890,i));
    count++;
  }
  for(var i = 180; i<= 450; i+= 40){
    dots.push(new Dot(50,i));
    count++;
  }
  for(var i = 50; i<= 870; i+= 40){
    dots.push(new Dot(i,150));
    count++;
  }
}



