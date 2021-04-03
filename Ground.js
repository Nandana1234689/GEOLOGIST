class Ground{
  constructor(a,b){
    var order1={
        isStatic: true
    }
   this.ground = Bodies.rectangle(a,b,1200,30,order1);
    World.add(world,this.ground);

}
display(){
    
    rectMode(CENTER);
    fill(255);
    rect(this.ground.position.x,this.ground.position.y,1200,30);
    
}


}