class Rope{
    constructor(bodyA,pointB){
        var option ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:90
    
        }
    this.pointB = pointB
       this.rope= Constraint.create(option);
    
        World.add(world,this.rope);
    
    }
    display(){
        var pointA= this.rope.bodyA.position
        var pointB=this.pointB
        
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }