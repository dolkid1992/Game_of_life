const LIVING=1;
const STILL_LIFES=2;
function display(board, size) {
    for (i = 0; i < board.length; i++) {
        rows = board[i]
        for (j = 0; j < rows.length; j++) {
            coloring(color(0, 255, 0), isLivingCell(rows[j]) );
            rect(j * size, i * size, size, size)
        }
    }
}

function coloring(color, condition) {
    if (condition == LIVING) {
        fill(0, 255, 0)
    }
    else if (condition == STILL_LIFES){
        fill(0, 0, 255)
    }
    else {
        fill(255, 255, 255)
    }
}

function seeding(row,col,board) {
    board[row][col]=LIVING;
    return board
}

function isLivingCell(value) {
    return value;
}

function create2DArray(rows, cols) {
    var f = new Array();
    for (i = 0; i < rows; i++) {
        f[i] = new Array();
        for (j = 0; j < cols; j++) {
            f[i][j] = 0;
        }
    }
    return f;
}

// The process of creating the new generation
function generate(board, columns, rows, next) {
    // Loop through every spot in our 2D array and check spots neighbors
    for (var x = 1; x < columns - 1; x++) {
        for (var y = 1; y < rows - 1; y++) {
            // Add up all the states in a 3x3 surrounding grid
            var neighbors = 0;
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    if (board[x + i][y + j] == 2){
                        board[x + i][y + j] = 1;
                    }
                    neighbors += board[x + i][y + j];
                }
            }

            // A little trick to subtract the current cell's state since
            // we added it in the above loop
            neighbors -= board[x][y];
            // Rules of Life
            if ((board[x][y] == 1) && (neighbors < 2)) next[x][y] = 0;           // Loneliness
            else if ((board[x][y] == 1) && (neighbors > 3)) next[x][y] = 0;           // Overpopulation
            else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
            else if (board[x][y] == 1 && neighbors == 2 || neighbors ==3 ){
                next[x][y] = STILL_LIFES;}  // Stasis
        }
    }
    var temp = board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            board[i][j] = next[i][j];
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            next[i][j] = temp[i][j];
        }
    }
}

function createNext(rows, cols) {
    var next = new Array(rows);
    for (let i = 0; i < rows; i++) {
        next[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            next[i][j] = 0;
        }
    }
    return next;
}

