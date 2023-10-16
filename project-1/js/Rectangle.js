
class Rectangle {

    static numberRects = 0; //number of objects present on the screen + aids with positioning
    static points = 0;

    constructor(kirbyy, wall) {
        this.dot = Math.floor(Math.random() * (600 - 200 + 1) + 200); //this defines the start of the hole between the obstacles
        this.size = Math.floor(Math.random() * (300 - 150 + 1) + 150); //defines the size and end part of the hole
        this.kirb = kirbyy; //for the image of kirby 
        this.canvasHeigth = 800;
        this.canvasWidth = 800;
        this.x = 400 + (250 * this.constructor.numberRects); //calculates the distance between the obstacles accroding to the previous one by taking into consideration the amount displayed on screen
        this.yT = 0; //start y of top obstacle
        this.yB = this.size + this.dot;
        this.width = 100; //rectangle width
        this.heightT = this.dot;
        this.heightB = this.canvasHeigth - (this.size + this.dot); //height of the bottom obstacle the height of canvas - the hole part(obstacle)
        this.constructor.numberRects += 1; //adds one whenever a new rectangle is generated
        this.photo1 = wall; //image of the obstacles 

    }

    draw() {

        push();
        fill('purple');
        noStroke();
        rect(this.x, this.yT, this.width, this.heightT, this.yB); //drawing the image of the top obstacle
        pop();

        push();
        fill(255, 128, 0)
        noStroke();
        rect(this.x, this.yB, this.width, this.heightB, this.yB); //drawing the image of the bottom obstacle
        pop();

        this.death();
        this.x--; //removes the x from the obstacles which allows them to move forward

        //if the x of the rectangles reaches less than 0 to start over and use the random function
        if (this.x <= 0) {
            this.x = this.canvasWidth;
            this.random();
            this.constructor.points++;
        }


    }

    random() {

        //where the random whole appears that user can fly through
        this.dot = random(200, 600); //random starting point of hole (min-max)
        this.size = random(150, 300); //random size of hole/length
        this.yB = this.size + this.dot; //y of the bottom obstacle
        this.heightT = this.dot; //height of the top obstacle depending on the new randomly generated height in this.dot
        this.heightB = (this.canvasHeigth - (this.size + this.dot));
    }

   
    death() {

        if (this.x == this.kirb.x + (this.kirb.size/2)) {
            if (this.kirb.y > this.yT && this.kirb.y < this.heightT + this.yT) { //if kirby's x is the same as the x of the top obstacle's
                this.kirb.alive = false //then kirby is no longer alive so the statement turns false and goes back into the main's scripts condition 'youDied'
            }
            if (this.kirb.y > this.yB && this.kirb.y < this.heightB + this.yB) { //if kirby's y is the same as the y of the top obstacle's 
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