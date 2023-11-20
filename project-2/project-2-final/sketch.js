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

let kirb;
let map1;
//let door1;

function setup() {
  createCanvas(10000, 850); //set 800 by 850 when done
  kirb = new Kirby();
  map1 = new mainMap(kirb);
  
  
  //plat3 = new platform(1000, 50, 50, 100, kirb);
}

function draw() {

  background(108, 191, 240);
  kirb.draw();
  map1.draw();




} 