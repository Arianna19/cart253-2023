class platform {

  constructor(x, y, h, w, kirby) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.kirby = kirby;
  }

  draw() {
    push();
    rect(this.x, this.y, this.h, this.w);
    fill(255, 255, 255);
    pop();
    this.collide();
  }

  collide() {
    //let abs = Math.abs(this.kirby.x)
    if (-this.kirby.xFix() + this.kirby.size / 2 >= this.x && -this.kirby.xFix() - this.kirby.size / 2 <= this.x + this.w) {
      if (this.kirby.y >= this.y) {
        console.log("toucheing");
        this.kirby.moveRight = false;
        this.kirby.floor = this.y - (this.kirby.size/2) ;
        console.log(this.kirby.size);
      }
    } else {
      this.kirby.floor = 370;
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