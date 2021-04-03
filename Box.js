class Box{
    constructor(a,b,c,d){
        var order={
            'restitution':0.8, 
            'friction':1, 
            'density':1

        }
        this.box = Bodies.rectangle(a,b,c,d,order);
        World.add(world,this.box);

        this.width=c 
        this.height=d
    }
    display(){
         push();
         translate(this.box.position.x,this.box.position.y); 
         rotate(this.box.angle); 
         rectMode(CENTER); 
         fill("lime"); 
         rect(0, 0, this.width, this.height); 
         pop()
    }


}
