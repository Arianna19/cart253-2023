/**
 * Make Some Noise exercise
 * 
 *  Arianna Narita
 * 
 * Basically just a program with balls bouncing around but that each have different 
 * pitches and each time the ball bounces a new ones spawns
 * Main objective was just to learn how to play around with sound a bit since 
 * it was my first time using it. 
 */

"use strict";

let gravityForce = 0.0025;

let bounceSound;
//pitch that varies for the bounce sound
let rates = [1, 2, 3, 4, 5];
//array for the balls spawning
let balls = [];
//amount of balls to show in the array
let numBalls = 4;


function preload() {

    bounceSound = loadSound(`assets/sounds/bloop_x.wav`);

}

function setup() {

    createCanvas(550, 600);

    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let ball = new Ball(x, y, bounceSound);
        balls.push(ball);
    }

}

function draw() {

    background(219, 191, 90);

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.gravity(gravityForce);
        ball.move();
        ball.bounce();
        ball.display();
        ball.touching();

        if(ball.touch === false) {
            console.log("idk");
        }
    }

    
}



