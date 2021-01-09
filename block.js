
class Block{
    
    constructor(x,y){
         
        var options = {
           density: 0.4,
           restitution: 0.2,
           friction: 0.3
        }
        
        this.body = Bodies.rectangle(x,y,30,50,options);
        World.add(world,this.body);
        //this.width = 30;
        //this.height = 50;
        this.block1 = loadImage("block1.png");
        this.visibility = 255;
        
    }
    display(){
        if(this.body.speed<8){
        push();
        imageMode(CENTER);
        fill(0);
        image(this.block1,this.body.position.x,this.body.position.y,30,50);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        pop();
        }
        else{
            
            push();
            
            this.visibility-=10;
            tint(255,this.visibility);
            image(this.block1,this.body.position.x,this.body.position.y,30,50);
            
            
            pop();
            World.remove(world,this.body);
        }

    }
    score(){
        if(this.visibility<100&& this.visibility>-900){
          score++;
        }
      }
}