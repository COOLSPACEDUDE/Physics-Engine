class Ball{

constructor(x,y,r){
  var options={
        restitution:1.5
  }

  
    this.body = Bodies.circle(x,y,r,options)
    this.r = r
    World.add(world,this.body)
}
display(){
    var pos = this.body.position
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.r)
}
}