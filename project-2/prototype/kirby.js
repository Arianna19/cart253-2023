class Kirby {

  camX = 30;
  y = 30;
  size = 60;
  sizeK = 50; 
  xPos = 100;
  moveRight = true;
  moveLeft = true;
  floor = height-this.size/2;
  speed = 5;


  constructor(kirbPhoto, snowflakes) {
    this.photo = kirbPhoto;
    this.bgPhoto = snowflakes;
  }

  draw() {
    /*push();
    fill(252, 131, 248);
    noStroke();
    circle(this.xPos, this.y, this.size)
    pop(); */
    image(imgCuteKirby, this.xPos, this.y -15, this.size, this.sizeK);
    this.move();
    translate(this.camX, 0);
    
    push();
    image(snowflakeFalling, -100 - this.camX, 0, 850, 850);
    pop();

  }

  move() {
    if (keyIsDown(LEFT_ARROW)&& this.camX < 200) {
      this.camX += this.speed;
    }

    if (keyIsDown(RIGHT_ARROW) && this.camX > -2500)  {
      this.camX -= this.speed;
    }

    if (this.y <= this.floor - 5) {
      this.y += 5;
    }

    if (keyIsDown(32)) {
      this.y -= 10 ;

    }
  }

  setXR(x) {
    this.camX = -(x - this.xPos - this.size);
    console.log(x - this.xPos);
  }
  setXL(x) {
    this.camX = -(x - this.xPos + this.size /2);
    console.log(x - this.xPos);
  }
  setYT(y) {
    this.y = (y - this.size / 2);
  }
  setYB(y) {
    this.y = (y +  this.size / 2);
    console.log(this.y);
  }

  xFix() {
    return -(this.camX - this.xPos);
  }
}