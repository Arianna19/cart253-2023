/*
 * Flappy Kirby
 * Arianna Sanchez Narita
 * 
 * Objective of the game, simple just get the highest score you can 
 * 
 */


"use strict";

let imgHalloweenKirb;
let bg;
let deathImg;
let imgWall;


function preload() {

    imgHalloweenKirb = loadImage('assets/images/pixelKirby.png'); //kirby's image
    bg = loadImage('assets/images/nightSky.jpg'); //background images
    deathImg = loadImage('assets/images/ghostface.png'); //scary face behind the text on youdied screen 
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

    rects.draw(); //calling all the functions in the draw function of the class Rectangle
    rects2.draw();
    rects3.draw();
    kirb.draw();

    //displaying the counter in top corner
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
    image(deathImg, 150, 150, 500, 500); //scary image in the background of death screen 
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

        //refreshing the game for when the player starts over 
        //recreating new fresh objects
        Rectangle.points = 0;
        Rectangle.numberRects = 0; //restart the count of the amount of objects on the screen to refresh the position of them
        kirb = new Kirby(imgHalloweenKirb);
        rects = new Rectangle(kirb);
        rects2 = new Rectangle(kirb);
        rects3 = new Rectangle(kirb);
        state = 'simulation';
    }

}

function mainMenu() {

    //how the player starts
    if (keyIsDown(32) && state === 'start') { //if space is down while on the start screen make the game go in the simulation state
        state = 'simulation';

    }
}









