class mainMap {
    
    constructor(kirb){
        //amount of 'mini game' platforms that will be in the main map (total 5)
        this.mainFloorPlat = new Platform(-100, 800, 90, 3000, kirb);
        this.plat2 = new Platform(500, 600, 50, 250, kirb);
        this.plat3 = new Platform(100, 300, 50, 150, kirb); //in reality this is the first one
        this.plat4 = new Platform(900, 400, 50, 360, kirb);
        this.plat5 = new Platform(1300, 150, 50, 90, kirb);


    }



draw() {
    //calling each platform and 'drawing them'
    this.mainFloorPlat.draw();
    this.plat2.draw();
    this.plat3.draw();
    this.plat4.draw();
    this.plat5.draw();

    




}







}

