class Door {

    static count = 0
    constructor(x, y, h, w, kirby, url, portalImg) {
        this.dCount = Door.count
        Door.count++;
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.kirby = kirby;
        this.fill = (217, 230, 250);;
        this.url = url;
        this.image = portalImg;
        this.size = 70;
        this.sizeP = 80;
    }

    draw() {

        push();
        if (sessionStorage.getItem("door") == this.dCount)
            fill("red");
        else
            fill(this.fill);
        
        noStroke();
        rect(this.x, this.y, this.w, this.h, this.size, this.sizeP);
 
        pop();

        image(imgPortal1, this.x, this.y, this.h, this.w);
        /*push();
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
        */

        this.doorCollide();
       

    }

    doorCollide() {

        //if touching the right side of the door        
        if (sessionStorage.getItem("door") == this.dCount)
        if (this.kirby.y > this.y && this.kirby.y < this.y + this.h) {
            if ((this.kirby.xFix()) > this.x && this.w + this.x > (this.kirby.xFix())) {
                //this.kirby.setXR(this.x)
                window.location.href = this.url;
                

            }


        }






    }
}