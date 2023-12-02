/**
 * DODGE-EM !!!
 * Arianna Narita
 * 
 * Idea is: kirby being chased by a bunch of bad guys but also changes colour
*/

let img;
let imgB;
let imgT;

let state = `simulation`;
let timer = 15;



function preload() {
    img = loadImage('assets/images/kirbyInhale.png');
    imgB = loadImage('assets/images/bowserBad.png');
    imgT = loadImage('assets/images/turtleDude.png');
}
    

let bowser = { //settings of the thing that will "hurt" kirby 
    x: 0,
    y: 250,
    sizeB: 110,
    sizeBo: 150,
    velocityX: 0,
    velocityY: 0,
    speed: 7,
    fill: {
        r: 244, //yellow color
        g: 255,
        b: 92
    }
}

let user = { //kirby description
    x: 250,
    y: 250,
    size: 20,
    fill: {
        r2: 255,
        g2: 130,
        b2: 245
    }
}

let turtle = { //turtle dude
    x: 250,
    y: 250,
    size: 100,
    velocityX: 0,
    velocityY: 0,
    speed: 7,
    fill: {
        r2: 255,
        g2: 130,
        b2: 245
    }
}

function setup() {
    createCanvas(600, 600);

    bowser.y = random(0, height); //spawn
    turtle.x = random(width, 0); //spawn

    turtle.velocityY = turtle.speed;
    bowser.velocityX = bowser.speed;
    noCursor();

}

function draw() {
    background(130, 228, 255);
    timeCount();
    playerDead();
    badEndingRestart();
    restart();

    //fun background things, making it crazy 
    push();
    for (let i = 0; i < 3; i++) { //every frame 10 dots need to appear per 60sec
    let s = random(0,width);
    let s2 = random(0,height);
    strokeWeight(25);
    stroke(255);
    point(s,s2);
    } 
    pop();


    if (state === `simulation`) {
        simulation();
    }
    else if (state === `died`) {
        noTime();
    }
    else if (state === `lived`) {
        lived();
    }

}


function noTime() {
    push();
    textSize(50);
    fill('White');
    textFont('Hevaltica')
    text('You Died (╥﹏╥)', 140, height / 2);
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~click enter to restart~', width / 2, 350);
    pop();
}

function timeCount() {
    //timer
    //frameCount keeps track the amount of times prog has gone through this statement
    if (frameCount % 60 == 0 && timer > 0) { //a minute has gone by if the number if dividable by 60
        timer--; //remove from the timer if this condition is met
    }
    if (timer == 0) {
        state = `lived`;
        if (keyIsDown(13)) {
            sessionStorage['door'] = '2';
            window.location.href = '/';
        }
    }
}


function simulation() {

    push();
    textSize(45);
    fill(`blue`);
    textFont('Hevaltica');
    text("Just don't DIE!", 20, 40);
    pop();

    push();
    textSize(25);
    fill(209, 40, 21);
    textFont('Hevaltica');
    text('Time left: ' + timer + ' secs', 20, 75);
    pop();


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


    //the way turtle dude appears 
    fill(turtle.fill.r, turtle.fill.g, turtle.fill.b);
    image(imgT, turtle.x, turtle.y, turtle.size, turtle.size);

    //the way bowser appears
    fill(bowser.fill.r, bowser.fill.g, bowser.fill.b);
    image(imgB, bowser.x, bowser.y, bowser.sizeB, bowser.sizeBo);

    //the way turtle moves to hurt kirby 
    turtle.x = turtle.x + turtle.velocityX;
    turtle.y = turtle.y + turtle.velocityY;

    if (turtle.y > height) {
        turtle.y = 0;
        turtle.x = random(width, 0);
    }

    //the way bowser moves to eat kirby
    bowser.x = bowser.x + bowser.velocityX;
    bowser.y = bowser.y + bowser.velocityY;

    if (bowser.x > width) {
        bowser.x = 0; //if reaches the edge he restarts
        bowser.y = random(0, height);
    }

    //how the star appears on screen

    //how user kirby moves across the screen
    user.x = mouseX - user.size / 2;
    user.y = mouseY - user.size / 2;

}

function lived() {

    push();
    textSize(50);
    fill('White');
    textFont('Hevaltica')
    textAlign(CENTER, CENTER);
    text('You survived!!!', width / 2, height / 2);
    pop();

    push();
    textSize(45);
    fill('White');
    textFont('Hevaltica')
    textAlign(CENTER, CENTER);
    text('ᕙ(`▿´)ᕗ', width / 2, 350);
    pop();

    push();
    textSize(20);
    fill(`blue`);
    textAlign(CENTER, CENTER);
    text('~click enter to continue~', width / 2, 400);
    pop();

}

function playerDead() {
    let kDeath = dist(user.x, user.y, bowser.x, bowser.y);
    if (kDeath < bowser.sizeB / 2 + user.size / 2) {
        state = `died`;
    }

    let kDeathT = dist(user.x, user.y, turtle.x, turtle.y);
    if (kDeathT < turtle.size / 2 + user.size / 2) {
        state = `died`;
    }

}

function restart() {

    if (keyIsDown(ENTER) && state === `lived`) {
        sessionStorage['door'] = '2';
        window.location.href = '/';
    }
}

function badEndingRestart() {

    if (keyIsDown(ENTER) && state === `died`) {
        timer = 15;
        bowser.y = random(0, height); //spawn
        turtle.x = random(width, 0); //spawn
        state = 'simulation';
    }
}









