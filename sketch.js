const Engine = 	Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// add the variables
var Cradle1 , Cradle2 , Cradle3 , Cradle4 , Cradle5
var Top 
var line1 , line2 , line3 , line4 , line5 

function setup(){
// for the Canvas Size 
var canvas =  createCanvas(1300,800);
rectMode(CENTER);


engine = Engine.create();
world = engine.world;

// for the silling
Top = new Ground(600,100,1100,100);

// for the 5 different balls at diffrent places
Cradle1 = new ball(200,600,10);
Cradle2 = new ball(450,600,10);
Cradle3 = new ball(700,600,10);
Cradle4 = new ball(950,600,10);
Cradle5 = new ball(1200,600,10);

// for the 5 lines to be connected to the balls
line1 = new Chain(Cradle1.body,Top.body);
line2 = new Chain(Cradle2.body,top.body);
line3 = new Chain(Cradle3.body,Top.body);
line4 = new Chain(Cradle4.body,Top.body);
line5 = new Chain(Cradle5.body,Top.body);

}

function draw(){
    background("green")
    Engine.update(engine);

    // for the display of the Top
    Top.display();
    // for the display of the balls
    Cradle1.display();
    Cradle2.display();
    Cradle3.display();
    Cradle4.diaplay();
    Cradle5.display();
    // for the display of the line
    line1.display();
    line2.display();
    line3.display();
    line4.display();
    line5.display();
}


