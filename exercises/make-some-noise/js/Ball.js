class Ball {

    constructor(x, y, bSound) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0; //acceleration
        this.ay = 0;
        this.maxSpeed = 10;
        this.size = 40;
        this.active = true;
        this.sound = bSound;
        this.touch = true;
        this.color = {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
        };
    }

    //calling everything to be displayed and how it will be called in the main script
    display() {
        push();
        fill(this.color.r, this.color.g, this.color.b);
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

        let randomRate = random(rates);

        if (this.y + this.size / 2 >= height) {
            this.vy = -this.vy;
            this.ay = 0;
            console.log("play music")
            this.sound.rate(randomRate); //making a random pitch from the rates when the ball bounces
            this.sound.play();

        }
    }

    touching(boule) {

        if (this.y + this.size / 2 >= height) {
            console.log("touching");
            push();
            noStroke();
            fill("white");
            ellipse(this.x, this.y, this.size); //making it another colour when it bounces just for fun
            pop();
            let x = random(0, width);
            let y = random(-400, -100);
            let ball = new Ball(x, y, bounceSound); //grab the array and create a new ball again
            boule.push(ball);

        }
    }
}

