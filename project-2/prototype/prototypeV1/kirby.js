class kirby {

  x = 30;
  y = 30;
  size = 50
  xPos = 100
  moveRight = true
  moveLeft = true
  floor = 375


  constructor() {
  }

  draw() {
    circle(this.xPos, this.y, this.size)
    this.move()
    translate(this.x, 0)
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.moveLeft) {
      this.x += 5;
    }

    if (keyIsDown(RIGHT_ARROW) && this.moveRight) {
      this.x -= 5;
    }

    if (this.y <= this.floor) {
      this.y += 5;
    }

    if (keyIsDown(32)) {
      this.y -= 20;
    }
  }


  xFix() {
    return this.x - this.xPos
  }
}