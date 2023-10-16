/*
 * Project 1: Halloween Kirby
 * Arianna Sanchez Narita
 * 
 * Mini game about Kirby dodging ghosts and bats.
 * Kirby's objective is to collect 31 (oct 31st = Halloween) candies without dying
 */


"use strict";

let imgHalloweenKirb;
let bg;
let deathImg;
let imgWall;


function preload() {

    imgHalloweenKirb = loadImage('assets/images/pixelKirby.png');
    bg = loadImage('assets/images/nightSky.jpg');
    deathImg = loadImage('assets/images/ghostface.png');
    imgWall = loadImage('assets/images/brickwall.jpg');

}


let kirb = new Kirby(imgHalloweenKirb);
let rects = new Rectangle(kirb, imgWall);
let rects2 = new Rectangle(kirb, imgWall);
let rects3 = new Rectangle(kirb, imgWall);


function setup() {
    createCanvas(800, 800);
}


function draw() {

    background(bg);
    mainMenu();


    if (state === `start`) { //clicking space to start screen
        start();
    } else if (state === `simulation`) {
        simulation();
    } else if (state === `you died`) {
        youDied();
    }

}

let state = 'start';
//screen for when player starts the game
function start() {

    push();
    textSize(100);
    fill(255, 149, 0);
    textAlign(CENTER, CENTER);
    textFont('Georgia');
    text('Trick or Treat', width / 2, height / 2);
    pop();

    push();
    textSize(25);
    fill(255, 217, 0);
    textAlign(CENTER, CENTER)
    textFont('Georgia');
    text('Click Space to Start', width / 2, 460);
    pop();


}

//the actual game 
function simulation() {

    rects.draw();
    rects2.draw();
    rects3.draw();
    kirb.draw();

    push();
    textSize(40);
    textFont('Georgia');
    fill(224, 188, 4)
    text('Points: ' + Rectangle.points, 50, 100);
    pop();

    if (!kirb.alive) {
        state = 'you died'
    }


}

//when user dies screen
function youDied() {

    push();
    tint(255, 128);
    image(deathImg, 150, 150, 500, 500);
    pop();

    push();
    textSize(80);
    fill(156, 6, 31);
    textAlign(CENTER, CENTER);
    textFont('Georgia');
    text('Kirby Got Tricked', width / 2, height / 2);
    pop();

    push();
    textSize(25);
    fill(255, 217, 0);
    textAlign(CENTER, CENTER);
    textFont('Georgia');
    text('Click ESC to Restart', width / 2, 450);
    pop();

    push();
    textSize(50);
    textFont('Georgia');
    fill(237, 225, 164)
    textAlign(CENTER, CENTER);
    text('Score: ' + Rectangle.points, width / 2, 280);
    pop();


    if (keyIsDown(27) && state === 'you died') {

        Rectangle.points = 0;
        Rectangle.numberRects = 0;
        kirb = new Kirby(imgHalloweenKirb);
        rects = new Rectangle(kirb);
        rects2 = new Rectangle(kirb);
        rects3 = new Rectangle(kirb);
        state = 'simulation';
    }

}

function mainMenu() {

    //how the player starts
    if (keyIsDown(32) && state === 'start') {
        state = 'simulation';

    }
}









