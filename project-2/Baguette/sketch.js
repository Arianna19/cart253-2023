let kirb
let plat
function setup() {
  createCanvas(400, 400);
  kirb = new kirby()
  plat = new platform(350, 350, 50, 50, kirb)
}
function draw() {
  background(220);
  kirb.draw()
  plat.draw()


}