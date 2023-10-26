/**
 * Age of Aquariums 
 * Arianna Sanchez Narita
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let imgbubble; //image of bubble
let imgKirby; //image of kirby 
let bubbleFrenzy = []; //creating an array (like a box holding multiple things with different positions for storage) starting from zero + go well with for loops
let bubbleFrenzySize = 150; //we want to avoid hard coded numbers in the code itself + easily modifiable




function preload() {

    imgbubble = loadImage('assets/images/bubble.png'); //initailly was a cookie idea but followed the underwater theme
    imgKirby = loadImage('assets/images/kirbyFish.webp');

}



function setup() {
    createCanvas(600, 600);

    //randomly create cookies and random places based on height and width
    //for loops are used/useful for counting things and avoided to copy paste all the time
    for (let i = 0; i < bubbleFrenzySize; i++) { //start at zero and keep going until there are 4 fish
        let bubblePop = createBubble(random(0, width), random(0, height));
        bubbleFrenzy.push(bubblePop); //add one add one add one...

        //fishSchool[i] = createFish(random(0, width), random(0, height)); //the numbers in square brakets are called indexes, values after equal sign are called elements
    }
}

//makes new javascript object giving the thing properties and returns the overall output 
function createBubble(x, y) {
    let bubble = {
        x: x,
        y: y,
        size: random(20, 50), //have random sized to include more parameters as requested
        //sizeC: random(20,50),
        vx: 0,
        vy: 0,
        speed: 1,
        popped: false //a place to check when or if the bubble is popped
    };
    return bubble;
}

//makes the cookies appear and move around
function draw() {
    background(10, 149, 191);
    mouseMoved();
    noCursor();

    for (let i = 0; i < bubbleFrenzy.length; i++) { //length property knows how many things are in the array and is constantly up to date ALWAYS USE IT AFTER
        moveBubble(bubbleFrenzy[i]); //each time we call the  funtion we give it one of the objects and it moves 
        displayBubble(bubbleFrenzy[i]);
        //popBubble(bubbleFrenzy[i]);
        checkBubble(bubbleFrenzy[i]);
   }


    /*if (state === `simulation`) { //kirby chasing the bubbles
        simulation();
    }
    else if (state === `popped all`) { //all bubbles are off screen/popped 
        poppedAll();
    }
    else if (state === `no time`) { //kirby gets a cookie and is happy 
        noTime();
    }*/
}

function moveBubble(bubble) {
    //let the program choose if it wants to change direction
    let change = random(0, 1); //generate a random number between 0 and 1 and put into a variable called change 
    if (change < 0.05) {
        bubble.vx = random(-bubble.speed, bubble.speed); //choose a random number between negative of speed or positive of speed
        bubble.yx = random(-bubble.speed, bubble.speed);
    }

    //move the cookies
    bubble.x = bubble.x + bubble.vx; //change position by adding their velocities to their position 
    bubble.y = bubble.y + bubble.vy; //change position by adding their velocities to their position 

    //keep the cookies in the canvas with a constrain 
    bubble.x = constrain(bubble.x, 0, 550); //x constrained to be contained between 0 and the width 
    bubble.y = constrain(bubble.y, 0, 550); //y constrained to be contained between 0 and the height 

}

function displayBubble(bubble) {
    //push();
    //image(imgbubble, bubble.x, bubble.y, bubble.size, bubble.size);
    //pop();

    if (!bubble.popped) {
        push();
        image(imgbubble, bubble.x, bubble.y, bubble.size, bubble.size);
        pop();
    }
}

function checkBubble(bubble) {
    if (!bubble.popped) {
        let d = dist(kirby.x, kirby.y, bubble.x, bubble.y);
        if (d < kirby.size / 2 + kirby.size / 2) {
            bubble.popped = true;
        }
    }
}

//how to be able to add in the array 
/*function mousePressed() {
    let bubble = createBubble(mouseX, mouseY);
    bubbleFrenzy.splice(bubble); //push function takes whatever thing in the () and puts it inside fishSchool array at the end of it
}*/

//characteristics for kirby
let kirby = {
    x: undefined,
    y: 250,
    size: 100,
    sizeK: 80,
}

//how user moves kirby 
function mouseMoved() {

    image(imgKirby, kirby.x, kirby.y, kirby.size, kirby.sizeK); //loading kirby in canvas

    kirby.x = mouseX - kirby.size / 2; //user moves kirby with mouse
    kirby.y = mouseY - kirby.size / 2;
}

/*function popBubble(bubble) {
    if (kirby.y > bubble.y && kirby.y < bubble.size + bubble.y) {
        if (kirby.x > bubble.x && kirby.x < bubble.size + bubble.x) {
            bubbleFrenzy.pop(bubble);
            console.log("bubbbles");
        }
    }

}

function mousePressed() {
    let bubble = createBubble(mouseX, mouseY);
    bubbleFrenzy.pop(bubble);
}*/

