class Door {

    static count = 0; //counter to know when to stop reading the doors

    constructor(x, y, h, w, kirby, url, portalImg) {
        this.dCount = Door.count;
        Door.count++;
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.kirby = kirby;
        this.fill = (217, 230, 250);;
        this.url = url;
        this.image = portalImg;
        this.size = 50;
        this.sizeP = 50;
    }

    draw() {

        push();
        if (sessionStorage.getItem("door") == this.dCount) { //if the door is at the counters position colour it inside to indicate which one user goes to
            fill(186, 7, 7);
            image(candyArrow, this.x + 65, this.y + 2, 60, 60); //display arrow gif 
        }
        else
            fill(this.fill);

        noStroke();
        circle(this.x + (this.w / 2), this.y + (this.w / 2), 30); //circles inside the doors that change colour when its their turn to be cleared
        pop();

        image(imgPortal1, this.x, this.y, this.h, this.w); //image used for portal/door

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