class platform {

  constructor(x, y, h, w, kirby) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.kirby = kirby;
    this.fill = (217, 230, 250);
  }

  draw() {

    push();
    fill(this.fill);
    rect(this.x, this.y, this.w, this.h);
    pop();

    push();
    //top
    stroke("blue");
    line(this.x, this.y, this.x + this.w, this.y);
    //right
    stroke("purple");
    line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
    //bottom
    stroke("red");
    line(this.x, this.y + this.h, this.x + this.w, this.y + this.h);
    //left
    stroke("yellow");
    line(this.x, this.y, this.x, this.y + this.h);
    pop();

    this.collide();
  }

  collide() {


    /*   if (this.kirby.y >= this.y && this.kirby.y <= this.y + this.h)
        if (-this.kirby.xFix() + this.kirby.size / 2 >= this.x) {
          this.kirby.moveRight = false;
        } else {
          this.kirby.moveRight = true;
        } else this.kirby.moveRight = true */


    if (-this.kirby.xFix() + this.kirby.size / 2 >= this.x && -this.kirby.xFix() - this.kirby.size / 2 <= this.x + this.w) {
      if (this.kirby.y + this.kirby.size / 2 >= this.y) {
        console.log("toucheing");
        this.kirby.floor = this.y - (this.kirby.size / 2);
        this.kirby.y = this.kirby.floor
        console.log(this.kirby.size);
      }
    } else {
      this.kirby.floor = this.kirby.ground;
    }



    /*
    //let abs = Math.abs(this.kirby.x)
    if (-this.kirby.xFix() + this.kirby.size / 2 >= this.x && -this.kirby.xFix() - this.kirby.size / 2 <= this.x + this.w) {
      if (this.kirby.y >= this.y) {
        console.log("toucheing");
        this.kirby.moveRight = false;
        this.kirby.floor = this.y - (this.kirby.size/2) ;
        console.log(this.kirby.size);
      }
    } else {
      this.kirby.floor = 450;
      this.kirby.moveRight = true;
    }
    /*
        if (-this.kirby.xFix() - this.kirby.size / 2 <= this.x + this.w) {
          this.kirby.moveLeft = false
        } else {
          this.kirby.moveLeft = true
        }
        */
  }
}