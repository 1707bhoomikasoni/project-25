class paper{
   constructor(x,y){
       var ballOption={
           isStatic:false,
           density:1.3,
           friction:0.5,
           restitution:0.5
     

       }
       this.body=Bodies.circle(x,y,55,ballOption)
  World.add(world,this.body)
   this.image=loadImage("images/paper.png")
    } 

display(){
       imageMode(CENTER)
       //fill("pink")
       image(this.image,this.body.position.x,this.body.position.y,80,80)
}

}