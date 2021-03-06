const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,w;
var ball;
function setup() {
  createCanvas(800,800);
  
  engine=Engine.create();
  w=engine.world;

ball=Bodies.circle(400,200,50,{restitution:0.5,density:0.0000001})

World.add(w,ball);

var property={isStatic:true,friction: 1};

  ground=Bodies.rectangle(200,400,400,20,property);
  World.add(w,ground);

  box1=new Box(100,200,80,80);
  box2=new Box(130,300,80,80);

Engine.run(engine);
console.log(ground.position.x);
}

  function draw() {
  background(0,0,0);  
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,50,50)

  box1.display();
  box2.display();
}