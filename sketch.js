const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;
var ball8;
var ball9;
var ball10;
var ball11;
var ball12;
var ball13;
var ball14;

function setup(){
    var canvas = createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

var ball_options = {
    restitution: 0.8
}
    var ball2_options = {
        restitution: 0.9
}
var ball3_options = {
  restitution: 0.9
}
var ball4_options = {
  restitution: 0.9
}
var ball5_options = {
  restitution: 0.9
}
var ball6_options = {
  restitution: 0.9
}
var ball7_options = {
  restitution: 0.9
}
var ball8_options = {
  restitution: 0.9
}
var ball9_options = {
  restitution: 0.9
}
var ball10_options = {
  restitution: 0.9
}
var ball11_options = {
  restitution: 0.9
}
var ball12_options = {
  restitution: 0.9
}
var ball13_options = {
  restitution: 0.9
}
var ball14_options = {
  restitution: 0.9
}

ball = Bodies.circle(50,0,20,ball_options);
ball2 = Bodies.circle(100,0,20,ball2_options);
ball3 = Bodies.circle(150,0,20,ball3_options);
ball4 = Bodies.circle(200,0,20,ball4_options);
ball5 = Bodies.circle(250,0,20,ball5_options);
ball6 = Bodies.circle(300,0,20,ball6_options);
ball7 = Bodies.circle(350,0,20,ball7_options);
ball8 = Bodies.circle(400,0,20,ball8_options);
ball9 = Bodies.circle(450,0,20,ball9_options);
ball10 = Bodies.circle(500,0,20,ball10_options);
ball11 = Bodies.circle(550,0,20,ball11_options);
ball12 = Bodies.circle(600,0,20,ball12_options);
ball13 = Bodies.circle(220,0,20,ball13_options);
ball14 = Bodies.circle(20,0,20,ball14_options);
World.add(world,ball);
World.add(world,ball2);
    console.log(ground);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
rectMode(RADIUS);
    rect(ball.position.x,ball.position.y,5,10);

   rectMode(RADIUS);
    rect(ball2.position.x,ball2.position.y,5,10);

    rectMode(RADIUS);
    rect(ball3.position.x,ball.position.y,5,10);

   rectMode(RADIUS);
    rect(ball4.position.x,ball2.position.y,5,10);
    
    rectMode(RADIUS);
    rect(ball5.position.x,ball.position.y,5,10);

   rectMode(RADIUS);
    rect(ball6.position.x,ball2.position.y,5,10);

    rectMode(RADIUS);
    rect(ball7.position.x,ball.position.y,5,10);

   rectMode(RADIUS);
    rect(ball8.position.x,ball2.position.y,5,10);

    rectMode(RADIUS);
    rect(ball9.position.x,ball.position.y,5,10);

   rectMode(RADIUS);
    rect(ball10.position.x,ball2.position.y,5,10);

    rectMode(RADIUS);
    rect(ball11.position.x,ball.position.y,5,10);

   rectMode(RADIUS);
    rect(ball12.position.x,ball2.position.y,5,10);

    rectMode(RADIUS);
    rect(ball13.position.x,ball.position.y,5,10);

   rectMode(RADIUS);
    rect(ball14.position.x,ball2.position.y,5,10);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
}