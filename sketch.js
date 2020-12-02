var h1;

function preload(){
  upload1= new Uploadlvl1();
}

function setup() {
  createCanvas(1280,1280);
 // background(255,2,200);
 arrange1= new Arrange1();
 //h1 = createSprite(200,200,20,20);
}

function draw() {
  background(bg);  
  drawSprites();
}