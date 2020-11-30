class Chain{
    constructor(bodyA,bodyB){
        var opposite = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.03,
            lenght: 1 
        }

        this.chain = Constraint.create(opposite)
        World.add(world,this.chain)

    }

    display(){
        var pointA = this.chain.pointA.position;
        var pointB = this.chain.pointB.position;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }



}