
class Kirby {

    constructor(kirbPhoto) {
        this.x = 50
        this.y = 400
        this.size = 70
        this.sizeK = 60 
        this.floor = 750
        this.alive = true
        this.photo = kirbPhoto;
    }

    draw(){
        this.control();
        image(imgHalloweenKirb, this.x, this.y, this.size, this.sizeK);     
        
    }

    control(){

    
        if (keyIsDown(32)||touches!=0) {
            this.y -= 30  * (deltaTime / 50);
        }
    
        if (this.y != this.floor && this.y < this.floor ) {
            this.y += 15  * (deltaTime / 50);
        }
    } 

}