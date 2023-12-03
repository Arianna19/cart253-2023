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
let imgTree;
let imgSnowman;
let imgSnowman2;
let imgMoutains;
let imgStarCursor;
let imgLights;
let derpyKirb;


let state = 'start screen'

//where gifs are defined 
let snowflakeFalling;
let snowflakeFallingCreate;
let candyArrow;
let dancingKirb;

//where sounds are defined
let xmasMainMusic;

let kirb;
let map1;

//let door1;
if (sessionStorage.getItem("door") === null) {
  sessionStorage['door'] = "0";
}

if (sessionStorage.getItem("state") === null) {
  sessionStorage['state'] = "start screen";
} else {
  state = sessionStorage.getItem("state");

}

function preload() {

  //loading images
  imgPortal1 = loadImage('assets/images/portal1.png');
  imgCuteKirby = loadImage('assets/images/walkingKirby.gif');
  imgCuteKirby2 = loadImage('assets/images/walkingKirby-rotate.gif');
  imgTree = loadImage('assets/images/treeSnow.webp');
  snowPlat = loadImage('assets/images/snowPlatform2.png');
  imgSnowman = loadImage('assets/images/snowMan.png');
  imgSnowman2 = loadImage('assets/images/imageSnowman2.webp');
  imgStarCursor = loadImage('assets/images/star.png');
  imgLights = loadImage('assets/images/lights.webp');
  derpyKirb = loadImage('assets/images/endScreen.webp');



  //loading gifs
  snowflakeFalling = loadImage('assets/images/giphy.gif');
  candyArrow = loadImage('assets/images/arrowChristmas.gif');
  dancingKirb = loadImage('assets/images/win.gif');
  //snowflakeFallingCreate = createImg('assets/images/giphy.gif');

  //loading sounds
  xmasMainMusic = loadSound('assets/sounds/ghettoChristmas.mp3');

}

function setup() {
  createCanvas(800, 850); //set 800 by 850 when done
  kirb = new Kirby(imgCuteKirby, imgCuteKirby2, snowflakeFalling);
  map1 = new mainMap(kirb);

  xmasMainMusic.play(); //UNCOMMENT THIS PART BEFORE SUBMITTING ITS MUSICCCCC

}

function draw() {

  menu();
  replay();

  getAudioContext().resume(); //UNCOMMENT THIS PART BEFORE SUBMITTING ITS MUSICCCCC

  if (state === `start screen`) { //title screen with a little bit of instructions
    startScreen();
  }
  else if (state === `simulation`) {  //the actual game
    simulation();
  }
  else if (state === `win game`) { //when all the mini games are cleared successfullys
    winGame();
  }
  happyEnding();
}

function startScreen() {

  push();
  createCanvas(800, 850)
  background(108, 191, 240);
  textSize(42);
  fill('pink');
  textFont('Hevaltica');
  text('ULTIMATE KIRBY WORLD(✿◠‿◠)', 70, 450);
  pop();

  push();
  textSize(15);
  fill('black');
  textAlign(CENTER, CENTER);
  text('{Help Kirby conquer winter by completing each mini quest!!!}', width / 2, 473);
  pop();

  push();
  textSize(20);
  fill(95, 179, 117);
  textAlign(CENTER, CENTER);
  text('~click enter to restart~', width / 2, 500);
  pop();

  image(imgLights, 0, 20, 500, 100);
  image(imgLights, 500, 740, 500, 100);

}

function simulation() {

  background(108, 191, 240);

  map1.draw();
  push();

  //images and where trees are
  image(imgTree, 200, 605, 150, 200);
  image(imgTree, 180, 655, 100, 150);
  image(imgTree, 700, 655, 100, 150);
  image(imgTree, 1400, 505, 200, 300);
  image(imgTree, 1320, 555, 155, 250);
  image(imgTree, 1490, 625, 155, 180);
  image(imgTree, 1550, 655, 100, 150);
  image(imgTree, 1200, 625, 130, 180);


  //images for where snowmen are
  image(imgSnowman, 755, 760, 40, 50);
  image(imgSnowman2, 1345, 760, 40, 50);
  pop();

}

function winGame() {

  push();
  createCanvas(800, 850)
  background(108, 191, 240);
  textSize(39);
  fill('pink');
  textFont('Hevaltica');
  textAlign(CENTER, CENTER);
  text('YOU DID IT! KIRBY CONQUERED WINTER', width / 2, height / 2);
  pop();

  push();
  textSize(42);
  fill('pink');
  textAlign(CENTER, CENTER);
  text('（‐＾▽＾‐）', width / 2, 470);
  pop();

  push();
  textSize(20);
  fill('blue');
  textAlign(CENTER, CENTER);
  text('~click enter to replay~', width / 2, 515);
  pop();

  image(derpyKirb, 245, 550, 330, 250);
  image(dancingKirb, 245, 120, 330, 250);
}

function menu() {

  //how the player starts the GAME
  if (keyIsDown(ENTER) && state === 'start screen') {
    state = 'simulation';
    sessionStorage['state'] = state;
  }
}

function happyEnding() { //how the player clears the main game

  if (sessionStorage.getItem("door") == Door.count) {
    state = 'win game';
  }

}

function replay() {
  if (keyIsDown(ENTER) && state === 'win game') {
    state = 'simulation';
    sessionStorage['state'] = state;
    sessionStorage['door'] = "0";

  }
}