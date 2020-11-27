class String{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length:10
        }
        this.body= Matter.Constraint.create(options);
        Matter.World.add(world, this.body);
    }
    throw(){
        this.body.bodyA=null;
    }
    attach(body){
        this.body.bodyA=body;
    }
    display(){
        if(this.body.bodyA){
        push();
        strokeWeight(3);
        stroke(0);
        line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.body.pointB.x, this.body.pointB.y);
        pop();
        }
    }    
}