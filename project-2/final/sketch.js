/**
 * Project 2: Ultimate Kirby World: FINAL
 * 
 *  Arianna Narita
 * 
 * MAIN POINT:
 * Basically a main Kirby world which is a platform concept.
 * The world will have secret tunnels that will lead to past assignments.
 * 
 */

//where images are loaded at first
let imgPortal1;
let imgCuteKirby


let kirb;
let map1;
//let door1;
if (sessionStorage.getItem("door") === null) {
  sessionStorage['door'] = "0"
}

function preload() {

  imgPortal1 = loadImage('assets/images/portal1.png'); 
  imgCuteKirby = loadImage('assets/images/walkingKirby.png');

}

function setup() {
  createCanvas(2725, 850); //set 800 by 850 when done
  kirb = new Kirby(imgCuteKirby);
  map1 = new mainMap(kirb);
  
  
  //plat3 = new platform(1000, 50, 50, 100, kirb);
}

function draw() {

  background(108, 191, 240);
  map1.draw();

} 

