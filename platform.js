class Platform{
    constructor(x,y, w,h){
         var options={
            isStatic: true
         }
         this.body=Matter.Bodies.rectangle(x,y,w,h, options);
         this.width =w;
         this.height= h;
         Matter.World.add(world, this.body);
    }

    display(){
        push();
        strokeWeight(2);
        stroke(0);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}