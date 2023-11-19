class mainMap {
    constructor(kirb){
        this.mainFloorPlat = new Platform(-100, 800, 90, 1100, kirb);
        this.plat2 = new Platform(250, 600, 50, 300, kirb);
        this.plat3 = new Platform(100, 300, 50, 150, kirb)


    }



draw() {
    this.mainFloorPlat.draw();
    this.plat2.draw();
    this.plat3.draw();



}







}

