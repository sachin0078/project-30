const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(800,400);
  
  
  engine = Engine.create();
    world = engine.world;

  stand=new Ground(600,300,300,20);

  //level 1
  block1 = new Box(480,260,40,60);
  block2 = new Box(520,260,40,60);
  block3 = new Box(560,260,40,60);
  block4 = new Box(600,260,40,60);
  block5 = new Box(640,260,40,60);
  block6 = new Box(680,260,40,60);
  block7 = new Box(720,260,40,60);

  //level 2
  block8 = new Box(520,200,40,60);
  block9 = new Box(560,200,40,60);
  block10 = new Box(600,200,40,60);
  block11 = new Box(640,200,40,60);
  block12 = new Box(680,200,40,60);

  //level 3
  block13 = new Box(560,140,40,60);
  block14 = new Box(640,140,40,60);
  block15 = new Box(600,140,40,60);

  //top
  block16 = new Box(600,80,40,60);
 
 polygon=new Polygon(100,250,30,30);

  slingShot = new SlingShot(polygon.body,{x:100,y:200});

  Engine.run(engine);
  
}

function draw() {
 
  background("grey");  
  text(mouseX+"-"+ mouseY,400,50)

  Engine.update(engine);
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();
  
  polygon.display();
  slingShot.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:250})
     slingShot.attach(polygon.body);
  }
}