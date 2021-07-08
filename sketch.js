var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf;
var appleImg;
var leafImg;
var orangeleaf;
var orangeleafImg;
var edges;
var grass, grassImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeLeaf.png");
  grassImg = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);

// 
garden=createSprite(200,200);
garden.addImage("garden",gardenImg);

//
grass = createSprite(200,380,50,50);
grass.addImage("grass",grassImg);
grass.scale = 0.09;

//
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbit",rabbitImg);

}
function createApples(){
  var rand = Math.round(random(0,60));
  if(frameCount % 60==rand){
var x = Math.round(random(50,350));
apple = createSprite(x,40,10,10);
apple.addImage("apple",appleImg);
apple.velocityY = 2;
apple.scale =0.09;
apple.depth = rabbit.depth;

  }
}

function createLeafs(){
  var rand = Math.round(random(0,60));
  if(frameCount % 60==rand){
  var x = Math.round(random(50,350));
leaf = createSprite(x,40,10,10);
leaf.addImage("leaf",leafImg);
leaf.velocityY = 2;
leaf.scale =0.09;
leaf.depth = rabbit.depth;

  }
}

function createOrangeLeafs (){
  
  var rand = Math.round(random(0,60));
  if(frameCount % 60==rand){
  var x = Math.round(random(50,350));
orangeleaf = createSprite(x,40,10,10);
orangeleaf.addImage("orangeleaf",orangeleafImg);
orangeleaf.velocityY = 2;
orangeleaf.scale =0.09;
orangeleaf.depth = rabbit.depth;

  }
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createLeafs();
  createOrangeLeafs();
  createApples();

  rabbit.x = World.mouseX;
  rabbit.depth = rabbit.depth +1

  drawSprites();
}