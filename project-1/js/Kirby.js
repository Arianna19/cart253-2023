
class Kirby {

    constructor(kirbPhoto) {
        this.x = 50 //offical fixed x 
        this.y = 400 //starting y that will change in the control function 
        this.size = 60
        this.sizeK = 50 
        this.floor = 750 //the bounds the user cannot go out of on the bottom
        this.alive = true //kirby automatically starts as alive 
        this.photo = kirbPhoto;
    }

    draw(){
        this.control();
        image(imgHalloweenKirb, this.x, this.y, this.size, this.sizeK);     
        
    }

    control(){

        //how the user controls kirby 
        if (keyIsDown(32)||touches!=0) { //if space is pressed down or if screen is touched for phones 
            this.y -= 30  * (deltaTime / 50); //delta time is just to make the transitions smooth looking ish 
        }
    
        if (this.y != this.floor && this.y < this.floor ) { //if kirby is not on the bound of the floor then pull him down, basically gravity
            this.y += 15  * (deltaTime / 50);
        }
    } 

}