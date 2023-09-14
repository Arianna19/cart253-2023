/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(640, 480);
    background(50,162,168);
    noStroke();

    //For drawing the body
    fill(131,50,168);
    ellipse(320,480,500,660);

    //Doing the ears
        //left ear
    arc(450, 155, 80, 80, 0, PI + QUARTER_PI, PIE);
    describe('A purple ellipse. The top-right third is missing.');
        //right ear
    
    arc(200, 155, 80, 80, 0, PI + QUARTER_PI, PIE);
    describe('A purple ellipse. The top-right third is missing.');

    //Center eye part
    fill(63,24,82);
    ellipse(320,300,300,200);

    //Draw the eyes
    fill(226,213,232);
    ellipse(250,310,60,60);
    ellipse(390,310,60,60);

    //Draw the mouth 
    //stroke(200,500,150);
    //strokeWeight(5);
    //rectMode(CENTER);
    //rect(320,400,120,15);

}


/**
 * Description of draw()
*/
function draw() {


}