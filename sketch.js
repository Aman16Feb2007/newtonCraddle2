
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var R;
var C1;
var B1;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/1.5, windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	R = new Roof(400,120,800,20);

	B1 = new Bob(250,300, "yellow");
	B2 = new Bob(300,300, "green");
	B3 = new Bob(350,300, "red");
	B4 = new Bob(400,300, "green");
	B5 = new Bob(450,300, "yellow");



	C1 = new Connection(B1.body, R.body, -150,0);
	C2 = new Connection(B2.body, R.body, -75,0);
	C3 = new Connection(B3.body, R.body, 0,0);
	C4 = new Connection(B4.body, R.body, 75,0);
	C5 = new Connection(B5.body, R.body, 150,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

	R.display();

	B1.display();
	B2.display();
	B3.display();
	B4.display();
	B5.display();

	C1.display();
	C2.display();
	C3.display();
	C4.display();
	C5.display();
}

/*function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(B1.body, B1.body.position , {x:-200 , y:0});
	}

}*/

function mouseDragged(){
	Matter.Body.setPosition(B1.body, {x:mouseX, y:mouseY});

}