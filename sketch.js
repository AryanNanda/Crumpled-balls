
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ball1 = new Ball(80,200,50)
	dus1 = new Dustbin (200,200,150,100)
	ground = new Ground(400,690,800,20)
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(255);
  ball1.display();
  dus1.display();
  ground.display();
  
  drawSprites();
}
function keyPressed(){
if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:73,y:-73});
}
}



