var dog,sadDog,happyDog,foodS;
var Feed,Addfood;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  Feed=createButton("Feed the dog");
  Feed.position(700,95);
  Feed.mousePressed(feedDog)

  Addfood=createButton("Add Food");
  Addfood.position(800,95);
  Addfood.mousePressed(addFoods);

  foodS = new Food(50,200,10,10);

}

function draw() {
  background(46,139,87);
  foodS.display();
  drawSprites();

}

function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }

}

function addFoods(){
  
  foodS++;
  //database.ref('/').update({
    Food:foodS
  
}
//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
