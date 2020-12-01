
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(width/2,670,width,20)

	paper=new Paper(200,450,50)
	//Create the Bodies Here.
	
	leftbody= new Dustbin(1100,600,100,0);
	rightbody=new Dustbin(1300,600,100,0)
	basebody= new Dustbin(1200,650,200,90)
	Engine.run(engine);

}

	
  

	


function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
text(mouseX+","+mouseY,mouseX,mouseY)



  ground.display();
  paper.display();

  leftbody.display();
    rightbody.display();

  basebody.display();




}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-95});
  
	}
}
