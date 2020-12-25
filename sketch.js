const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World=Matter.World;
const Constraint= Matter.Constraint;
var engine,world;
var ground,rope,ball,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20

function setup() {
createCanvas(1200,800);
engine= Engine.create();
world=engine.world;
ground=new  Ground(600,600,1200,20);
ball=new Ball(200,600,80,80);
rope=new Rope(ball.body,{x:500,y:50})
}

function draw() {
  Engine.update(engine)
  background(0);

  ground.display();
  rope.display();
ball.display();



  drawSprites();
}