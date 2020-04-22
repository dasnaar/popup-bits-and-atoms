const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

var pos = {
    x: 386,
    y: 14
}

let myFont;
function preload(){

    myFont = loadFont('ms-sans-serif.ttf');
    bird = loadImage('bird.png')
    birdfree = loadImage('birdfree.png')
    closePopup = loadImage('x.png')
    confirmButton = loadImage('confirmbutton.png')
}

let sceneIndex = 0;

function setup() {
    createCanvas(437, 305);
}

function draw() {
    noFill();
    background('#C0C0C0');

    if (sceneIndex == 0){
        startScreen();
    }

    if (sceneIndex == 1){

        startMaze();
    }


    function startScreen(){

            fill('#000181')
            rect(4,11,426,41)
            image(closePopup, pos.x,pos.y)
            image(confirmButton, 130,198)
           /* textFont(myFont, 19);
            text('X', pos.x, pos.y)
            text('Click OK to become immortal', 90, 97);
            text('Click X to get the fuck out', 98, 131);
            text('OK', 204, 228);
            pop()
            */
            if (mouseIsPressed && mouseX + 14 > pos.x && mouseY + 14 > pos.y) {
                pos.x = random(0, width);
                pos.y = random(0, height);
            }

            if (mouseIsPressed && mouseX + 19 > 130 && mouseY + 19 > 198) {

                sceneIndex = 1;

            }

        }

    }

    function startMaze(){


        if(mouseX < 437 && mouseY < 305){
            background(colorInput.value)



        }

        if (colorInput.value=='#ffffff'){
            image(birdfree,200,152)
        }

        else {

            image(bird, 149, 72);

        }

        push()
            fill(255);
            textFont(myFont, 19);
            text('rescue the bird', 144, 37);
            pop()

    }



/*

First screen kommt
Wenn Mouse auf X kommt, X findet ein Random ort und kann nicht geklickt werden
Wenn Mouse auf Ok klickt, then page 2:



 */