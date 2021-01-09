var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSprite, box;
var engine, world, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite=createSprite(300, 630, 15, 60);
	boxSprite.shapeColor=color("red")

	boxSprite2=createSprite(500, 630, 15, 60);
	boxSprite2.shapeColor=color("red")

	boxSprite3=createSprite(400, 652, 187, 15);
	boxSprite3.shapeColor=color("red")
	
	engine = Engine.create();
	world = engine.world;
    
	var ground_option={
		isStatic : true,
	}

	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_option);
	 World.add(world, ground);

	box = Bodies.rectangle(400, 652, 187, 15);
	World.add(world, box);
	 	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

Engine.update(engine);

  packageSprite.x = packageBody.position.x
  packageSprite.y = packageBody.position.y

  boxSprite3.x = box.position.x
  boxSprite3.x = box.position.x

  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false);

  }
}