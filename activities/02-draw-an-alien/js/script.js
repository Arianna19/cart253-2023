/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

    
}

/**
 * Basically the entire body of my purple aliennn
*/
function setup() {

    //background things and funtions
    createCanvas(640,500);
    background(50,162,168);
    noStroke();
        //background decorations testing things ''clouds''

             //shading for slime darker darker green layer two
        fill(39, 64, 40); 
        stroke(39, 64, 40);
        bezier(0,0,70,210,40,12,220,0); //first dark bezier from left
        bezier(220,0,310,15,270,310,370,0); //second dark bezier from left
        bezier(360,0,370,20,400,210,480,0); //third dark bezier from left
        bezier(480,0,550,90,590,20,650,0); //last dark bezier from left
        noStroke();

            //shading for slime darker green layer one
        fill(62, 97, 63); 
        stroke(62, 97, 63);
        bezier(0,0,65,205,35,7,215,0);
        bezier(215,0,305,10,265,305,365,0);
        bezier(355,0,365,15,395,205,475,0);
        bezier(465,0,545,85,585,15,645,0);
        noStroke();

            //main slime colour light green
        fill(106, 145, 107);
        stroke(106, 145, 107);
        bezier(0,0,60,200,30,2,210,0);
        bezier(210,0,300,5,260,300,360,0);
        bezier(350,0,360,10,390,200,470,0);
        bezier(460,0,540,80,580,10,640,0);
        noStroke();



    //For drawing the body
        //shading of the body dark purple
    fill(63,24,82);
    ellipse(325,480,510,660);
        //For drawing the body light purple part
    fill(131,50,168);
    ellipse(320,480,500,660);
    


    //Doing the ears
        //right ear
    fill(63,24,82); //shading left ear dark purple
    arc(449,158,110,110,0, PI + QUARTER_PI, PIE)

    fill(131,50,168); //base colour light purple 
    arc(445,155,110,110,0, PI + QUARTER_PI, PIE);

        fill(63,24,82); //main ear part
        arc(440,165,45,45,0, PI + QUARTER_PI, PIE);
    
        //left ear
    fill(63,24,82); //shading left ear dark purple
    arc(205,156,110,110, - QUARTER_PI, PI, PIE);
    
    fill(131,50,168); //base colour light purple
    arc(200,155,110,110, - QUARTER_PI, PI, PIE);
 
        //shading left ear dark purple inside the ear 
        fill(63,24,82); //main ear part
        arc(205,165,45,45, - QUARTER_PI, PI, PIE);



    //Center eye part
    fill(109, 36, 143); //shading for center part area light purple
    ellipse(320,300,320,220);

    fill(89, 24, 120); //second shading layer for center darker ish purple
    ellipse(320,300,315,215);

    fill(64, 12, 89); //third shading layer for center darker ish ish purple
    ellipse(320,300,305,205);

    fill(63,24,82); //main center part of the eye area
    ellipse(320,300,300,200);



    //Draw the eyes
        //left eye white part
    fill(226,213,232);
    ellipse(250,310,60,60);

        //right eye white part
    fill(226,213,232);
    ellipse(390,310,60,60);

    //Pupil part of eyes
        //left eye
    fill(48,45,45);
    ellipse(245,300,40,40);

        //right eye
    fill(48,45,45);
    ellipse(395,300,40,40);



    //main mouth
    fill(226,213,232);
    arc(320,355,50,50,0, PI + QUARTER_PI, OPEN);
    describe('Cirlce with missing arc on top');



    //antenna for alien
        //rectangle part
    fill(63,24,82); //shading dark purple
    rect(315,50,25,110);
    fill(131,50,168);
    rect(310,50,20,110); //light purple rectangle main



    //circular top
        //antenna shading under layer dark purple
    fill(63,24,82);
    circle(326, 50, 60);

    fill(131,50,168);
    circle(322, 50, 60); //first circle base

    fill(169,94,204); 
    circle(322,50,45); //bottom layer
    describe('little light bulb on top of antenna');
    fill(188,133,214); 
    circle(322,50,30); //second layer light purple
    fill(218,181,235); 
    circle(322,50,20); //last layer light purple
    fill(255); 
    circle(322,50,10); //last layer white


    
    //dot patterns around the head start from center
        //center circle
    fill(204,61,202);
    circle(322,450,45); 
    fill(222,115,221); //lighter color pink 
    circle(322,450,30);
    fill(250, 172, 249); //last layer color pink
    circle(322,450,20); 
    
        //circle on the right first one 
    fill(204,61,202);
    circle(422,425,35); 
    fill(222,115,221); //ligther color pink
    circle(422,425,20); 
    fill(250, 172, 249); //last layer color pink
    circle(422,425,10); 

        //circle on the right second one 
    fill(204,61,202);
    circle(500,380,25);
    fill(222,115,221); //lighter color pink 
    circle(500,380,15); 
    fill(250, 172, 249); //last layer color pink
    circle(500,380,5); 

        //circle on the left fist one 
    fill(204,61,202);
    circle(222,425,35);
    fill(222,115,221); //lighter color pink
    circle(222,425,20); 
    fill(250, 172, 249); //last layer color pink
    circle(222,425,10); 
        
        //circle on the left second one
    fill(204,61,202);
    circle(135,380,25);
    fill(222,115,221); //lighter color pink
    circle(135,380,15);
    fill(250, 172, 249); //last layer color pink
    circle(135,380,5); 


}   


/**
 * Description of draw()
*/
function draw() {



}