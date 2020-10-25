class Paper {
    constructor (x,y,width,height)
    {
        
    var options= {
        isStatic : false
        

       
    }
    this.body=Bodies.rectangle (x,y,width,height,options);
    this.width=width ;
    this.height=height;
    World.add(world,this.body);
    this.image=loadImage("sprites/paper.png")
    }
    display (){
    var pos=this.body.position;
    rectMode(CENTER);
    fill ("red");
    rect (pos.x,pos.y,this.width,this.height)
    image(this.image,200,200,80,80)
    }
   

};