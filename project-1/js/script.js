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
    createCanvas(500,500);
    

}


/**
 * Description of draw()
*/
function draw() {

    if (state === `start`) { //clicking space to start 
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
    }
}

function start() {
    //start screen/main menu 

}

function simulation() {
    //where user is dodging bad elements and collecting candy

}

function happyHalloween() {
    //good ending screen

}

function kirbyTricked() {
    //bad ending screen

}

function bigCandy() {
    //when interacted with kirby +5

}

function smallCandy() {
    //when interacted with kirby +3 points

}

function bat() {
    //when interacted with kirby -1 life (bad element)

}

function ghosts() {
    //when interacted with kirby -1 life (bad element)

}

function kirby() {

}

function restartGame() {

}

function candyCounter() {
    //keeps track of the amount of candies collected by user

}

function kirbyLives() {
    //user gets 3 lives at the beginning of game

}