class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bird.body,
            bodyB:constrainedLog.body,
            stiffness:0.04,
            lenght:10
        }
        this.chain = constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }


}