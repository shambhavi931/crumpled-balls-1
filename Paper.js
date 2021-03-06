class Paper{
    constructor(x,y){
    var options={
        isStactic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }  

    this.width=50;
    this.height=50;
    this.body=Bodies.rectangle(x,y,50,50,options)
    World.add(world,this.body)
    }

    display(){
      angleMode(RADIANS)
      var pos=this.body.position
      var angle =this.body.angle
      //pos.x=mouseX
      //pos.y=mouseY
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      fill("rect")
      strokeWeight(4)
      stroke("black")
      rect(0,0,this.width,this.height)
      pop()
    }
}