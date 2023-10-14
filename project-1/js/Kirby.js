
class Kirby {

    constructor() {
        this.x = 50
        this.y = 750
        this.size = 80
        this.sizeK = 80
        this.velocity = .4
        this.floor = 750
        this.alive = true
       // this.cam = cam;
    }

    draw(){
        this.control();
        circle(this.x, this.y, this.size, this.sizeK);
        
    }

    control(){
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 1          
        }
    
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 1 
        }
    
        if (keyIsDown(32)||touches!=0) {
            this.y -= 100  * (deltaTime / 50);
        }
    
        if (this.y != this.floor && this.y < this.floor ) {
            this.y +=30  * (deltaTime / 50);
        }
    } 

}