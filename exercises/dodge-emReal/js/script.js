/**
 * Covid-19 (please don't happen again)
 * Arianna Narita
 * 
 * Idea is: kirby eating cakes and bowser chasing him
 */

"use strict";

/**
 * Description of preload
 * 
*/



let img;
let imgB;
let imgT;

function preload() {
   img = loadImage('assets/images/kirbyInhale.png');
   imgB = loadImage('assets/images/bowserBad.png');
   imgT = loadImage('assets/images/turtleDude.png');
}


/**
 * Description of setup
*/
let bowser = { //settings of the thing that will "hurt" kirby 
    x:0,
    y:250,
    sizeB: 200,
    sizeBo: 250,
    velocityX:0,
    velocityY:0,
    speed:7,
    fill: {
        r: 244, //yellow color
        g: 255,
        b: 92
    } 
}

let user = { //kirby description
    x: 250,
    y: 250,
    size: 100,
    fill: {
        r2: 255,
        g2: 130,
        b2: 245
    }
}

let turtle = { //turtle dude
    x: 250,
    y: 250,
    size: 150,
    velocityX:0,
    velocityY:0,
    speed:7,
    fill: {
        r2: 255,
        g2: 130,
        b2: 245
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    bowser.y = random(0,height); //spawn
    turtle.x = random(width, 0); //spawn
    turtle.velocityY = turtle.speed;
    bowser.velocityX = bowser.speed;
    noCursor();
    
}


/**
 * Description of draw()
*/
function draw() {

    background(130,228,255);
    

    //fun background things, making it crazy 
    for (let i = 0; i < 10; i++) { //every frame 10 dots need to appear per 60sec
    let s = random(0,width);
    let s2 = random(0,height);
    strokeWeight(25);
    stroke(255);
    point(s,s2);
    }

    //the way turtle moves to hurt kirby 
    turtle.x = turtle.x + turtle.velocityX;
    turtle.y = turtle.y + turtle.velocityY;

    if (turtle.y > height) {
        turtle.y = 0;
        turtle.x = random(width,0);
    }

    //the way bowser moves to eat kirby
    bowser.x = bowser.x + bowser.velocityX;
    bowser.y = bowser.y + bowser.velocityY;

    if (bowser.x > width) {
        bowser.x = 0; //if reaches the edge he restarts
        bowser.y = random(0,height);
    }

    //how user kirby moves across the screen
    user.x = mouseX - user.size/2;
    user.y = mouseY - user.size/2;

    //if kirby is sadly caught by bowser/turtle dude -> stops the program when they meet
    let kDeath = dist(user.x,user.y,bowser.x,bowser.y);
        if (kDeath < bowser.sizeB/2 + user.size/2) {
            noLoop();
        }
    
    let kDeathT = dist(user.x,user.y,turtle.x,turtle.y);
        if (kDeathT < turtle.size/2 + user.size/2) {
            noLoop();
        }

    //the way turtle dude appears 
    fill(turtle.fill.r,turtle.fill.g,turtle.fill.b);
    image(imgT, turtle.x, turtle.y, turtle.size, turtle.size);

    //the way bowser appears
    fill(bowser.fill.r,bowser.fill.g,bowser.fill.b);
    image(imgB, bowser.x, bowser.y, bowser.sizeB, bowser.sizeBo);

    //changing kirby colour based on movement (if else statement)
    if (mouseX === pmouseX && mouseY === pmouseY) { //if before and after are different change
        push();
        image(img, user.x, user.y, user.size, user.size); //regular colour 
        pop();
      
    } else { //if the mouse is at the same position as the previous "draw" don't change colour
        push();
        tint(random(255), random(255), random(255)); //any colour based off of movement
        image(img, user.x, user.y, user.size, user.size);
        pop();
    }
}
















