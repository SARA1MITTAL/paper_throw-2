
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;

var engine,world;

 
function setup() {

	var canvas = createCanvas (1200,400);
    engine = Engine.create();
	world = engine.world;
	
	dustbin1= new Dustbin (1000,370,100,10);
	dustbin2= new Dustbin (950,330,10,70);
	dustbin3= new Dustbin (1050,330,10,70);
	
	
	ground = new Ground(600,height,1200,20);
	paper = new Paper (200,200,20,20);
   
}
function draw() {
  


	background("white");
	Engine.update (engine);

	

	paper.display();
	dustbin1.display();
	dustbin2.display();
    dustbin3.display();
	ground.display();

  
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
}
}



