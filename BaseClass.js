class BaseClass{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.width = 20;
        this.height = 30;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        
        World.add(world, this.body);
      }
      display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this. width, this.height)
        pop();
      }
}