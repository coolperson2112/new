function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  c = createSprite(100,200,50,50)
  a.velocityX = -2
  c.velocityX = 2
  a.shapeColor = "blue"
  c.shapeColor = "purple"
}

function draw() {
  background(255,255,255);  
  v = createEdgeSprites()
  drawSprites();
  if (a.x === c.x){
    a.velocityX = 2
    c.velocityX = -2
  }
  console.log(a.x)
  if (a.x > 600){
    a.velocityX = -2
  }
  if (c.x <0){
    c.velocityX = 2
  }
}
