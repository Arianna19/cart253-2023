class FlowerRed {
    //faster shrinking flowers just to make the game a little more challenging
    constructor(newPhoto) {
        // Position and size information
        this.x = random(0, 500);
        this.y = random(90, 500); //min different so that it doesnt go into the text
        this.size = 70;
        this.sizeF = 70;
        this.photo = newPhoto;
        this.alive = true;
    }

    // display()
    // Displays the flower
    display() {

        image(imgFlowerRed, this.x, this.y, this.size, this.sizeF);
        this.shrink();
        this.mousePressed();
        this.deadFlower();

        this.x = constrain(this.x, 0, 500); //to keep the flowers on screen so that user can water them
        this.y = constrain(this.y, 0, 500);

        this.size = constrain(this.size, 0, 60); //constrain the size of the flowers
        this.sizeF = constrain(this.sizeF, 0, 60)
    }

    shrink() {
        //random number to shrink by
        let shrinkage = random(0, 0.3);
        // make the petals smaller 
        this.size = this.size - shrinkage/2; //making the flower shrink ovretime (width size)
        this.sizeF = this.sizeF - shrinkage/2; //making the flower shrink overtime (length size) 

        // If any of the key properties reach 0 or less, the flower is dead
        if (this.size <= 0 && this.sizeF) //if both the width and the length of the image are zero than dead
            this.alive = false;
    }

    mousePressed() {
        //if the mouse if hovered over the flowers it grows them
        // Calculate the distance between this flower and the mouse
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d < this.size / 2 + this.sizeF) {
            this.size = this.size + 0.5;
            this.sizeF = this.sizeF + 0.5;
        }
    }

    deadFlower() {
        if (this.alive === false) {
            this.size = 0;
            this.sizeF = 0;
            console.log("dead flowers");
        }
    }
}

