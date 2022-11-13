const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    var ground1_options = {
        isStatic: true
    }


    var ball_options = {
        restitution: 0.2
    }
    
    //Se crea el piso y e agrega el objeto al mundo
    ground = Bodies.rectangle(200,390,200,20, ground_options);
    World.add(world, ground);


    ground1 = Bodies.rectangle(350,90,100,200, ground1_options);
    World.add(world, ground1);



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


    rectMode(CENTER);
    rect(ground1.position.x,ground1.position.y,200,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20); //Deben de tener un ancho y un alto
}