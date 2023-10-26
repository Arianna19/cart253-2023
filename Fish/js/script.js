/**
 * Age of Aquariums 
 * Arianna Sanchez Narita
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let imgbubble; //image of bubble
let imgKirby; //image of kirby 
let bubbleFrenzy = []; //creating an array (like a box holding multiple things with different positions for storage) starting from zero + go well with for loops
let bubbleFrenzySize = 250; //we want to avoid hard coded numbers in the code itself + easily modifiable




function preload() {

    imgbubble = loadImage('assets/images/bubble.png'); //initailly was a cookie idea but followed the underwater theme
    imgKirby = loadImage('assets/images/kirbyFish.webp');

}



function setup() {
    createCanvas(600, 600);

    //randomly create bubbles and random places based on height and width
    //for loops are used/useful for counting things and avoided to copy paste all the time
    for (let i = 0; i < bubbleFrenzySize; i++) { //start at zero and keep going until there are 4 fish
        let bubblePop = createBubble(random(0, width), random(0, height));
        bubbleFrenzy.push(bubblePop); //add one add one add one..

        //fishSchool[i] = createFish(random(0, width), random(0, height)); //the numbers in square brakets are called indexes, values after equal sign are called elements
    }
}

//makes new javascript object giving the thing properties and returns the overall output 
function createBubble(x, y) {
    let bubble = {
        x: x,
        y: y,
        size: random(20, 50), //have random sized to include more parameters as requested
        //sizeC: random(20,50),
        vx: 0,
        vy: 0,
        speed: 1,
        popped: false //a place to check when or if the bubble is popped
    };
    return bubble;
}

//makes the bubbles appear and move around
function draw() {
    background(10, 149, 191);
    mouseMoved();
    noCursor();
    timeCount();
    restart();

    for (let i = 0; i < bubbleFrenzy.length; i++) { //length property knows how many things are in the array and is constantly up to date ALWAYS USE IT AFTER
        moveBubble(bubbleFrenzy[i]); //each time we call the  funtion we give it one of the objects and it moves 
        displayBubble(bubbleFrenzy[i]);
        //popBubble(bubbleFrenzy[i]);
        checkBubble(bubbleFrenzy[i]);


    }

    if (state === `simulation`) { //kirby chasing the bubbles
        simulation();
    }
    else if (state === `popped all`) { //all bubbles are off screen/popped 
        poppedAll();
    }
    else if (state === `no time`) { //kirby gets a cookie and is happy 
        noTime();
    }
}

let state = 'simulation';
let timer = 5;

//screen where user pops the bubbles
function simulation() {

    push();
    textSize(45);
    fill(232, 144, 44);
    textFont('Hevaltica');
    text('Help Kirby pop the bubbles ', 20, 40);
    pop();

    push();
    textSize(25);
    fill(209, 40, 21);
    textFont('Hevaltica');
    text('Time left: ' + timer, 20, 75);
    pop();


}

//screen that pops up when user pops all the bubbles
function poppedAll() {
    push();
    textSize(50);
    fill('White');
    textFont('Hevaltica')
    textAlign(CENTER, CENTER);
    text('You Cleared the Path for Kirby!!! (>‿◠)✌', width / 2, height / 2);
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~click enter to restart~', width / 2, 450);
    pop();
}


function allGone() {
    if (bubblePop == true) {
        state = `popped all`;
    }

}

function timeCount() {
    //timer
    //frameCount keeps track the amount of times prog has gone through this statement
    if (frameCount % 60 == 0 && timer > 0) { //a minute has gone by if the number if dividable by 60
        timer--; //remove from the timer if this condition is met
    }
    if (timer == 0) {
        state = `no time` //if there is no more time move to the no time state
    }
}

//screen that shows when user runs out of time to pop the bubbles
function noTime() {
    push();
    textSize(50);
    fill('White');
    textFont('Hevaltica')
    text('You ran out of time (╥﹏╥)', 20, height / 2);
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~click enter to restart~', width / 2, 350);
    pop();
}

function moveBubble(bubble) {
    //let the program choose if it wants to change direction
    let change = random(0, 1); //generate a random number between 0 and 1 and put into a variable called change 
    if (change < 0.05) {
        bubble.vx = random(-bubble.speed, bubble.speed); //choose a random number between negative of speed or positive of speed
        bubble.yx = random(-bubble.speed, bubble.speed);
    }

    //move the cookies
    bubble.x = bubble.x + bubble.vx; //change position by adding their velocities to their position 
    bubble.y = bubble.y + bubble.vy; //change position by adding their velocities to their position 

    //keep the cookies in the canvas with a constrain 
    bubble.x = constrain(bubble.x, 0, 550); //x constrained to be contained between 0 and the width 
    bubble.y = constrain(bubble.y, 0, 550); //y constrained to be contained between 0 and the height 

}

function displayBubble(bubble) {
    if (!bubble.popped) { //if the bubble is not popped(false) then keep the image of the bubble on screen
        push();
        image(imgbubble, bubble.x, bubble.y, bubble.size, bubble.size);
        pop();
    }
}

function checkBubble(bubble) {
    if (!bubble.popped) {
        let d = dist(kirby.x, kirby.y, bubble.x, bubble.y); //creating a distance of when kirby and the bubbles interact
        if (d < kirby.size / 2) { //if the previous distance is smaller then kirby's initial size then the bubble is popped
            bubble.popped = true; //popped bubble so return it to being true and vanishing because it is popped so remove image or stop displaying image
        }
    }
}

//characteristics for kirby
let kirby = {
    x: undefined,
    y: 250,
    size: 100,
    sizeK: 80,
}

//how user moves kirby 
function mouseMoved() {

    image(imgKirby, kirby.x, kirby.y, kirby.size, kirby.sizeK); //loading kirby in canvas

    kirby.x = mouseX - kirby.size / 2; //user moves kirby with mouse
    kirby.y = mouseY - kirby.size / 2;
}

function restart() {

    //how the player starts
    if (keyIsDown(32) && state === 'no Time') { //if space is down while on the start screen make the game go in the simulation state
        state = 'simulation';

    }
}













    /*function popBubble(bubble) {
        if (kirby.y > bubble.y && kirby.y < bubble.size + bubble.y) {
            if (kirby.x > bubble.x && kirby.x < bubble.size + bubble.x) {
                bubbleFrenzy.pop(bubble);
                console.log("bubbbles");
            }
        }
    
    }
    


    function mousePressed() {
        let bubble = createBubble(mouseX, mouseY);
        bubbleFrenzy.pop(bubble);
    }

    //how to be able to add in the array 
    function mousePressed() {
        let bubble = createBubble(mouseX, mouseY);
        bubbleFrenzy.splice(bubble); //push function takes whatever thing in the () and puts it inside fishSchool array at the end of it
    } */

