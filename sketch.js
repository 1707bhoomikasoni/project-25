var box1,ground,ball,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
 box3=new Box(1200,530,30,100)
  box2=new Box(1290,530,10,300)
  box1=new Box(1200,530,200,15)
  ground=new Ground(width/2,650,1500,10)
  ball=new paper(200,645)

}


function draw() {
  rectMode(CENTER);
  background("grey");
  keyPressed()
  ellipseMode(CENTER)
  drawSprites();
  ball.display()
  box2.display()
  box3.display()
  box1.display()

 
ground.display()

}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:+26,y:-25})
  }
}

