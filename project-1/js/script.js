/*
 * Project 1: Halloween Kirby
 * Arianna Sanchez Narita
 * 
 * Mini game about Kirby dodging ghosts and bats.
 * Kirby's objective is to collect 31 (oct 31st = Halloween) candies without dying
 */


"use strict";
//import Kirby from 'js/Kirby'; 


function preload() {

}

//let cam
let kirb = new Kirby();
let rects = new Rectangle(kirb);
let rects2 = new Rectangle(kirb);
let rects3 = new Rectangle(kirb);

/**
 * Description of setup
*/
function setup() {
    createCanvas(800, 800);
}


function draw() {

    background('pink');

    rects.draw();
    rects2.draw();
    rects3.draw();
    kirb.draw();

    push();
    textSize(50);
    fill('purple')
    text('Points: ' + Rectangle.points, 50, 100);
    pop();

    if (!kirb.alive)
        noLoop()


}
