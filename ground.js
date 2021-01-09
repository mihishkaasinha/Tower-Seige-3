class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            friction: 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var body = this.body.position;
        rectMode(CENTER);
        fill(0)
        stroke(215, 37, 222);
        strokeWeight(3);
        rect(body.x,body.y,this.width,this.height);
    }
}