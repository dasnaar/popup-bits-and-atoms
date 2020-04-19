

var pos = {
    x: 396,
    y: 34
}

let myFont;
function preload(){

    myFont = loadFont('comic.ttf');
}

function setup() {
    createCanvas(437, 305);
}

function draw() {
    background('#2E0D74');
    fill('#00E0FF');
    textFont(myFont, 19);
    text('X', pos.x, pos.y)
    text('Click OK to become immortal', 90, 97);
    text('Click X to get the fuck out', 98, 131);
    text('OK', 204, 228);


    if (mouseIsPressed && mouseX+19 > pos.x && mouseY+19 > pos.y){
        pos.x = random(0,width);
        pos.y = random(0,height);
    }

    if (mouseIsPressed && mouseX+19 > 204 && mouseY+19 > 228){
        text('works',pos.x,pos.y)
    }

    }



/*

First screen kommt
Wenn Mouse auf X kommt, X findet ein Random ort und kann nicht geklickt werden
Wenn Mouse auf Ok klickt, then page 2:



 */