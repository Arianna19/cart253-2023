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
let rects2 = new Rectangle();

/**
 * Description of setup
*/
function setup() {
    createCanvas(800, 1300);
    //cam = createCamera();
}

var lol = false

function draw() {
    if(!lol){
        rects2.x = 200
        lol =true
    }
    background('pink');
    rects.x-- 
    rects2.x-- 

    if(rects.x<=0){
        rects.x = 800
        rects.random()
    }
    if(rects2.x<=0){
        rects2.x = 800
        rects2.random()
    }
    rects.draw();
    rects2.draw();

    kirb.draw();
    push()
    stroke(80, 20, 255);
    strokeWeight(4);
    line(0,1000,800,1000)
    pop()
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


