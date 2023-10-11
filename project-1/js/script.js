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
    kirbyLives();
    candyCounter();

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

let bCandy = {
    x: 600,
    y: 500,
    size: 55,
    sizeBC: 80,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 255,
        g: 20,
        b: 20
    }
}


function bigCandy() {
    //when interacted with kirby +5
    push();
    rect(bCandy.x, bCandy.y, bCandy.size, bCandy.sizeBC);
    fill(bCandy.fill.r, bCandy.fill.g, bCandy.fill.b);
    pop();
    
}

let sCandy = {
    x: 670,
    y: 500,
    size: 35,
    sizeSC: 35,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 20,
        g: 255,
        b: 20
    }
}

function smallCandy() {
    //when interacted with kirby +3 points
    push();
    rect(sCandy.x, sCandy.y, sCandy.size, sCandy.sizeSC);
    fill(sCandy.fill.r, sCandy.fill.g, sCandy.fill.b);
    pop();

}

let bats = {
    x: 650,
    y: 400,
    size: 60,
    sizeB: 60,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 0,
        g: 0,
        b: 0
    }
}

function bat() {
    //when interacted with kirby -1 life (bad element)
    push();
    circle(bats.x, bats.y, bats.size, bats.sizeB);
    fill(bats.fill.r, bats.fill.g, bats.fill.b);
    pop();

}

let ghost = {
    x: 550,
    y: 400,
    size: 90,
    sizeG: 60,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
}

function ghosts() {
    //when interacted with kirby -1 life (bad element)
    push();
    circle(ghost.x, ghost.y, ghost.size, ghost.sizeG);
    fill(ghost.fill.r, ghost.fill.g, ghost.fill.b);
    pop();


}

let kirbyUser = {
    x: 200,
    y: 50,
    size: 50,
    sizeK: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
}


function kirby() {
    //how user controls kirby
    push();
    ellipse(kirbyUser.x, mouseY, kirbyUser.size, kirbyUser.sizeK);
    fill(kirbyUser.fill.r, kirbyUser.fill.g, kirbyUser.fill.b);
    pop();
    

    
    

}

function restartGame() {

   // if (keyIsDown(ENTER) && state === `happy halloween`) {
   //     state = 'simulation';

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
    let lives = 3;
    if (lives <= 3 && (kirby === ghosts || kirby === bat)) {
        lives -= 1; 
        return lives;
    }
    
}