
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1 , bob2 , bob3, bob4 , bob5
var roof1
var rope1 , rope2 , rope3, rope4 , rope5


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(310,320,10)
bob2 = new Bob(330,320,10)
bob3 = new Bob(350,320,10)
bob4 = new Bob(370,320,10)
bob5 = new Bob(390,320,10)

roof1 = new Roof(350,200,150,30)

rope1 = new Rope(bob1.body,{x:310,y:200});
rope2 = new Rope(bob2.body,{x:330,y:200});
rope3 = new Rope(bob3.body,{x:350,y:200});
rope4 = new Rope(bob4.body,{x:370,y:200});
rope5 = new Rope(bob5.body,{x:390,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	 
	Body.applyForce(bob1.body,bob1.body.position,{x:-15 , y:25})
	
}


}

