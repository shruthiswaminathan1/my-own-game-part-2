

var girlimg,girl;
var road;


function preload(){
  roadimg = loadImage("images/road.jpg");
  girlimg =loadAnimation("images/running3.png","images/running1.png","images/running2.png");
  girlimg1 = loadImage("images/standing.png");
  car1 = loadImage("images/car1.png");
  car2 = loadImage("images/car1.png");
  car3 = loadImage("images/car1.png");
  car4 = loadImage("images/car1.png");
  car5 = loadImage("images/car1.png");
  car6 = loadImage("images/car1.png");
  car7 = loadImage("images/car1.png");
  car8 = loadImage("images/car1.png");
  car9 = loadImage("images/car1.png");
  car10 = loadImage("images/car1.png");
  
 }

function setup() {
  createCanvas(800,400);

  road = createSprite(400,200,10,10);
  road.addImage("road",roadimg);
  girl = createSprite(400, 200, 50, 50);
  girl.addImage("girl",girlimg1);
  girl.scale=0.5;


  carGroup = new Group();
}

function draw() {
  background(255,255,255);  


if(keyDown(UP_ARROW)){
  girl.y-=3;
  //girl.x = girl.x-3
}
if(keyDown(DOWN_ARROW)){
  girl.y+=3;
}
if(keyDown(LEFT_ARROW)){
  girl.x-=3;
}
if(keyDown(RIGHT_ARROW)){
  girl.x+=3;
}

//call the function for car
spawncars();

  drawSprites();
}
function spawncars(){
  if(frameCount%80===0){
    position = Math.round(random(1,2));
    car=createSprite(400,200,20,20);
    console.log(position)
     //using random variable change the position of fruit, to make it more challenging
    
    if(position==1)
    {
    car.x=400;
    car.velocityX= -7;
    }
    else
    {
      if(position==2){
      car.x=0;
      
  //Increase the velocity of fruit after score 4 or 10
      car.velocityX= 7;
      }
    }
    
   
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      car.addImage(car1);
    } else if (r == 2) {
      car.addImage(car1);
    } else if (r == 3) {
      car.addImage(car1);
    } else {
      car.addImage(car1);
    }
    
    car.y=Math.round(random(50,340));
   
    
    car.lifetime=100;
    
    carGroup.add(car);
  }
}

