/**
 * Learning about arrays
 * Arianna
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let barkSFX;
let rates = [1.5,1.75,2.75,2.5,2.75,3]; //creating a limited rate sound for the barks

/*let soliloquy = [ //creating an array with strings 
    `to be or not to be`,
    `that is the question`,
    `whether this nobler in the mind`,
    `bla bla bla`,
    `again bla bla bla`
];*/

//need a variable to store the fortune 
//let chosenFortune = 'Click to see ur fortune';


let circle = {
    x: 0,
    y: 0,
    size: 100,
    trail: [],
    trailSize: 20

};

//creating a variable to track the indexes 
let currentIndex = 0; 

function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(600,600);
    //textAlign(CENTER, CENTER);
    //textSize(30);
    //fill(200,50,60);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length; i++) {
        let position = circle.trail[i]; //zero is the earliest postion
        ellipse(position.x, position.y, circle. size); //first position to begin with
    }

    push();
    ellipse(circle.x, circle.y,circle.size);
    pop();

    let newTrailPosition = { //adding the most recent position to our array with the push to create a trail
        x: circle.x,
        y: circle.y
    }; circle.trail.push(newTrailPosition);

    if (circle.trail.length > circle.trailSize) { //remove the oldest positon
        circle.trail.shift(); //removes the element at index 0 and shuffles everything back 
    } 




    //text(chosenFortune, width/2, height/2);
    //text(soliloquy[currentIndex], width/2, height/2);

}

    function mousePressed() { 
        /*let randomRate = random(rates);
        barkSFX.rate(randomRate); //changes the playback rate of the sound by using a given array listed above
        barkSFX.play();
        */
    //chosenFortune = random(fortunes); //random and name of the array
    /*currentIndex = currentIndex + 1;

    if (currentIndex === soliloquy.length) {
        currentIndex = 0;
    } */

} 