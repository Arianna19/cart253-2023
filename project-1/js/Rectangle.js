
class Rectangle {

    static numberRects = 0;
    static points = 0;

    constructor(kirbyy, wall) {
        this.dot = Math.floor(Math.random() * (600 - 200 + 1) + 200);
        this.size = Math.floor(Math.random() * (300 - 150 + 1) + 150);
        this.kirb = kirbyy;
        this.canvasHeigth = 800;
        this.canvasWidth = 800;
        this.x = 400 + (250 * this.constructor.numberRects);
        this.yT = 0; //start y of top rectangle
        this.yB = this.size + this.dot;
        this.width = 100; //rectangle width
        this.heightT = this.dot;
        this.heightB = this.canvasHeigth - (this.size + this.dot);
        this.constructor.numberRects += 1;
        this.photo1 = wall;

    }

    draw() {

        image(imgWall, this.x, this.yT, this.width, this.heightT); //top rectangle
        rect(this.x, this.yB, this.width, this.heightB); //bottom rectangle
        this.death();
        this.x--;

        //if the x of the rectangles reaches less than 0 to start over and use the random function
        if (this.x <= 0) {
            this.x = this.canvasWidth;
            this.random();
            this.constructor.points++;
        }


    }

    random() {

        //where the random whole appears that user can fly through
        this.dot = random(200, 600); //random starting point of hole
        this.size = random(150, 300); //random size of hole/length
        this.yB = this.size + this.dot;
        this.heightT = this.dot;
        this.heightB = (this.canvasHeigth - (this.size + this.dot));
    }

   
    death() {
        if (this.x == this.kirb.x + (this.kirb.size/2)) {
            if (this.kirb.y > this.yT && this.kirb.y < this.heightT + this.yT) {
                this.kirb.alive = false
            }
            if (this.kirb.y > this.yB && this.kirb.y < this.heightB + this.yB) {
                this.kirb.alive = false

            }
        }

        if (this.heightT >= this.kirb.y - (this.kirb.size/2)) {
            if (this.kirb.x > this.x && this.kirb.x < this.x + this.width) {
                this.kirb.alive = false
            }
        }

        if (this.yB <= this.kirb.y + (this.kirb.size/2)) {
            if (this.kirb.x > this.x && this.kirb.x < this.x + this.width) {
                this.kirb.alive = false
            }

        }
    }
}