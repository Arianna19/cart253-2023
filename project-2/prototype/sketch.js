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
let plat;
let plat2;
let plat3;

function setup() {
  createCanvas(500, 400);
  kirb = new kirby();
  plat = new platform(350, 350, 50, 400, kirb);
  plat2 = new platform(600, 150, 50, 400, kirb);
  plat3 = new platform(1000, 50, 50, 100, kirb);
}

function draw() {

  background(108, 191, 240);
  
  kirb.draw();
  plat.draw();
  plat2.draw();
  plat3.draw();


} 