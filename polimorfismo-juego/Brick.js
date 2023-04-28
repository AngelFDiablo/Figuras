class Brick extends Paddle {
  constructor(x, y, w, h, points) {
    super(x, y ,w, h);
    this.points = points;
  }
  
  render() {
    push();
    strokeWeight(2);
    if (this.points === 1) {
      stroke("orchid");
      fill("yellow");
    } else if (this.points === 2) {
      stroke("darkpink");
      fill("pink");
    } else if (this.points === 3) {
      stroke("lightblue");
      fill("orange");
    } else if (this.points === 4) {
      stroke("lime");
      fill("green");
    } else if (this.points === 5) {
      stroke("blue");
      fill("red");
    } else if (this.points === 6) {
      stroke("black");
      fill("brown");
    } else if (this.points === 7) {
      stroke("black");
      fill("gray");
    }
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.width-2, this.height-2);
    textAlign(CENTER, CENTER);
    textSize(11);
    noStroke();
    fill(0);
    text(this.points, this.pos.x, this.pos.y);
    pop();   
  }
}