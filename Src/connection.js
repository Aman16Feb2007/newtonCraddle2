class Connection{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x : this.offsetX, y : this.offsetY},
            stiffness : 0.5,
            length : 250,
            
        }
        this.body = Constraint.create(options);
        
        World.add(world, this.body);
    }

    display(){
        var posa = this.body.bodyA.position;
        var posb = this.body.bodyB.position;
        strokeWeight(3);
        line(posa.x, posa.y, posb.x + this.offsetX, posb.y+this.offsetY);
    }
}