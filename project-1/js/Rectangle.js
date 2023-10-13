
class Rectangle {
    constructor() {

        this.dot = 250
        this.size = 300


        this.x = 400;
        this.yT = 0;
        this.yB = this.size+this.dot
        this.width = 100;
        this.heightT = this.dot;
        this.heightB = (1000-(this.size+this.dot));
    }


    draw() {

        rect(this.x, this.yT, this.width, this.heightT);
        rect(this.x, this.yB, this.width, this.heightB); //bottom rectancle
        this.platform();

    }
       
    
    random(){
        this.dot = random(300,600)
        this.size = random(100,300)
        this.yB = this.size+this.dot
        this.heightT = this.dot;
        this.heightB = (1000-(this.size+this.dot));
    }
    platform() {

        //bottom rectangle lines
        push();
        stroke(255, 0, 255);
        strokeWeight(4);
        line(this.x, this.yB, this.x, this.yB + this.heightB);
        pop()

        //horizontal line
        push();
        stroke(255, 0, 255);
        strokeWeight(4);
        line(this.x, this.yB, this.x + this.width, this.yB);
        pop()

        //top rectangle lines
        push();
        stroke(20, 0, 255);
        strokeWeight(4);
        line(this.x, this.yT, this.x, this.yT+this.heightT);
        pop()

        //horizontal line
        push();
        stroke(20, 0, 255);
        strokeWeight(4);
        line(this.x, this.heightT, this.x + this.width, this.heightT);
        pop()


    }


}