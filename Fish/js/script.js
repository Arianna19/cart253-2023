/**
 * Age of Aquariums 
 * Arianna Sanchez Narita
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let imgCookie; //image of cookie
let imgKirby; //image of kirby 
let cookieJar = []; //creating an array (like a box holding multiple things with different positions for storage) starting from zero + go well with for loops
let cookieJarSize = 5; //we want to avoid hard coded numbers in the code itself + easily modifiable




function preload() {

    imgCookie = loadImage('assets/images/bubble.png');
    imgKirby = loadImage('assets/images/kirbyFish.webp');

}



function setup() {
    createCanvas(600, 600);

    //randomly create cookies and random places based on height and width
    //for loops are used/useful for counting things and avoided to copy paste all the time
    for (let i = 0; i < cookieJarSize; i++) { //start at zero and keep going until there are 4 fish
        let yumCookie = createCookie(random(0, width), random(0, height));
        cookieJar.push(yumCookie); //add one add one add one...

        //fishSchool[i] = createFish(random(0, width), random(0, height)); //the numbers in square brakets are called indexes, values after equal sign are called elements
    }
}

//makes new javascript object giving the thing properties and returns the overall output 
function createCookie(x, y) {
    let cookieKirby = {
        x: x,
        y: y,
        size: 50,
        sizeC: 50,
        vx: 0,
        vy: 0,
        speed: 1
    };
    return cookieKirby;
}

//makes the cookies appear and move around
function draw() {
    background(10, 149, 191);
    mouseMoved();
    noCursor();

    for (let i = 0; i < cookieJar.length; i++) { //length property knows how many things are in the array and is constantly up to date ALWAYS USE IT AFTER
        moveCookie(cookieJar[i]); //each time we call the movecookie funtion we give it one of the fish and it moves 
        displayCookie(cookieJar[i]);
    }
}

function moveCookie(cookieKirby) {
    //let the program choose if it wants to change direction
    let change = random(0, 1); //generate a random number between 0 and 1 and put into a variable called change 
    if (change < 0.05) {
        cookieKirby.vx = random(-cookieKirby.speed, cookieKirby.speed); //choose a random number between negative of speed or positive of speed
        cookieKirby.yx = random(-cookieKirby.speed, cookieKirby.speed);
    }

    //move the cookies
    cookieKirby.x = cookieKirby.x + cookieKirby.vx; //change position by adding their velocities to their position 
    cookieKirby.y = cookieKirby.y + cookieKirby.vy; //change position by adding their velocities to their position 

    //keep the cookies in the canvas with a constrain 
    cookieKirby.x = constrain(cookieKirby.x, 0, width); //x constrained to be contained between 0 and the width 
    cookieKirby.y = constrain(cookieKirby.y, 0, height); //y constrained to be contained between 0 and the height 

}

function displayCookie(cookieKirby) {
    push();
    image(imgCookie, cookieKirby.x, cookieKirby.y, cookieKirby.size, cookieKirby.sizeC);
    pop();
}

//how to be able to add in the array 
function mousePressed() {
    let cookieKirby = createCookie(mouseX, mouseY);
    cookieJar.push(cookieKirby); //push function takes whatever thing in the () and puts it inside fishSchool array at the end of it
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