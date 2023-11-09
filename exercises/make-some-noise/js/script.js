/**
 * Make Some Noise exercise
 * 
 *  Arianna Narita
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let gravityForce = 0.0025;

//array for the balls spawning
let balls = [];
//amount of balls to show in the array
let numBalls = 3;


function preload() {

}

function setup() {

    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let ball = new Ball(x, y);
        balls.push(ball);
    }

}

function draw() {

    background(219, 191, 90);

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        //if (ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce();
            ball.display();
       // }
    }


}