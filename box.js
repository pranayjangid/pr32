class Box{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.7,
            friction:0.6,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.height = height;
        this.width = width;
        World.add(world, this.body);
        this.visibility = 255;

    }

    display(){
        if ( this.body.speed < 6){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        stroke("black");
        strokeWeight(2);
        rect(0,0,this.width,this.height)
        pop();
        }
    
    else {
        World.remove (world,this.body)
        push();
        this.visibility = this.visibility -5
        tint(255,this.visibility);
        
        pop();
      }
    }
    score(){
        if(this.visibility<0 && this.visibility >-110){
            score++;
        }
    }
}
