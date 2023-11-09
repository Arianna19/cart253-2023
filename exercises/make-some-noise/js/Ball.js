class Ball {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.size = 40;
        this.active = true;

    }

    //calling everything to be displayed and how it will be called in the main script
    display() {
        push();
        fill(207, 37, 184);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
    }

    //function in how the balls bascially jump up and down
    move() {
        this.vx = this.vx + this.ax;
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    gravity(force) {
        this.ay = this.ay + force;
    }

    bounce() {
        if (this.y + this.size/2 >= height) {
            this.vy = -this.vy;
            this.ay = 0;
            console.log("play music")
            bounceSound.rate(this.x/width);
            bounceSound.play();
        }
    }



}

