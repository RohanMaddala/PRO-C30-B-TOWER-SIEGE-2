class invisible {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push();
      //fill("#D4A751");
      fill("#382C2C")
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  }