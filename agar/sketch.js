var board;
var wcell=20;
function setup() {
    createCanvas(640, 480)
    rows=floor(480/wcell)
    cols=floor(640/wcell)
    board=create2DArray(rows,cols)
    btnStart=createButton("Start")
    btnStart.position(10,485)
    btnStart.mousePressed(onStart)
    smooth()
}

function onStart() {
    //TODO: Start Game of Life
}

function draw() {
    display(board,wcell)  
}

