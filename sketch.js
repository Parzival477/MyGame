var bg;
var player, player_img;
var invisible1;
var movingPlayer_img;
var invisible2;
var player2,movingPlayer_img2;
var invisible3;
var enemy1,movingEnemy_img1;
var enemy1, movingEnemy_2;
var enemy1E1, enemy1E2;
var enemy2E1, enemy2E2;
var enemy1E1_image, enemy1E2_image;
var score = 0;
var mode ;

function preload(){
 bg = loadImage("background.jpg") 
 player_img = loadImage("COK1.png")
 player_img2 = loadImage("COC1.png")
 enemy_img1 = loadImage("COB1.png")
 movingPlayer_img = loadAnimation("COK2.png","COK3.png","COK4.png")
 movingPlayer_img2 = loadAnimation("COC1.png","COC2.png","COC3.png","COC4.png","COC5.png")
 movingEnemy_img1 = loadAnimation("COB1.png","COB2.png","COB3.png","COB4.png","COB5.png")
 enemy1E1_image = loadImage("COBB1.png")
 enemy1E2_image = loadImage("COBB2.png")
 enemy2E1_image = loadImage("COBB1.png")
 enemy2E2_image = loadImage("COBB2.png")
}


function setup() {
  mode  = 0
  createCanvas(800,400);
  player = createSprite(200,200,50,50)
  player2 = createSprite(100,250,50,50)
  player2.scale = 0.2
  enemy1 = createSprite(550,350,50,50)
  enemy1.scale = 0.8
  enemy2 = createSprite(550,250,50,50)
  enemy2.scale = 0.8
  enemy1E1 = createSprite(550,300,50,25)
  enemy1E2 = createSprite(550,400,50,25)
  enemy2E1 = createSprite(500,200,50,25)
  enemy2E2 = createSprite(400,200,50,25)
  player.addImage("img",player_img)
  player2.addImage("img2",player_img2)
  enemy1.addImage("img3",enemy_img1)
  enemy2.addImage("img3",enemy_img1)
  player.addAnimation("Katana",movingPlayer_img)
  player2.addAnimation("Corpsman",movingPlayer_img2)
  enemy1.addAnimation("Bullet",movingPlayer_img2)
  enemy2.addAnimation("Bullet",movingPlayer_img2)
  enemy1E1.addImage("Blast",enemy1E1_image)
  enemy1E2.addImage("Blast",enemy1E2_image)
 


  invisible1 = createSprite(500,350,50,50)
  invisible1.visible = false


invisible2 = createSprite(500,250,50,50)
  invisible2.visible = false
  
enemy1E1.visible = false
enemy1E2.visible = false
enemy2E1.visible = false
enemy2E2.visible = false

}

function draw() {
  clear()
 if(mode === 0){
   background("white")
   
   text("Hello, fellow soldier!You have been assigned a mission. You have to destroy the enemy base. ",200,200)
   text("So to kill the enemy turrets, you will have press the right in front to direct your troops to move.",200,300)
   text("Press enter to start",300,400)
 }
 if(mode === 1){
  background(bg);  
  if(mousePressedOver(invisible1)){
    player.x = 500;
    player.y = 350;
    player.changeAnimation("Katana",(movingPlayer_img))
  }

  if(mousePressedOver(invisible2)){
    player2.x = 500;
    player2.y = 250;
    player2.changeAnimation("Corpsman",movingPlayer_img2)
  }
  if(player.collide(enemy1)){
   enemy1.visible = false
   enemy1E1.visible = true
   enemy1E2.visible = true
   score = score + Math.round(random(200,300))
  }
  if(player2.collide(enemy2)){
    enemy2.visible = false
    enemy2E1.visible = true
    enemy2E2.visible = true
    score = score + Math.round(random(200,300))
   }
  

  drawSprites();
  fill("white")
  text("score = "+ score, 100,200 )
}
 if(mode = 2){
   background = white
 }



}

function keyPressed(){
  if(keyCode === ENTER){
    mode = 1
  }
}