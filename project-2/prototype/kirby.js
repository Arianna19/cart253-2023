class Kirby {

  camX = 30;
  PrevX = 30;
  y = 30;
  size = 60;
  sizeK = 50;
  xPos = 100;
  moveRight = true;
  moveLeft = true;
  floor = height - this.size / 2;
  speed = 5;
  direction = true

  constructor(kirbPhotoR,kirbPhotoL, snowflakes) {
    this.photoR = kirbPhotoR;
    this.photoL = kirbPhotoL;
    this.photo = kirbPhotoR
    this.bgPhoto = snowflakes;
  }

  draw() {

    image(this.photo, this.xPos, this.y - 15, this.size, this.sizeK);
    this.move();
    translate(this.camX, 0);

    push();
    image(snowflakeFalling, -100 - this.camX, 0, 900, 830); //gif of snowflakes that follows user
    pop();


  }

  move() {
    if(this.PrevX==this.camX){
      this.photo.setFrame(0)
      this.photo.pause()
    }else{
      this.PrevX=this.camX
    }

    if (keyIsDown(LEFT_ARROW) && this.camX < 200) {
      this.camX += this.speed;
      this.photo = this.photoL;
      this.photo.play()

    }

    if (keyIsDown(RIGHT_ARROW) && this.camX > -1500) {
      this.camX -= this.speed;
      this.photo = this.photoR;
      this.photo.play()
    }

    if (this.y <= this.floor - 5) {
      this.y += 5;
    }

    if (keyIsDown(32)) {
      this.y -= 10;

    }
  }

  setXR(x) {
    this.camX = -(x - this.xPos - this.size);
    console.log(x - this.xPos);
  }
  setXL(x) {
    this.camX = -(x - this.xPos + this.size / 2);
    console.log(x - this.xPos);
  }
  setYT(y) {
    this.y = (y - this.size / 2);
  }
  setYB(y) {
    this.y = (y + this.size / 2);
    console.log(this.y);
  }

  xFix() {
    return -(this.camX - this.xPos);
  }
}