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
let rects = new Rectangle();
/**
 * Description of setup
*/
function setup() {
    createCanvas(800, 800);
    //cam = createCamera();
}



function draw() {
    background('pink');
    rects.draw();
    kirb.draw();
   // translate(i,j)

 
}

/*
function overlap () {

    //when user interacts with a new platform that platform now becomes the new floor they use
    if (kirb.x > rectangle.x && kirb.x < rectangle.x + rectangle.sizeR1) {
        kirb.floor = rectangle.y; 
    } else {
        kirb.floor = 750;
    }


}
*/


