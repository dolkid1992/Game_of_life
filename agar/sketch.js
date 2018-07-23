var board;
var wcell = 20;
var next;
var rows;
var cols;
var check;

function setup() {
    createCanvas(640, 480)
    rows = floor(480 / wcell)
    cols = floor(640 / wcell)
    board = create2DArray(rows, cols)
    next = createNext(rows,cols);
    btnStart = createButton("Start")
    btnStart.position(10, 500)
    btnStart.mousePressed(onStart)
    smooth()
}

function draw() {
    display(board, wcell)
}

function onStart() {
    check = setInterval(() => generate(board, 480 / 20, 640 / 20, next), 500);

}


function mousePressed() {
    if (mouseY <= 480) {
        var pos = new Array();
        var x = mouseX % 20 == 0 ? Math.ceil(mouseX / 20 - 1) : Math.ceil(mouseX / 20);
        var y = mouseY % 20 == 0 ? Math.ceil(mouseY / 20 - 1) : Math.ceil(mouseY / 20);
        seeding(y - 1, x - 1, board);
    }
}