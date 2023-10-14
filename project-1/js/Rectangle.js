
class Rectangle {

    static numberRects = 0;

    constructor(kirbyy) {
        this.dot = Math.floor(Math.random() * (600 - 300 + 1) + 300);
        this.size = Math.floor(Math.random() * (300 - 100 + 1) + 100);
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
    }

    draw() {

        rect(this.x, this.yT, this.width, this.heightT); //top rectangle
        rect(this.x, this.yB, this.width, this.heightB); //bottom rectangle
        this.platform();
        this.death();
        //this.x--;

        //if the x of the rectangles reaches less than 0 to start over and use the random function
        if (this.x <= 0) {
            this.x = this.canvasWidth;
            this.random();
        }


    }

    verticalTop() {

        return this.heightT;
    }

    verticalBot() {

        return this.heightB;
    }

    random() {

        //where the random whole appears that user can fly through
        this.dot = random(300, 600); //random starting point of hole
        this.size = random(100, 300); //random size of hole/length
        this.yB = this.size + this.dot;
        this.heightT = this.dot;
        this.heightB = (this.canvasHeigth - (this.size + this.dot));
    }

    platform() {

        //bottom rectangle pink line
        push();
        stroke(255, 0, 255);
        strokeWeight(4);
        line(this.x, this.yB, this.x, this.yB + this.heightB);
        pop();

        //horizontal pink line
        push();
        stroke(255, 0, 255);
        strokeWeight(4);
        line(this.x, this.yB, this.x + this.width, this.yB);
        pop();


        //top rectangle blue line
        push();
        stroke(20, 0, 255);
        strokeWeight(4);
        line(this.x, this.yT, this.x, this.yT + this.heightT);
        pop();

        //horizontal blue line
        push();
        stroke(20, 0, 255);
        strokeWeight(4);
        line(this.x, this.heightT, this.x + this.width, this.heightT);
        pop();

    }

    death() {
        if (this.x == this.kirb.x) {
            if (this.kirb.y > this.yT && this.kirb.y < this.heightT + this.yT) {
                console.log("i died ")
            }
            if (this.kirb.y > this.yB && this.kirb.y < this.heightB + this.yB) {
                 console.log("i died2 ")

            }
        }

        if (this.heightT >= this.kirb.y) {
            if (this.kirb.x > this.x && this.kirb.x < this.x + this.width)
                console.log("top ")
        }
    
        if (rects.yB <= kirb.y) {
            if (this.kirb.x > this.x && this.kirb.x < this.x + this.width)
                console.log("bottom")
    
        }
    }
}