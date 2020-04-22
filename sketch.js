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

        push()
            fill('#000181')
            rect(4,11,426,41)
            image(closePopup, pos.x,pos.y)
            image(confirmButton, 130,198)
            pop()
        push()
            fill(255)
             textFont(myFont, 19);
            text('Sign up', 18, 40)
        pop()
            push()
        textFont(myFont, 19);
        fill(0)
            text('Im not a robot', 130, 103);
            pop()

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

            background(colorInput.value)


        if (colorInput.value=='#ffffff'){
            image(birdfree,166,88)
        }

        else {

            image(bird, 148, 62);

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