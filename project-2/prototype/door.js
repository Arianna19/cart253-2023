class Door {

    constructor(x, y, h, w, kirby) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.kirby = kirby;
        this.fill = (217, 230, 250);
    }

    draw() {

        push();
        fill(this.fill);
        rect(this.x, this.y, this.w, this.h);
        pop();

        push();
        //top
        stroke("blue");
        line(this.x, this.y, this.x + this.w, this.y);
        //right
        stroke("purple");
        line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
        //bottom
        stroke("red");
        line(this.x, this.y + this.h, this.x + this.w, this.y + this.h);
        //left
        stroke("yellow");
        line(this.x, this.y, this.x, this.y + this.h);
        pop();

    }
}