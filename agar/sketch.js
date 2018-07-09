var board;
var wcell=20;
function setup() {
    createCanvas(640, 480)
    rows=floor(480/wcell)
    cols=floor(640/wcell)
    board=create2DArray(rows,cols)
    smooth()
}

function draw() {
    display(board,wcell)  
}
