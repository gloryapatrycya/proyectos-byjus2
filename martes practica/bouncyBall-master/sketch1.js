const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(300,100,50,100);

    ground = new Ground(200, 390, 340, 20);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    
    ground.display();
} 

/*Código de la clase 23 Mi clase
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(300,100,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
}*/