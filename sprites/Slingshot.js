class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:40
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.Slingshot= Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    
    display(){
        image(this.sling1, 150,20);
        image(this.sling2, 122,10);
        if(this.Slingshot.bodyA){
            var posA= this.Slingshot.bodyA.position ;//position is x and y coordinates
            var posB= this.Slingshot.pointB ;//pointb already has x and y values, so position is not needed
             //line(start x, start y, end x, end y)
             strokeWeight(4);
             stroke(40,16,5);
             if(posA.x<160){
                line(posA.x-20,posA.y,posB.x,posB.y);
                line(posA.x-20,posA.y,posB.x+30,posB.y+5);
                image(this.sling3, posA.x-26,posA.y-6,10,16);

             }
             else{
                line(posA.x+23,posA.y,posB.x,posB.y);
                line(posA.x+23,posA.y,posB.x+30,posB.y+5);
                image(this.sling3, posA.x+23,posA.y-6,10,16);

             }
            
        }
}
// constraint is feature that connect two bodies
//you dont need to write 'function' in a class
fly(){
    this.Slingshot.bodyA=null
    //to remove the bird from the body completely 
    //its free now;; gets destoryed temporarily 
}

}
/*
class name{ //extends parentclass
   // arg1,2,3...they are all your values you want to pass through the sketch.js

constructor(arg1,arg,2,arg3){
    //properties
    var options= {

    }
    this.entity = Bodies .rectangle....
}

methodname(){

}

}
*/
