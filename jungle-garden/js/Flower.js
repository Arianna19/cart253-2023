class Flower {
    // The constructor() sets up a flower's properties
    constructor(newPhoto) {
        // Position and size information
        this.x = random(0, 500);
        this.y = random(0,540);
        this.size = 50;
        this.sizeF = 50;
        //this.stemLength = stemLength;
        //this.stemThickness = 10;
        //this.petalThickness = 10;
        this.photo = newPhoto;
        
        // Color information
        /*this.stemColor = {
            r: 50,
            g: 150,
            b: 50
        };
        this.petalColor = petalColor;
        this.centreColor = {
            r: 50,
            g: 0,
            b: 0
        }; */
        this.alive = true;
    }

    // display()
    // Displays the flower on the canvas
    display() {

        image(imgFlower, this.x, this.y, this.size, this.sizeF);  
        this.shrink();
        this.mousePressed();   
        console.log("flower growing thing");
        /*push();
        // Set the stroke weight for the petals and the stem
        strokeWeight(this.stemThickness);
        // Draw a line for the stem
        stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
        line(this.x, this.y, this.x, this.y + this.stemLength);
        // Draw a circle with a heavy outline for the flower
        strokeWeight(this.petalThickness);
        fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        pop();
        */

        this.x = constrain(this.x, 0, 500); //to keep the flowers on screen so that user can water them
        this.y = constrain(this.y, 0, 500);
    }

    shrink() {
        //random number to shrink by
        let shrinkage = random(0, 0.1);
        // make the petals smaller 
        this.size = this.size - shrinkage; //making the flower shrink ovretime (width size)
        this.sizeF = this.sizeF - shrinkage; //making the flower shrink overtime (length size) 
        // make the center also shrink
        //this.size = this.size - shrinkage;

        // If any of the key properties reach 0 or less, the flower is dead
        if (this.photo <= 0)// || this.size <= 0) {
            this.alive = false;
        }



    mousePressed() {
        // Calculate the distance between this flower and the mouse
        let d = dist(this.size, this.sizeF, mouseX, mouseY);
        // Check if the distance is less than the head of the flower
        if (d < this.size / 2 + this.sizeF) {
            // If it is, this flower was clicked, so increase its stem length
            this.photo = this.photo + 5;
            // And also change its y position so it grows upward! (If we didn't do this
            // the then stem would grow downward, which would look weird.)
            this.y = this.y - 5;
            //making the petals grow also
            this.photo = this.photo + 0.5;
            //making the center grow upon mouse click
            this.size = this.size + 1;

        }
    }
}

