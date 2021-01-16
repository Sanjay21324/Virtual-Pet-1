var dog; 
var happyDog;
var database;
var foodS, foodStock;

function preload()
{
 dog = loadImage("dogImg.jpg");
 happyDog= loadImage("dogImg1.jpg");
}

function setup() {
  createCanvas(500, 500);

dog = createSprite(250,250,20,20);
dog.addImage(dog);


  foodStock=database.ref("Food")
  foodStock.on("value,readStock");
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

  drawSprites();
  Text("Press UP_ARROW Key To Feed Charlie Milk!" ,20,20)
  textSize

}



