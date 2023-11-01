/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/

let backgroundColour = ("pink");


function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
}

function circleBig(x,y) {
    push();
    fill(mouseX,191,250);
    noStroke();
    translate(x,y);
    circle(0,0,450)
    pop();
}


function circleSmall(x,y) {

   // let circleHeight = constrain(450,440,440);
   // let circleWidth = constrain(450,440,440);

    push();
    fill(40,69,199);
    strokeWeight(10);
    translate(x,y);
    point(0,0)
    pop();
}

/**
 * Description of draw()
*/



function draw() {

    background(backgroundColour);


    let circleStartX = 20;
    let circleStartY = 470;


    circleBig(250,250);
    let weird = constrain(mouseX,circleStartX,circleStartY);
    let weird2 = constrain(mouseY,circleStartX,circleStartY);
    

    
    // 20/30    40/80   50/50   40/41  23/50
    console.log(mouseX,"mouseX")
    console.log(map(mouseX,0,500,0,255));
   // console.log(mouseX*255/500)


    circleSmall(weird,weird2);

}