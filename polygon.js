class Polygon {
    constructor(x, y, r) {
        var options = {

        }
        this.body = Matter.Bodies.polygon(x, y, 6, r, options, 6);
        this.radius = r;
        Matter.World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rotate(PI/6)
        for (var i = 0; i < 6; i++) {
            noStroke();
            fill("#FFA500");
            triangle(0, 0, -15, 25, 15, 25);
            rotate(PI / 3);
        }
        pop();
    }
}