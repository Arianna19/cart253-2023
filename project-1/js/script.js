/*
 * Project 1: Halloween Kirby
 * Arianna Sanchez Narita
 * 
 * Mini game about Kirby dodging ghosts and bats.
 * Kirby's objective is to collect 31 (oct 31st = Halloween) candies without dying
 */


"use strict";


function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(800, 800);
}


/**
 * Description of draw()
*/
function draw() {
    background('pink');
    Kirby();
    platform();
    overlap()

}


let kirbyVal = {

    x: 50,
    y: 750,
    size: 80,
    sizeK: 80,
    velocity: .4,
    floor: 750,
    fill: {
        r: 255,
        g: 130,
        b: 245
    }
}

function Kirby() { 

    circle(kirbyVal.x, kirbyVal.y, kirbyVal.size, kirbyVal.sizeK);


    //how user moves kirby left and right
    if (keyIsDown(LEFT_ARROW)) {
        kirbyVal.x -= 5 * (deltaTime / 50);
    }

    if (keyIsDown(RIGHT_ARROW)) {
        kirbyVal.x += 5 * (deltaTime / 50);
    }

    if (keyIsDown(32)) {
        kirbyVal.y -= 100  * (deltaTime / 50);
    }
    

    console.log((kirbyVal.y + (8 * (deltaTime / 50))))
    if (kirbyVal.y != kirbyVal.floor && kirbyVal.y < kirbyVal.floor ) {
        kirbyVal.y +=30  * (deltaTime / 50);
    }
    

}



let rectangle = {

    x: 400,
    y: 600,
    sizeR1: 300,
    sizeR2: 10,
    velocity: .4,
    fill: {
        r: 255,
        g: 130,
        b: 245
    }
}


function platform() {

    
    rect(rectangle.x, rectangle.y, rectangle.sizeR1, rectangle.sizeR2);
    push();
    stroke(255,0,255);
    line(rectangle.x, rectangle.y, rectangle.x + rectangle.sizeR1, rectangle.y);
    pop()



}


function overlap () {


    if (kirbyVal.x > rectangle.x && kirbyVal.x < rectangle.x + rectangle.sizeR1) {
        kirbyVal.floor = rectangle.y; 
    } else {
        kirbyVal.floor = 750;
    }


}



