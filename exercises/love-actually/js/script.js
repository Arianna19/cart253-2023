/**
 * LOVE ACTUALLY 
 * Arianna Narita
 * Kirby finding his love for cookies by chasing them 
 * Easter egg ending is if user touches upper right corner kirby inflates and becomes "fat"
 * 
 */

"use strict";

/**
 * Description of preload
*/


let imgKirby;

let kirby = {
    x: undefined,
    y: 250,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 3
};

let kirbyCookie = {
    x: undefined,
    y: 250,
    size: 20,
    vx: 0,
    vy: 0,
    speed: 3
};

function preload() {
    imgKirby = loadImage('assets/images/kirbyInhale.png');
}


/**
 * Description of setup
*/

let state = 'first screen'; 

function setup() {
    createCanvas(800,800);
    setUpCharacters();

}

function setUpCharacters() {
    //where the cookie and kirby will appear
    kirby.x = width / 3;
    kirbyCookie.x = 2 * width / 3;


    //Where kirby and the cookie move and start
    kirby.vx = random(-kirby.speed,kirby.speed);
    kirby.vy = random(-kirby.speed,kirby.speed);
    kirbyCookie.vx = random(-circle2.speed,circle2.speed);
    kirbyCookie.vy = random(-kirbyCookie.speed,kirbyCookie.speed);


}


/**
 * Description of draw()
*/
function draw() {
    background
    if (state === `start`) { //clicking space to start 
        start();
    }
    else if (state === `simulation`) { //kirby chasing the cookie
        simulation();
    }
    else if (state === `happy eating`) { //cookie spawning randomly 
        cookie(); 
  }
    else if (state === `hungry kirby`) { //kirby gets a cookie and is happy 
        noCookie();
}

function start() {
    push();
    textSize(50);
    fill('pink');
    textAlign(CENTER, CENTER);
    text('Hungry?')
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('space to start')
    pop();
}

function simulation() {
    move();
    checkOffscreen();
    checkOverlap();
    display();
}

function cookie() {
    push();
    textSize(70);
    fill('yellow');
    textAlign(CENTER, CENTER);
    text('YUUM', width/2, height/2);
    pop();
}

function noCookie() {
    push();
    textSize(60);
    fill('purple');
    textAlign(CENTER, CENTER);
    text('Hungry Kirby :(', width/2, height/2);
    pop();
}

function move() {
    //Move Kirby by user's mouse
    kirby.x = mouseX - kirby.size/2;
    kirby.y = mouseY - kirby.size/2;

    //cookie spawns randomly 
    cookie.x = cookie.x + cookie.vx;
    cookie.y = cookie.y + cookie.vy;
}

function checkOffscreen() {
    //checks if cookie goes off the screen
    if (isOffscreen(kirbyCookie)) {
        state = `hungry kirby`;
    }
}

function checkOffscreen(imgKirby) {
    if (imgKirby.x < 0 || imgKirby.x > width || imgKirby.y < 0 || imgKirby.y > height) {
        return true;
    }
    else {
        return false;
    }
}


}