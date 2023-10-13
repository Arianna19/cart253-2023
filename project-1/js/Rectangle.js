
class Rectangle {
    constructor() {
        this.x = 400;
        this.y = 600;
        this.sizeR1 = 200;
        this.sizeR2 = 350;
        this.velocity = .4;
        this.fill = {
            r: 255,
            g: 130,
            b: 245
        }
    }

    draw() {

        rect(400, 0, this.sizeR1, this.sizeR2);
        rect(400, 500, this.sizeR1, this.sizeR2); 
        this.platform();

    }

    platform() {
        push();
        stroke(255, 0, 255);
        strokeWeight(4);
        line(400, 500, this.x, this.y + this.sizeR2);
        pop()

        push();
        stroke(20, 0, 255);
        strokeWeight(4);
        line(400, 0, this.x, 350);
        pop()


    }


}