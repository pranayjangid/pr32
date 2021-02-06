const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine , world;
var ground,stand1 ,stand2;
var polygon;
var slingShot;
var g_image,backgroundImg;
var score = 0;
function preload()
{
  g_image =  loadImage("polygon.png");
  getBackgroundcolour();
}

function setup() {
var canvas = 	createCanvas(1200, 500);

engine = Engine.create();
world = engine.world;
Engine.run(engine);
	

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
  stand1 = new Ground(400,350,250,10);
  stand2 = new Ground(700,200,200,10);
 
 
  box1 = new Box(310,275,30,40);
  box2  = new Box(340 ,275,30,40);
  box3  = new Box(370 ,275,30,40);
  box4  = new Box(400 ,275,30,40);
  box5  = new Box(430 ,275,30,40);
  box6  = new Box(460 ,275,30,40);
  box7   = new Box(490,275,30,40);
  box8  = new Box(330,235,30,40);
  box9  = new Box(360,235,30,40);
  box10  = new Box(390,235,30,40);
  box11  = new Box(420,235,30,40);
  box12  = new Box(450,235,30,40);

  box13  = new Box(360,195,30,40);
  box14  = new Box(390,195,30,40);
  box15  = new Box(420,195,30,40);

  box16  = new Box(390,155,30,40);

  boxs1   = new Box(640,175,30,40);
  boxs2  = new Box(670,175,30,40);
  boxs3  = new Box(700,175,30,40);
  boxs4  = new Box(730,175,30,40);
  boxs5  = new Box(760,175,30,40);

  boxs6 = new Box(670,135,30,40);
  boxs7  = new Box(700,135,30,40);
  boxs8  = new Box(730,135,30,40);
  boxs9  = new Box(700,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:110,y:160});

  
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
  
  rectMode(CENTER);
  fill("blue");
  textSize(24);
  text("Drag the Hexagonal Stone and Release it to launch it towards the blocks",100,70);
 textSize(30);
 fill ("red");
 text ("SCORE "+ score,500,450);
  ground.display();
  stand1.display ();
  stand2.display ();
  fill("skyblue");
  box1.display();
  fill("skyblue");
  box2.display();
  fill("skyblue");
  box3.display();
  fill("skyblue");
  box4 .display();
  fill("skyblue");
  box5 .display();
  fill("skyblue");
  box6 .display();
  fill("skyblue");
  box7 .display();
  fill("pink");
  box8 .display();
  box9 .display();
  box10 .display();
  box11 .display();
  box12 .display();
  fill("turquoise");
  box13 .display();
  box14 .display();
  box15 .display();
  fill("grey");
  box16 .display();

  fill("skyblue");
  boxs1.display();
  fill("skyblue");
  boxs2.display();
  fill("skyblue");
  boxs3.display();
  fill("skyblue");
  boxs4 .display();
  fill("skyblue");
  boxs5 .display();
  fill("pink");
  boxs6 .display();
  boxs7 .display();
  boxs8 .display();
  fill("grey");
  boxs9 .display();
slingShot.display();

box1.score ();
box2 .score ();
box3 .score ();
box4 .score ();
box5 .score ();
box6 .score ();
box7 .score ();
box8 .score ();
box9 .score ();
box10 .score ();
box11.score ();
box12.score ();
box13.score ();
box14 .score ();
box15.score ();
box16.score ();

boxs1.score ();
boxs2.score ();
boxs3.score ();
boxs4.score ();
boxs5.score ();
boxs6.score ();
boxs7.score ();
boxs8.score ();
boxs9.score ();

var position = this.polygon.position;
imageMode(CENTER);
image(g_image,polygon.position.x,position.y,40,40);
  drawSprites();
 
}
function mouseDragged(){

  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {

	if(keyCode === 32) {
		slingShot.attach(this.polygon);
  }
  
}

async function getBackgroundcolour(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var JSONdata =  await response.json();
  console.log(JSONdata);
  var dateTime = JSONdata.datetime;
  console.log(dateTime);
  var Hour =  dateTime.slice(11,13);
  console.log(Hour);
if ( Hour > 06 && Hour < 19){
  bg = "g.png"
}
else{ 
  bg = "g3.jpg"
}
backgroundImg = loadImage(bg);

}




