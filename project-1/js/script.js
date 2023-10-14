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



console.log(rects.verticalBot())
console.log(rects2.verticalBot())
console.log(rects3.verticalBot())
function draw() {

    background('pink');

    rects.draw();
   // rects2.draw();
   // rects3.draw();
    kirb.draw();


}

/*
function death() {
    if (rects.x==kirb.x) {
        if (kirb.y > rects.yT && kirb.y < rects.heightT + rects.yT) {
            //console.log("i died ")
        }
        if (kirb.y > rects.yB && kirb.y <  rects.heightB + rects.yB) {
          //  console.log("i died2 ")

        }
    }

    if (rects.heightT >= kirb.y) {
        if (kirb.x > rects.x && kirb.x < rects.x + rects.width)
            console.log("top ")
    }

    if (rects.yB <= kirb.y) {
        if (kirb.x > rects.x && kirb.x < rects.x + rects.width)
            console.log("bottom")

    }
    

    

}
*/

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


