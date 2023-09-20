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
let backgroundColour = (500,200,100);
let circleSize = 200;
let circleX = 100;
let circleY = 250;
let circleSpeed = 3;

/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
    
}


/**
 * Description of draw()
*/
function draw() {
    background(backgroundColour);
    fill(90,600,700);
    /*ellipse(250,250,400,400);
    ellipse(250,250,300,300);
    ellipse(250,250,200,200);*/
    circleX = circleX + circleSpeed;
    circleSpeed += circleSpeed + 0.25;
    ellipse(circleX,circleY,circleSize);

}