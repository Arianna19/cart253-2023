/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// main body
function circleMan(x,y) { 
    //draw images
    push();
    fill("purple");
    translate(x,y);
    circle(0,0,200)
    pop();

}

let eyeSize = 15
let change = true 
function circleEyes(x,y) {
    //giving the eyes contraint to stay within the head 
    let etX = constrain(map(mouseX,0,500,-100+40,100-40),-100+40,100-40) 
    let etY = constrain(map(mouseY,0,500,-100+40,100-40),-100+40,100-40) 
    

    //Have the eyes grow and shrink 
    if(eyeSize<15&&change){
        eyeSize+=.1
    }else{
        change=false
    }
    if(eyeSize>0&&!change){
        eyeSize-=.1
    }else{
        change=true
    }

    //draw images
    push();
    fill("pink");
    translate(x,y);
    circle(0+etX,0+etY,40)
    fill("black");
    circle(0+etX,0+etY,eyeSize)
    pop();   
    
}



// mouth 
function arcMouth(x,y) {   
    //giving the mouth contraint to stay within the head 
    let etX = constrain(map(mouseX,0,500,-100+40,100-40),-100+40,100-40) 
    let etY = constrain(map(mouseY,0,500,-100+40,100-40),-100+40,100-40) 


    //draw images
    push();
    fill(0);
    translate(x+etX,y+etY);
    arc(0,0,50,50,0,PI, PIE);
    pop();
}

//holding all the body parts together
function happyGuy(x,y) {
    //draw images
    push();
    translate(x,y);
    circleMan(250,250); //body
    arcMouth(250,280); //mouth
    circleEyes(230,250); //left eye
    circleEyes(270,250); //right eye
    pop();

}


/**
 * Description of setup
*/
function setup() {
    //background colour and settings 
    createCanvas(500,500);
}


/**
 * Description of draw()
*/
let colorX = 159
let colorY = 100

function draw() {
    //color pallete change within a purple constraint
    colorX = constrain(map(mouseX,0,500,60,170),80,170);
    colorY = constrain(map(mouseY,0,500,50,119),50,119);
    background(colorX,colorY,171) ;
    happyGuy(0,0);

}