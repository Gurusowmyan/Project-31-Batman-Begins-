const Engine = Matter.Engine;
const World=Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,bodies;
var thunder1,thunder2,thunder;
var umbrella;
var drops=[];
var maxDrops =100;
var rain;


var thunderCreatedFrame=0
function preload(){
    thunder1=loadImage("images/1.png");
    thunder2=loadImage("images/2.png");
}

function setup(){
    createCanvas(400,1200); 
    engine=Engine.create();
    world =engine.world;

    
    umbrella=new Umbrella(200,500,100);
    
    if(frameCount%150 === 0){
    for(var i=0; i<maxDrops; i++){
        drops.push( new Drops(random(0,400),random(0,400),10));
      }
    }
}

function draw(){
   
    background(0);
    Engine.update(engine);

    Thunder();
    umbrella.display();
   
    

   /* if(this.rain.position.y > height) {
        Matter.Body.position(this.rain,{x:random(0,400),y:random(0,400)});
                }
                if(this.rain.position.y>height){
                    Matter.Body.setPosition(this.rain,{x:random(0,400),x:random(0,400)})
                }

                */
for(var i =0;i<maxDrops;i++){
drops[i].display();
drops[i].updateY();
}




drawSprites();

}   
function Thunder() {
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0) {
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,370),random(10,30),10,10);
    switch(rand) {
        case 1:thunder.addImage(thunder1);
        break;
        case 2:thunder.addImage(thunder2);
        break;
        default:break;
    }
    thunder.scale =random(0.3,0.6);
    }


    if(thunderCreatedFrame+10===frameCount &&thunder){
        thunder.destroy();
    }
}
