class ball{
    constructor(x,y,r){
       var Name ={
            isStatic:true,
            friction:0.3,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,Name)
        World.add(world,this.body);
    }
    display()
    {
        var ballpos = this.body.position;

        push()
        translate(ballpos.x,ballpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill("Pink")
        pop()
    }

}



