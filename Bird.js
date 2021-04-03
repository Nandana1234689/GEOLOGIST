class Bird{
   
        constructor(){
            var order={
                'restitution':0.8, 
                'friction':1, 
                'density':1
    
            }
            this.box = Bodies.rectangle(10,100, 50, 150, order);
            World.add(world,this.box);
    
         
        }
     
    display(){
 this.box.position.x=mouseX
     this.box.position.y=mouseY
     push();
     translate(this.box.position.x,this.box.position.y); 
     rotate(this.box.angle); 
     rectMode(CENTER); 
     fill("red"); 
     rect(0, 0, 50, 150); 
     pop()
    }
    

    
    }
    
    
    
    
   
            
    
         
   
