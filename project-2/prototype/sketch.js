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

//where gifs are defined 
let snowflakeFalling;
let snowflakeFallingCreate;
let candyArrow;

//where sounds are defined
let xmasMainMusic;

let kirb;
let map1;
//let door1;
if (sessionStorage.getItem("door") === null) {
  sessionStorage['door'] = "0";
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

  //loading gifs
  snowflakeFalling = loadImage('assets/images/giphy.gif');
  candyArrow = loadImage('assets/images/arrowChristmas.gif');
  //snowflakeFallingCreate = createImg('assets/images/giphy.gif');

  //loading sounds
  xmasMainMusic = loadSound('assets/sounds/ghettoChristmas.mp3');

}

function setup() {
  createCanvas(2700, 850); //set 800 by 850 when done
  kirb = new Kirby(imgCuteKirby,imgCuteKirby2, snowflakeFalling);
  map1 = new mainMap(kirb);
  
  //xmasMainMusic.play(); //UNCOMMENT THIS PART BEFORE SUBMITTING ITS MUSICCCCC
  
}

function draw() {

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
  image(imgTree, 2000, 655, 100, 150);
  image(imgTree, 2425, 557, 155, 250);


  //images for where snowmen are
  image(imgSnowman, 755, 760, 40, 50);
  image(imgSnowman2, 2000, 760, 40, 50);
  pop();

  //getAudioContext().resume(); //UNCOMMENT THIS PART BEFORE SUBMITTING ITS MUSICCCCC
}




 /* if (state === `start screen`) { //title screen with a little bit of instructions
    startScreen();
  }
  else if (state === `simulation`) {  //the actual game
    simulation();
  }
  else if (state === `win game`) { //when all the mini games are cleared successfullys
    winGame();
  } */


/*

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

} */