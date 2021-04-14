class Ball{
    constructor(x,y,radius,options){
   var options={
        friction:0.1,
        isStatic:false,
        density:1,
   }
   this.body=Bodies.circle(x,y,radius)
   this.radius=radius
   World.add(world,this.body)
}

display(){
   var angle=this.body.angle
   push()
   translate(this.body.position.x,this.body.position.y)
   rotate(angle)   
   ellipseMode(RADIUS)
   ellipse(0,0,this.radius,this.radius)
   rotate()
   pop()
 }
}