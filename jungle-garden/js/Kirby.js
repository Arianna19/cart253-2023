class Kirby {
    constructor(kirbPhoto) {
        this.x = 50; //offical fixed x 
        this.y = 250; //starting y that will change in the control function 
        this.size = 90;
        this.sizeK = 80;
        this.photo = kirbPhoto;
    }

    draw() {
        this.mouseMoved();
        image(imgKirby, this.x, this.y, this.size, this.sizeK);
        noCursor();
        //console.log("Kirby moving");

    }

    mouseMoved() {
        this.x = mouseX - this.size / 2; //user moves kirby with mouse
        this.y = mouseY - this.size / 2;
    }
}