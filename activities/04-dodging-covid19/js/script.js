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




function preload() {

}


/**
 * Description of setup
*/
let bowser = { //settings of the thing that will "hurt" kirby 
    x:0,
    y:250,
    size:150,
    velocityX:0,
    velocityY:0,
    speed:5,
    fill: {
        r: 244, //yellow color
        g: 255,
        b: 92

    } 
}

let user = {
    x: 250,
    y: 250,
    size: 50,
    fill: {
        r2: 255,
        g2: 130,
        b2: 245
    }
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    bowser.y = random(0,height);
    bowser.velocityX = bowser.speed;

    noCursor(); //removes the cursor and you just play as kirby
}


/**
 * Description of draw()
*/
function draw() {

    background(130,228,255);

    //fun background things, making it crazy 
    for (let i = 0; i < 150; i++) { 
    let s = random(0,width);
    let s2 = random(0,height);
    strokeWeight(10);
    stroke(219,211,44);
    point(s,s2);
    }



    //the way bowser moves to eat kirby
    bowser.x = bowser.x + bowser.velocityX
    bowser.y = bowser.y + bowser.velocityY

    if (bowser.x > width) {
        bowser.x = 0;
        bowser.y = random(0,height);
    }

    //how user kirby moves across the screen
    user.x = mouseX;
    user.y = mouseY;

    //if kirby is sadly caught by bowser -> stops the program when they meet
    let kDeath = dist(user.x,user.y,bowser.x,bowser.y);
        if (kDeath < bowser.size/2 + user.size/2) {
            noLoop();
        }

    //the way bowser appears
    fill(bowser.fill.r,bowser.fill.g,bowser.fill.b);
    noStroke();
    ellipse(bowser.x, bowser.y, bowser.size);

    //kirby spawn (user)
    fill(user.fill.r2,user.fill.g2,user.fill.b2); //using the rgb values given at the top
    ellipse(user.x,user.y,user.size);



}