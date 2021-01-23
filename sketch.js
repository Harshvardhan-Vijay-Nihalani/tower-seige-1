const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var platform;
var slingshot;

function preload() {

}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    polygon = new Polygon(200,250,20,20);

    
    ground = new Ground(600, 390, 1200,20);
  
    
    
    
    platform = new Ground(600, 305, 200, 20);

    box1 = new BaseClass(600,270);
    box2 = new BaseClass(580,270);  
    box3 = new BaseClass(620,270);
    box4 = new BaseClass(640,270);
    box5 = new BaseClass(560,270);
    box6 = new BaseClass(540,270);
    box7 = new BaseClass(660,270);
    fill("lightgreen");
    //floor 2
    box8 = new BaseClass(600,230);
    box9 = new BaseClass(620,230);
    box10 = new BaseClass(580,230);
    box11 = new BaseClass(560,230);
    box12 = new BaseClass(640,230);
    //floor 3
    box13 = new BaseClass(600,190);
    box14 = new BaseClass(620,190);
    box15 = new BaseClass(580,190);
    //last floor
    box16 = new BaseClass(600, 150);

    slingshot = new SlingShot(polygon.body,{x:200, y:250});
    
}

function draw(){
    background("blue");
    
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    polygon.display();
    platform.display();
    slingshot.display();   
    ground.display();
    Engine.update(engine); 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        Matter.Body.setPosition(polygon.body, { x: 200, y: 50 });
        slingshot.attach(polygon.body);
        
    }
}
