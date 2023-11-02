class Butterfly {

    constructor(butterflyImg) {
        this.x = random(0,540); //spawn the butterflies randomly on x axis
        this.y = random(0,540); //spawn the butterflies randomly on y axis
        this.size = 45;
        this.sizeB = 35;
        this.photo = butterflyImg;
        this.vx = 0;
        this.vy = 0;
        this.speed = 3;
        this.jitteriness = 0.10;
    }

    draw() {
        image(imgButterfly, this.x, this.y, this.size, this.sizeB); //load the butterfly image
        //console.log("butterfly");

    }


    move() {
        // First check if we should change direction
        let r = random(0, 1);
        if (r < this.jitteriness) {
            this.vx = random(-this.speed, this.speed);
            this.vy = random(-this.speed, this.speed);
        }

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.x = constrain(this.x, 0, 540);
        this.y = constrain(this.y, 0, 540);
    }
}