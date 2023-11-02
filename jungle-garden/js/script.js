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
        // Create variables for our arguments for clarity
        let x = random(0, width);
        let y = random(0, height);
        let size = random(50, 80);
        let stemLength = random(50, 100);
        let petalColor = {
            r: random(100, 255),
            g: random(100, 255),
            b: random(100, 255)
        }
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

function mousePressed() {
    // Loop through every flower in the garden
    for (let i = 0; i < garden.flowers.length; i++) {
        // Get the current flower in the loop
        let flower = garden.flowers[i];
        // Call the flower's mousePressed() method
        flower.mousePressed();
    }
}
