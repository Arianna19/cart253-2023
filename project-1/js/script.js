/*
 * Project 1: Halloween Kirby
 * Arianna Sanchez Narita
 * 
 * Mini game about Kirby dodging ghosts and bats.
 * Kirby's objective is to collect 31 (oct 31st = Halloween) candies without dying
 */


"use strict";


function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(800,800);

    

}


/**
 * Description of draw()
*/
function draw() {
    background('pink');
    bat();
    ghosts();
    kirby();
    bigCandy();
    smallCandy();

    /*if (state === `start`) { //clicking space to start 
        start();
    }
    //Kirby dodging and collecting candies (main part)
    else if (state === `simulation`) { 
        simulation();
    }
    //good ending when user collects 31 candies 
    else if (state === `happy halloween`) { 
        happyHalloween();
    }

    //bad ending of the game where user interacts with over 3 bad elements
    else if (state === `kirby tricked`) {
        kirbyTricked();
    } */
}

function start() {
    //start screen/main menu 
    

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~click enter to start~', width / 2, 450);
    pop();
    

}

function simulation() {
    //where user is dodging bad elements and collecting candy

}

function happyHalloween() {
    //good ending screen
    push();
    textSize(90);
    fill('yellow');
    textAlign(CENTER, CENTER);
    text('You Did it Happy Halloween ٩(^ᴗ^)۶', width / 2, height / 2);
    pop();

}

function kirbyTricked() {
    //bad ending screen
    push();
    textSize(50);
    fill('purple');
    textAlign(CENTER, CENTER);
    text('Kirby Got Tricked', width / 2, height / 2);
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~Click enter to try again~', width / 2, 450);
    pop();

}

function bigCandy() {
    //when interacted with kirby +5
    rect(600, 500, 55, 80);

}

function smallCandy() {
    //when interacted with kirby +3 points
    rect(670, 500, 35, 35);

}

function bat() {
    //when interacted with kirby -1 life (bad element)
    circle(650, 400, 60, 60);

}

function ghosts() {
    //when interacted with kirby -1 life (bad element)
    circle(550, 400, 80, 60);


}

function kirby() {
    //how user controls kirby
    ellipse(200, mouseY, 60, 80);
    

    
    

}

function restartGame() {

}

function candyCounter() {
    //keeps track of the amount of candies collected by user
    let i = 0;
    if (i < 31 && (kirby === bigCandy || kirby === smallCandy)) {
        i++;
        return i;
    }

}

function kirbyLives() {
    //user gets 3 lives at the beginning of game
    let lives = 0;
    
    

}