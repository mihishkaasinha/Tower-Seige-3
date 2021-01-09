const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage,bg;
var polygon,slingshot;
var ground1,ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18;
var b19,b20,b21,b22,b23,b24;
var score = 0;
function preload(){
    bgImage = loadImage("bg2.jpg");
    timezone();
}

function setup(){
    createCanvas(1000,500);
    engine = Engine.create()
    world = engine.world;
    timezone();
    polygon = new Polygon(150,370,60,50);
    slingshot = new SlingShot(polygon.body,{x:150,y:370});
    ground1 = new Ground(480+30,250,250,10);
    ground2 = new Ground(780,420,280,10);
    b1 = new Block(370+33,225);
    b2 = new Block(400+33,225);
    b3 = new Block(430+33,225);
    b4 = new Block(460+33,225);
    b5 = new Block(490+33,225);
    b6 = new Block(520+33,225);
    b7 = new Block(550+33,225);
    b8 = new Block(580+33,225);
    b9 = new Block(433,200);
    b10 = new Block(463,200);
    b11 = new Block(493,200);
    b12 = new Block(523,200);
    b13 = new Block(553,200);
    b14 = new Block(583,200);
    b15 = new Block(463,175);
    b16 = new Block(493,175);
    b17 = new Block(523,175);
    b18 = new Block(553,175);
    b19 = new Block(773,395);
    b20 = new Block(803,395);
    b21 = new Block(788,370);
    b22 = new Block(788,345);
    b23 = new Block(788,320);
    b24 = new Block(788,295);
    
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    slingshot.display();
    polygon.display();
   
    ground1.display();
    ground2.display();
    stroke(225);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    
    stroke("yellow");
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    stroke("skyblue");
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    stroke("blue");
    b21.display();
    stroke("purple");
    b22.display();
    stroke("pink");
    b23.display();
    b24.display();
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b19.score();
    b10.score();
    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();
    b16.score();
    b17.score();
    b18.score();
    b19.score();
    b20.score();
    b21.score();
    b22.score();
    b23.score();
    b24.score();
    strokeWeight(1)
    textSize(25);
    text("Score: "+ score,700,100);
    
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    //slingshot.sling.length = 0;
    //slingshot.sling.stiffness = 0.001;
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body,{x:150,y:370});
        slingshot.attach(polygon.body);
    }
}
async function timezone()
{
    var time = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data = await time.json();
    console.log(data);
    var hour=data.datetime.slice(11, 13);
    if(hour > 06 && hour < 17){
        bg = "bg2.jpg";
    }
    else{
        bg = "bg.png";
    }
    bgImage = loadImage(bg);
}