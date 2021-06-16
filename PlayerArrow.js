class PlayerArrow {
  constructor(x, y, width, height) {
    this.trajectory=[];
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("arrow.png");
    World.add(world, this.body);
  }

  shoot(archerAngle) {
    var velocity=p5.Vector.fromAngle(archerAngle);
    velocity.mult(25);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {x: velocity.x, y: velocity.y});
  }

 display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 100, 10);
    pop();

    if(this.body.velocity.x>0) {
      var position=[this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
      for (var i=0; i<this.trajectory.length; i++) {
        ellipse(this.trajectory [i][0], this.trajectory [i][1], 5);
      }
    }
  }
}