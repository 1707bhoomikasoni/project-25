class Box{
    constructor(x,y,width){
        var option={
            
                isStatic:true
            
            }
       

    this.body=Bodies.rectangle(x,y,width,50,option)
   this.width=width
    World.add(world,this.body)
    this.image=loadImage("images/dustbingreen.png")
}
    display(){
    imageMode(CENTER)
   fill("white")
    image(this.image,this.body.position.x,this.body.position.y,this.width,250)
   
}
}