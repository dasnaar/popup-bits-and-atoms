let drawingLayer;

let r = 0;
let g = 0;
let b = 0;

let reset = 0;
let rectOption = 1;
let Size = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);
    drawingLayer = createGraphics(windowWidth, windowHeight);
}



function draw() {

    //makes the reset button clickable/workable

    // not sure what's going on here...
    if (mouseX < 45 && mouseX > 30 && mouseY > 20 && mouseY < 450) {
        if (mouseIsPressed) {
            reset = 1;
        }
        // Tells the program that the clear option has been selected
        if (clear === 1) {
            background(0, 0, 0);
            fill(r, g, b);
            reset = 0;
        }
    }


    // Brush - Application
    // Makes the Round Brush button clickable
    if (mouseX < 70 && mouseX > 49 && mouseY > 135 && mouseY < 157) {
        if (mouseIsPressed) {
            rectOption = 0;
        }
    }

    // Makes the square Brush clickable
    if (mouseX < 45 && mouseX > 39 && mouseY > 74 && mouseY < 80) {
        if (mouseIsPressed) {
            rectOption = 1;
        }
    }




    //Color - application
    // Tells the program that the colour white has been selected

    //Makes white color apply on brush
    if (mouseX < 32 && mouseX > 26 && mouseY > 263 && mouseY < 268) {
        if (mouseIsPressed) {
            r = 255;
            g = 255;
            b = 255;
        }
    }

    //Makes red color apply on brush
    if (mouseX < 58 && mouseX > 52 && mouseY > 263 && mouseY < 268) {
        if (mouseIsPressed) {
            r = 255;
            g = 0;
            b = 0;
        }
    }

    // green
    if (mouseX < 32 && mouseX > 26 && mouseY > 287 && mouseY < 293) {
        if (mouseIsPressed) {
            r = 0;
            g = 255;
            b = 0;
        }
    }

    //Blue apply on brush
    if (mouseX < 58 && mouseX > 52 && mouseY > 287 && mouseY < 293) {
        if (mouseIsPressed) {
            r = 0;
            g = 0;
            b = 255;
        }
    }

    //Yellow Brush - selection
    if (mouseX < 32 && mouseX > 26 && mouseY > 312 && mouseY < 318) {
        if (mouseIsPressed) {
            r = 255;
            g = 255;
            b = 0;
        }
    }

    //purple brush
    if (mouseX < 58 && mouseX > 50 && mouseY > 312 && mouseY < 318) {
        if (mouseIsPressed) {
            r = 255;
            g = 0;
            b = 255;
        }
    }

    // set the fill color of the drawing layer
    drawingLayer.noStroke();
    drawingLayer.fill(r, g, b);

    // we actually do the drawing here
    if (mouseIsPressed && mouseX > 95) {
        if(rectOption == 0){
            drawingLayer.ellipse(mouseX, mouseY, Size);
        } else if(rectOption == 1){
            drawingLayer.rect(mouseX - Size/2, mouseY - Size/2, Size, Size);
        }
    }

    // clear the background first
    background(0);

    // the drawinglayer is drawn to the screen using the image() function
    image(drawingLayer, 0, 0);

    // draw UI is a function that I made that contains all of your ui code
    drawUi();

    //Drawing application

    //   if (mouseIsPressed) {
    //     if (mouseX > 1092 || mouseY < 107) {
    //       noFill();
    //     }
    //   }



}


function drawUi() {
    //Color Selection Button


    //White - Button
    fill(255, 255, 255);
    noStroke();
    rect(29, 265, 20, 20);

    //Red Button
    fill(255, 0, 0);
    noStroke();
    rect(55, 265, 20, 20);

    //Green Button
    fill(0, 255, 0);
    fill(0, 255, 0);
    noStroke();
    rect(29, 290, 20, 20);
    //makes green appliy on brush

    //Blue Button
    fill(0, 0, 255);
    noStroke();
    rect(55, 290, 20, 20);

    //Yellow Button
    fill(255, 255, 0);
    noStroke();
    rect(29, 315, 20, 20);

    //Purple
    fill(255, 0, 255);
    noStroke();
    rect(55, 315, 20, 20);


    //Spray Paint Effect - Button
    fill(255, 255, 255);
    noStroke();
    rect(46, 191, 8, 8);
    rect(39, 197, 7, 7);
    rect(44, 205, 5, 5);
    rect(48, 200, 4, 4);
    rect(51, 204, 5, 5);
    rect(54, 197, 3, 3);
    rect(55, 206, 4, 4);

    text("Spray", 35, 180);



    //function dorder
    stroke(255, 255, 255);
    strokeWeight(1);
    line(95, 15, 95, 580);
    line(20, 225, 85, 225);
    line(20, 229, 85, 229);
    line(20, 350, 85, 350);
    line(20, 354, 85, 354);


    //Eraser Button
    fill(255, 140, 200);
    strokeWeight(1);
    stroke(255, 255, 255);
    rect(30, 400, 45, 20);

    noStroke();
    fill(255, 255, 255);
    text("Eraser", 35, 395);


    //Reset Button
    fill(225, 229, 242);
    strokeWeight(1);
    stroke(255, 255, 255);
    rect(30, 450, 45, 20);

    noStroke();
    fill(255, 255, 255);
    text("Reset", 37, 445);
    stroke(255, 0, 0);
    strokeWeight(2);
    fill(255, 0, 0);
    line(31, 451, 75, 470); // one side of X
    line(31, 471, 75, 451); // other side of X


    //Save Button
    fill(255, 0, 130);
    rect(30, 511, 45, 20);


    //Save arrow
    beginShape();

    fill(255, 255, 255);
    strokeWeight(1);

    vertex(44, 515);
    vertex(54, 528);
    vertex(64, 515);

    endShape();

    noStroke();
    fill(255, 255, 255);
    text("Save", 38, 505);

    //Color Selection
    fill(255, 255, 255);
    strokeWeight(2);
    stroke(0, 0, 255);
    text("Select Color", 20, 253);

    //Brush Selection
    strokeWeight(1);
    stroke(255, 0, 0);
    fill(255, 255, 255);
    text("Select Brush", 20, 35);

    //Square Brush - Button
    fill(255, 255, 255);
    noStroke();
    rect(42, 77, 20, 20);

    fill(255, 255, 255);
    text("Square", 33, 65);


    //Round Brush - Button
    fill(255, 255, 255);
    noStroke();
    ellipse(52, 145, 22, 22);

    fill(255, 255, 255);
    text("Round", 34, 125);


}

function mousePressed() {
    print(r);
    print(g);
    print(b);
}