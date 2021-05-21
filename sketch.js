
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body
const Constraint = Matter.Constraint;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(900, 400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 400, 600, 5);

  hero = new Hero(400,3,100,100);
  rope = new Rope(hero.body, { x: 100, y: 465 });
  monster = new Monster(410,200,100,100);

  box1 = new Box(280,380, 30, 40);
  box2 = new Box(310, 380, 30, 40);
  box3 = new Box(280, 340, 30, 40);
  box4 = new Box(310, 340, 30, 40); 
  box5 = new Box(280, 300, 30, 40);
  box6 = new Box(310, 300, 30, 40);
  box7 = new Box(280, 260, 30, 40);
  box8 = new Box(310, 260, 30, 40);
  box9 = new Box(310, 220, 30, 40); 
  box10= new Box(310, 180, 30, 40);
  box11= new Box(280, 220, 30, 40);

  Engine.run(engine)

}

function draw() {
  rectMode(CENTER)
  background(bg);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();
  box8.display()
  box9.display();
  box10.display();
  box11.display()

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mousePressed(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly()
}