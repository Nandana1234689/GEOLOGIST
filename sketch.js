const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box,box2;

function setup(){
      var canvas = createCanvas(1200,600);
      engine = Engine.create();
      world = engine.world;
      x=5

     g=new Ground(600,580)
     bird = new Bird()
     r = new Box (600,500,60,60)
     s = new Box(800,490,100,30)
     r2 = new Box(100,450,50,150)
     s2 = new Box(1100,350,80,80)
     r3 = new Box(380,300,100,40)

     var ball_options ={
        'restitution':1, 
        'friction':0.3, 
        'density':1.0
    }
                                          
     ball = Bodies.circle(500,400,20, ball_options);
     World.add(world,ball);
    
     ball2 = Bodies.circle(300,490,30, ball_options);
     World.add(world,ball2);
  
     ball3 = Bodies.circle(750,350,5, ball_options);
     World.add(world,ball3);
    }
function draw(){
     background(0);
     Engine.update(engine);
     
    
     bird.display()
     r.display()
     s.display()
     r2.display()
     s2.display()
     r3.display()
  
     fill("lime");
     ellipseMode(RADIUS);
     ellipse(ball.position.x, ball.position.y, 20, 20);
     ellipse(ball2.position.x, ball2.position.y, 30, 30);
     ellipse(ball3.position.x, ball3.position.y, 15, 15);
     
    

}