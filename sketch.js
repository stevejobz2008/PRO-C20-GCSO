var car;
var wall;

var speed;
var weight;

var deformation;





function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = rgb(80,80,80);
 
  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
}

function draw() {
background(255,255,255);
  
 

  if(car.isTouching(wall)){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed/2250;
  }

  if(deformation < 100){
    car.shapeColor = rgb(0,255,0);
  }
 else if(deformation > 100 && deformation < 180){
    car.shapeColor = rgb(230,230,0);
 }
 else if(deformation > 180){
    car.shapeColor = rgb(255,0,0);
 }

  drawSprites();
}