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