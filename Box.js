class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.Visibility = 225;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
    else{
      world.remove(world, this.body);
      push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
    }
  }

  score(){
    if(this.Visibility < 0 && this.Visibility>-1005){
      score++;
    }
  }
  };
