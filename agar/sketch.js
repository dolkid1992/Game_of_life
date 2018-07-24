var board;
var wcell = 20;
var next;
var rows;
var cols;
var check;
var stopId;

function setup() {
    createCanvas(640, 480) // x,y of Canvas
    rows = Math.floor(480 / wcell)
    cols = Math.floor(640 / wcell)
    board = create2DArray(rows, cols)
    next = create2DArray(rows, cols);
    btnStart = createButton("Start")
    btnStart.position(10, 500)
    btnStart.mousePressed(onStart)
    btnStop = createButton("Stop")
    btnStop.position(90, 500)
    btnStop.mousePressed(Stop)
    btnStep = createButton("NextStep")
    btnStep.position(170, 500)
    btnStep.mousePressed(Step)
    smooth()
}

function draw() {
    display(board, rows, cols, wcell)
}

function mousePressed() {
     if (mouseY <= 480) {
         var x = mouseX % 20 === 0 ? Math.ceil(mouseX / 20 - 1) : Math.ceil(mouseX / 20);
         var y = mouseY % 20 === 0 ? Math.ceil(mouseY / 20 - 1) : Math.ceil(mouseY / 20);
         seeding(y - 1, x - 1, board);
     }
}

function Stop() {
    clearInterval(stopId);
}

function onStart() {
    rows = Math.floor(480 / wcell) //bug???
    stopId = setInterval(() => generate(board, rows, cols, next), 500);

}

function Step() {
    generate(board, rows, cols, next);
}

