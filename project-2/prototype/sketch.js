/**
 * Project 2: Ultimate Kirby World: Prototype 
 * 
 *  Arianna Narita
 * 
 * This prototype is just to show the overall direction the main world will take 
 *  1. Platforms to jump on
 *  2. user interaction 
 *  3. Camera locked on to the user
 * 
 * MAIN POINT:
 * Basically a main Kirby world which is a platform concept.
 * The world will have secret tunnels that will lead to past assignments.
 * 
 */

//where images are defined 
let imgCuteKirby;
let imgPortal1;
let snowPlat;

//where gifs are defined 
let snowflakeFalling;
let snowflakeFallingCreate;

let kirb;
let map1;
//let door1;
if (sessionStorage.getItem("door") === null) {
  sessionStorage['door'] = "0";
}

function preload() {

  imgPortal1 = loadImage('assets/images/portal1.png');
  imgCuteKirby = loadImage('assets/images/walkingKirby.png');
  snowPlat = loadImage('assets/images/snowPlatform2.png');

  snowflakeFalling = loadImage('assets/images/giphy.gif');
  //snowflakeFallingCreate = createImg('assets/images/giphy.gif');

}

function setup() {
  createCanvas(2575, 850); //set 800 by 850 when done
  kirb = new Kirby(imgCuteKirby, snowflakeFalling);
  map1 = new mainMap(kirb);

}

function draw() {

  background(108, 191, 240);
  map1.draw();

 /* if (state === `start screen`) { //title screen with a little bit of instructions
    startScreen();
  }
  else if (state === `simulation`) {  //the actual game
    simulation();
  }
  else if (state === `win game`) { //when all the mini games are cleared successfullys
    winGame();
  } */

} 

function startScreen() {

  push();
    textSize(45);
    fill(250, 142, 0);
    textFont('Hevaltica');
    text('PLACE HOLDER TITLE ', 20, 40);
    pop();

    push();
    textSize(20);
    fill('blue');
    textAlign(CENTER, CENTER);
    text('~click enter to restart~', width / 2, 450);
    pop();

}

function simulation() {

}

function winGame() {

  push();
  textSize(90);
  fill('yellow');
  textAlign(CENTER, CENTER);
  text('PLACE HOLDER TEXTTTT', width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill('blue');
  textAlign(CENTER, CENTER);
  text('~click enter to replay~', width / 2, 450);
  pop();

}