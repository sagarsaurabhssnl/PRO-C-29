class Block{
    constructor(x,y){
         var options={
           restitution: 0.3
         }
         this.body=Matter.Bodies.rectangle(x,y,25,35, options);
         Matter.World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0,0, 25,35);
        pop();
    }
}