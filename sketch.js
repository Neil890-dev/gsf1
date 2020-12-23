var ball,wall,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24;

function setup(){
    createCanvas(600,600)

    ball = createSprite(200,200,10,10);
    wall = createSprite(17,50,30,100);
    wall2 = createSprite(55,115,100,30);
    wall3 = createSprite(90,30,30,70);  
    wall4 = createSprite()
    wall5 = createSprite()
    wall6 = createSprite()
    wall7 = createSprite()
    wall8 = createSprite()
    wall9 = createSprite()
    wall10 = createSprite()
    wall11 = createSprite()
    wall12 = createSprite()
    wall13 = createSprite()
    wall14 = createSprite()
    wall15 = createSprite()
    wall16 = createSprite()
    wall17 = createSprite()
    wall18 = createSprite()
    wall19 = createSprite()
    wall20 = createSprite()
    wall21 = createSprite()
    wall22 = createSprite()
    wall23 = createSprite()
    wall24 = createSprite()
    wall25 = createSprite()
    wall26 = createSprite()
    wall27 = createSprite()
    wall28 = createSprite()
    wall29 = createSprite()
    wall30 = createSprite()
    
}

function draw() {
  background("white");
 
    wall.shapeColor = ('#FF0000');
    wall2.shapeColor = ('#0000FF');
    wall3.shapeColor = ('green');

    ball.velocityY = 2;
    ball.velocityX = 3;
  
  
  if(ball.isTouching(wall) || ball.isTouching(wall2) || ball.isTouching(wall3)){
  ball.x=200;
  ball.y=200;
  ball.velocityX=0;
  ball.velocityY=0;
  }
  
  if(ball.x>35 && ball.x<70){
    text('you win',200,200);
  }
  
  if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -2;
  }
  
  if(keyDown(DOWN_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = 2;
  }
  
  if(keyDown(LEFT_ARROW)) {
    ball.velocityX = -2;
    ball.velocityY = 0;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    ball.velocityX = 2;
    ball.velocityY = 0;
  }
  
  drawSprites();
}