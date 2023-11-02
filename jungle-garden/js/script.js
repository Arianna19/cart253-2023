/**
 * Jungle Garden
 * Arianna
 * 
 * 
 */

"use strict";

let imgKirby;
let imgButterfly;
let imgFlower;
let state = `simulation`
let timer = 15;

// Our garden
let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 5,
    // Array for the amoung of butterflies
    butterflys: [],
    //amount of butterflies that will pop up 
    numButters: 10,
    // The color of the grass (background)
    grassColor: {
        r: 120,
        g: 180,
        b: 120
    }
};

function preload() {
    imgKirby = loadImage('assets/images/waterKirby.webp'); //kirby's image
    imgButterfly = loadImage('assets/images/cutebutterfly.webp'); //butterfly image
    imgFlower = loadImage('assets/images/blueFlower.webp'); //flower image
}

// setup() creates the canvas and the flowers in the garden
function setup() {
    createCanvas(600, 600);

    // Create our flowers by counting up to the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        // Create a new flower using the arguments
        let flower = new Flower(imgFlower);
        flower.display();
        // Add the flower to the array of flowers
        garden.flowers.push(flower);
    }
    for (let i = 0; i < garden.numButters; i++) {
        // Create a new butterfly using the arguments
        let butterF = new Butterfly(imgButterfly);
        // Add the butterfly to the array of butterflys
        garden.butterflys.push(butterF);
    }
}


// Displays our flowers
function draw() {
    // Display the grass
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
    timeCount();
    restart();
    

    
    if (state === `simulation`) { //kirby watering the plants
        simulation();
    }
    else if (state === `flower alive`) { //user managed to keep flowers alive for 15s
        flowerAlive();
    }
    else if (state === `lost all flowers`) { //user lost all the flowers on the screen
        lostAllFlowers();
    }

}

function simulation() {
    //simulation of watering the flowers
    push();
    textSize(30);
    fill('white');
    textFont('Hevaltica');
    text('Help Kirby water the flowers alive!!! ', 20, 40);
    pop();

    push();
    textSize(25);
    fill(0, 230, 242);
    textFont('Hevaltica');
    text('Time left to keep watering: ' + timer + ' secs', 20, 75);
    pop();

    
    // Loop through all the flowers in the array and display them
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        if (flower.alive) {
            flower.shrink();
            flower.display();
        }
    }
    for (let i = 0; i < garden.butterflys.length; i++) {
        let butter = garden.butterflys[i];
        butter.move();
        butter.draw();
    }
    let kirb = new Kirby(imgKirby);
    kirb.draw();
}

function flowerAlive () {
    //screen if user manages to keep some flowers alive for time given
    push();
    textSize(32);
    fill('White');
    textFont('Hevaltica')
    textAlign(CENTER, CENTER);
    text('You Helped Kirby Keep the Flowers Alive!!!', width / 2, height / 2);
    pop();

    push();
    textSize(45);
    fill('White');
    textFont('Hevaltica')
    textAlign(CENTER, CENTER);
    text('ᕙ(`▿´)ᕗ', width / 2, 350);
    pop();

    push();
    textSize(20);
    fill(0, 230, 242);
    textAlign(CENTER, CENTER);
    text('~click enter to restart~', width / 2, 400);
    pop();

}

function lostAllFlowers() {
    push();
    textSize(50);
    fill('White');
    textFont('Hevaltica')
    text('You Killed All the Flowers', 30, height / 2);
    pop();

    push();
    textSize(45);
    fill('White');
    textFont('Hevaltica')
    textAlign(CENTER, CENTER);
    text(' ಥ_ಥ', width / 2, 350);
    pop();

    push();
    textSize(20);
    fill(0, 230, 242);
    textAlign(CENTER, CENTER);
    text('~click enter to start again~', width / 2, 400);
    pop();
}

function timeCount() {
    //timer
    //frameCount keeps track the amount of times prog has gone through this statement
    if (frameCount % 60 == 0 && timer > 0) { //a minute has gone by if the number if dividable by 60
        timer--; //remove from the timer if this condition is met
    }
    if (timer == 0) {
        state = `flower alive`; //if there is no more time move to the no time state
    }
}

function restart() {

    //how the player restarts
    if (keyIsDown(13) && state === `flower alive`) { //if enter is down while on the start screen make the game go in the simulation state
        state = `simulation`;
        timer = 15; //reseting the timer so that the simulation starts again
        for (let i = 0; i < garden.butterflys.length; i++) {
            garden.butterflys[i].alive = true; //find at each bubble the ones that are true and make them false so they pop up again
        }
    }

    if (keyIsDown(13) && state === `lost all flowers`) {
        state = `simulation`;
        timer = 15; //reseting the timer so that the simulation starts again
        for (let i = 0; i < garden.flowers.length; i++) {
            garden.butterflys[i].alive = true; //find at each bubble the ones that are true and make them false so they pop up again
        }
    }
}
