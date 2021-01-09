class Polygon{
    constructor(x,y,width,height){
        var options = {
            
            friction: 0.5,
            density: 0.8,
            restitution: 0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
        this.width = width;
        this.height = height;
    }
    display(){
        push();
        
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        pop();
    }
}