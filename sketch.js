var rectangle_1
var rectangle_2
var rectangle_3
var rectangle_4
function setup() {
  createCanvas(800,400);
 rectangle_1 = createSprite(400, 200, 50, 50);
  rectangle_2=createSprite(100,200,50,50);
  rectangle_1.shapeColor="blue";
  rectangle_2.shapeColor="red";
//  rectangle_1.velocityX=-3;
  //rectangle_2.velocityX=3;
rectangle_3=createSprite(200,100,50,50);
rectangle_4=createSprite(200,200,50,50);
rectangle_3.shapeColor="yellow";
rectangle_4.shapeColor="orange";

}

function draw() {
  background(0,0,0);  
 rectangle_1.y=World.mouseY;
  rectangle_1.x=World.mouseX;

if(isTouching(rectangle_1,rectangle_4)){
  rectangle_1.shapeColor="green";
      rectangle_4.shapeColor="green";
}
else{rectangle_1.shapeColor="blue";
rectangle_4.shapeColor="blue";}
if(rectangle_1.x-rectangle_2.x<rectangle_1.width/2+rectangle_2.width/2&&
  rectangle_2.x-rectangle_1.x<rectangle_1.width/2+rectangle_2.width/2){
    rectangle_1.velocityX=rectangle_1.velocityX*(-1)
    rectangle_2.velocityX=rectangle_2.velocityX*(-1)
  }
  drawSprites();
}
