var caixa;

function setup() {
  createCanvas(400,400);
  caixa=createSprite(200,200,10,10);

}


function draw() 
{
  background(30);
  drawSprites();


if(keyIsDown(RIGHT_ARROW)){
 caixa.x = caixa.x + 5
}

if(keyIsDown(LEFT_ARROW)){
  caixa.x = caixa.x - 5
 }
 
 if(keyIsDown(DOWN_ARROW)){
  caixa.y = caixa.y + 5
 }
 
 if(keyIsDown(UP_ARROW)){
  caixa.y = caixa.y - 5
 }
 

}

