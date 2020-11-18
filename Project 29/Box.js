class Box{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
         stroke(0)
         fill(83,189,189);
         rect(pos.x, pos.y, this.width, this.height);
         if(this.body.speed < 3){
          display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           rectMode(CENTER);
           stroke(0)
           fill(83,189,189);
           rect(pos.x, pos.y, this.width, this.height);
           pop();
    } 
        }
    }
   
  
  


