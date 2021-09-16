var pathImg,path,edges;
var jaxon,jaxon_Moving;
var border,Aborder;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  jaxon_Moving = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(900,750);
  //create sprites here
 path = createSprite(450,375,700,300);
 path.addImage("path",pathImg);
 path.velocityY=2;
 path.scale = 2;

jaxon = createSprite(460,550,50,50);
jaxon.addAnimation("jaxon",jaxon_Moving);
jaxon.scale = 0.1;

border = createSprite(820,375,100,750);
border.visible = false;
Aborder = createSprite(80,375,100,750);
Aborder.visible = false;

}

function draw() {
  background(0);


if(path.y > 400){
  path.y = height/2;
}
jaxon.x=World.mouseX;
 
jaxon.collide(border);
jaxon.collide(Aborder);
drawSprites();

}
