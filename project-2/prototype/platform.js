class Platform {

  constructor(x, y, h, w, kirby, snowPlatimg) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.kirby = kirby;
    this.fill = (217, 230, 250);
    this.image = snowPlatimg
    this.size = 50;
    this.sizeS = 60;
  }

  draw() {

    push();
    noFill()
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    pop();

    push();
    //top
    noStroke();
    //stroke("blue");
    line(this.x, this.y, this.x + this.w, this.y);
    //right
    noStroke();
    //stroke("purple");
    line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
    //bottom
    noStroke();
    //stroke("red");
    line(this.x, this.y + this.h, this.x + this.w, this.y + this.h);
    //left
    noStroke();
    //stroke("yellow");
    line(this.x, this.y, this.x, this.y + this.h);
    pop();

    image(snowPlat, this.x - 5, this.y, this.w, this.h);

    this.collide();
  }

  collide() {
    //bounds left  then right
    if (this.kirby.y > this.y && this.kirby.y < this.y + this.h) {
      if ((this.kirby.xFix() + this.kirby.size / 2) > this.x && this.w + this.x > (this.kirby.xFix() + this.kirby.size / 2)) {
        this.kirby.setXR(this.x);
      }
      if ((this.kirby.xFix() - this.kirby.size / 2) < this.x + this.w && this.x < (this.kirby.xFix() + this.kirby.size / 2)) {
        this.kirby.setXL(this.x + this.w);
      }
    }

    // bound up then down 
    if ((this.kirby.xFix() + this.kirby.size / 2)-this.kirby.speed >= this.x && (this.kirby.xFix() - this.kirby.size / 2)+this.kirby.speed <= this.x + this.w) {
      if ((this.kirby.y + this.kirby.size / 2) > this.y && this.h + this.y > ((this.kirby.y + this.kirby.size / 2))) {
        this.kirby.setYT(this.y);
      }
      if ((this.kirby.y - this.kirby.size / 2) < this.y + this.h && this.y < (this.kirby.y + this.kirby.size / 2)) {
        this.kirby.setYB(this.y + this.h);
      }
    }
  }
}