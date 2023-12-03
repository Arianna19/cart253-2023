class mainMap {

    constructor(kirb) {
        this.kirb = kirb
        //amount of 'mini game' platforms that will be in the main map (total 5)
        this.mainFloorPlat = new Platform(5, 800, 90, 2000, kirb);
        this.plat2 = new Platform(500, 600, 50, 250, kirb);
        this.plat3 = new Platform(150, 300, 50, 150, kirb); //in reality this is the first one
        this.plat4 = new Platform(900, 400, 50, 360, kirb);
        this.plat5 = new Platform(1300, 150, 50, 150, kirb);
        //this.plat6 = new Platform(1600, 320, 50, 600, kirb);
        //this.plat7 = new Platform(2200, 550, 50, 200, kirb);

        //amound of doors that will be in the main map 
        this.door1 = new Door(190, 240, 60, 60, kirb,"/age-of-aquariums/index.html"); //the doors/objects that kirby will interact with to enter mini games
        this.door2 = new Door(585, 540, 60, 60, kirb,"/dodge-emReal/index.html");
        this.door3 = new Door(1050, 340, 60, 60, kirb,"/jungle-garden/index.html");
        this.door4 = new Door(1340, 90, 60, 60, kirb,"/love-actually/index.html");
        //this.door5 = new Door(1860, 260, 60, 60, kirb,"/age-of-aquariums/index.html");
        //this.door6 = new Door(2270, 490, 60, 60, kirb,"/age-of-aquariums/index.html");
    }

    draw() {

        image(imgStarCursor, mouseX, mouseY, 20, 20);
        noCursor();
        

        this.kirb.draw()
        //calling each platform and 'drawing them'
        this.mainFloorPlat.draw();
        this.plat2.draw();
        this.plat3.draw();
        this.plat4.draw();
        this.plat5.draw();
        //this.plat6.draw();
        //this.plat7.draw();

        //calling each door and 'drawing them'
        this.door1.draw();
        this.door2.draw();
        this.door3.draw();
        this.door4.draw();
        //this.door5.draw();
        //this.door6.draw();

    } 
    

}

