class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        push();
        if(this.sling.bodyA){
        stroke("blue");
        strokeWeight(5);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
        }
    }
    attach(body){
        this.sling.bodyA = body;
        
    }
}