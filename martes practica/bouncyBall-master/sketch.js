//Clase 23
//Se crean objetos a partir de clases.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(180,300,50,50);
    box2 = new Box(210,100,50,100);
    box3 = new Box(50,33,13,12);

    ground = new Ground(200, 390, 340, 30);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();

    box3.display();

    ground.display();
} 









/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    var ball_options = {
        restitution: 1.0
    }
    
    //Se crea el piso y e agrega el objeto al mundo
    ground = Bodies.rectangle(200,390,200,20, ground_options);
    World.add(world, ground);

    //Se crea la pelota    
    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world, ball);

    console.log(ball);
    console.log(ground.position.x);
    console.log(ground.position.y);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20); //Deben de tener un ancho y un alto
}*/