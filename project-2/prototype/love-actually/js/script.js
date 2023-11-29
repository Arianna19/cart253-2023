/**
 * LOVE ACTUALLY (KIRBY ACTUALLY)
 * Arianna Narita
 * Kirby finding his love for cookies by chasing them 
 * Easter egg ending is if user touches border kirby inflates and becomes "fat"
 * 
 */

"use strict";

/**
 * Description of preload
*/


let imgKirby;
let imgCookie;
let imgFatKirby;
let imgKirby2;

let kirby = {
    x: undefined,
    y: 250,
    size: 80,
    sizeK: 80,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 255,
        g: 130,
        b: 245
    }
}

let kirbyCookie = {
    x: undefined,
    y: 250,
    size: 55,
    sizeC: 55,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r2: 255,
        g2: 130,
        b2: 245
    }
}


function preload() {

    imgKirby = loadImage('assets/images/kirbyInhale.png');
    imgKirby2 = loadImage('assets/images/kirbyInhale.png');

    imgCookie = loadImage('assets/images/cookie.png');
    imgFatKirby = loadImage('assets/images/fatKirby.png');

}


/**
 * Description of setup
*/

let state = 'start';

function setup() {
    createCanvas(800, 800);
    setUpCharacters();
    noCursor();


}

function setUpCharacters() {

    //where the cookie and kirby will appear
    kirby.x = width / 3;
    kirbyCookie.x = random(200, 600);
    kirbyCookie.y = random(200, 600);


    //How the cookie moves from the start randomly spawning and using a random speed
    kirbyCookie.vx = random(-kirbyCookie.speed, kirbyCookie.speed);
    kirbyCookie.vy = random(-kirbyCookie.speed, kirbyCookie.speed);

    //restarting as normal size kirby
    imgKirby = imgKirby2;

}


/**
 * Description of draw()
*/
function draw() {

    background("pink");
    border();
    menu();
    restart();
    badEndingRestart();
    checkOffscreen();
    isOffscreen();

    if (state === `start`) { //clicking space to start 
        start();
    }
    else if (state === `simulation`) { //kirby chasing the cookie
        simulation();
    }
    else if (state === `happy eating`) { //cookie spawning randomly 
        happyEating();
    }
    else if (state === `hungry kirby`) { //kirby gets a cookie and is happy 
        hungryKirby();
    }
}

function start() {

    push();
    textSize(50);
    textFont('Hevaltica');
    fill('Yellow');
    textAlign(CENTER, CENTER);
    text('Help Feed Hungry Kirby', width / 2, height / 2);
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~click enter to start~', width / 2, 450);
    pop();

}

function simulation() {

    move();
    checkOffscreen();
    checkOverlap();
    display();

}


function happyEating() {

    //what displays depending on the differnt stages of the 'gane'
    push();
    textSize(90);
    fill('yellow');
    textAlign(CENTER, CENTER);
    text('YUUM!!! ٩(^ᴗ^)۶', width / 2, height / 2);
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~click enter to continue~', width / 2, 460);
    pop();

}

function hungryKirby() {
    push();
    textSize(50);
    fill('purple');
    textAlign(CENTER, CENTER);
    text('hungry Kirby (╯°□°)╯︵ ┻━┻', width / 2, height / 2);
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~click enter to restart~', width / 2, 450);
    pop();
}

function move() {

    //how user controls kirby using the mouse
    kirby.x = mouseX - kirby.size / 2;
    kirby.y = mouseY - kirby.size / 2;

    kirbyCookie.x = kirbyCookie.x + kirbyCookie.vx;
    kirbyCookie.y = kirbyCookie.y + kirbyCookie.vy;

}

function checkOffscreen() {

    //checks if cookie goes off the screen
    if (isOffscreen(kirbyCookie) && state === 'simulation') {
        state = `hungry kirby`;
    }
}

function isOffscreen() {

    if (kirbyCookie.x < 0 || kirbyCookie.x > width || kirbyCookie.y < 0 || kirbyCookie.y > height && state === 'simulation') {
        state = `hungry kirby`;
    }
}

function checkOverlap() {

    //if the cookie was eaten by kirby 
    let d = dist(kirby.x, kirby.y, kirbyCookie.x, kirbyCookie.y);
    if (d < kirby.size / 2 + kirbyCookie.size / 2) {
        state = 'happy eating';
    }
}

function display() {

    //spawn kirby and his cookie during the simulation state
    //display kirby 
    fill(kirby.fill.r, kirby.fill.g, kirby.fill.b);
    image(imgKirby, kirby.x, kirby.y, kirby.size, kirby.size);

    //display the cookie
    image(imgCookie, kirbyCookie.x, kirbyCookie.y, kirbyCookie.size, kirbyCookie.sizeC);
    fill(kirbyCookie.fill.r2, kirbyCookie.fill.g2, kirbyCookie.fill.b2);

}

function menu() {

    //how the player starts the cookie game
    if (keyIsDown(ENTER) && state === 'start') {
        state = 'simulation';
    }
}

function restart() {

    //how to restart the game when user wins with the cookie
    if (keyIsDown(ENTER) && state === 'happy eating') {
        sessionStorage['door'] = '4';
        window.location.href = '/';
        state = 'simulation';
        setUpCharacters();
    }
}

function badEndingRestart() {
    //how to restart the game when user doesn't get the cookie before it leaves the screen
    if (keyIsDown(ENTER) && state === `hungry kirby`) {
        state = 'simulation';
        setUpCharacters();

    }
}

function border() {

    //if the player hits the border of the canvas kirby becomes fat 
    //Easter egg part of exercise
    //and extra function
    if (kirby.x <= 0 || kirby.x >= 720 || kirby.y <= 0 || kirby.y >= 720) {
        imgKirby = imgFatKirby;
    }
}







