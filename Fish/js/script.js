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
let bubbleFrenzySize = 5; //we want to avoid hard coded numbers in the code itself + easily modifiable




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
        size: 50,
        sizeC: 50,
        vx: 0,
        vy: 0,
        speed: 1
    };
    return bubble;
}

//makes the cookies appear and move around
function draw() {
    background(10, 149, 191);
    mouseMoved();
    noCursor();

    for (let i = 0; i < bubbleFrenzy.length; i++) { //length property knows how many things are in the array and is constantly up to date ALWAYS USE IT AFTER
        moveBubble(bubbleFrenzy[i]); //each time we call the movecookie funtion we give it one of the fish and it moves 
        displayBubble(bubbleFrenzy[i]);
    }
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
    push();
    image(imgbubble, bubble.x, bubble.y, bubble.size, bubble.sizeC);
    pop();
}

//how to be able to add in the array 
function mousePressed() {
    let bubble = createBubble(mouseX, mouseY);
    bubbleFrenzy.push(bubble); //push function takes whatever thing in the () and puts it inside fishSchool array at the end of it
}

//characteristics for kirby
let kirby = {
    x: undefined,
    y: 250,
    size: 60,
    sizeK: 50,
}

//how user moves kirby 
function mouseMoved() {

    image(imgKirby, kirby.x, kirby.y, kirby.size, kirby.sizeK); //loading kirby in canvas

    kirby.x = mouseX - kirby.size / 2; //user moves kirby with mouse
    kirby.y = mouseY - kirby.size / 2;
}

function popBubble() {
    if (cookieKirby === kirby) {

    }
}