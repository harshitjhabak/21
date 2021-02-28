var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200,200,thickness,height/2);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
}

function draw() {
  background(0); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage  = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if (damage>10) 
    {
      wall.shapeColor = color(255,0,0);
    }

    if (damage<10) 
    {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if (bulletRightEdge>=wallLeftEdge) 
  {
    return true;
  }
   return false;
}