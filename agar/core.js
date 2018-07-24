const LIVING=1;
const STILL_LIFES=2;
function display(board, rows, columns, size) {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            coloring(color(0, 255, 0), isLivingCell(board[i][j]) );
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
    var f = new Array(rows);
    for (i = 0; i < rows; i++) {
        f[i] = new Array(cols);
        for (j = 0; j < cols; j++) {
            f[i][j] = 0;
        }
    }
    return f;
}

// The process of creating the new generation
function generate(board, rows, columns, next) {
    resetColor(board, rows, columns)
    // Loop through every spot in our 2D array and check spots neighbors
    for (var x = 1; x < rows - 1; x++) {
        for (var y = 1; y < columns - 1; y++) {
            // Add up all the states in a 3x3 surrounding grid
            var neighbors = 0;
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    neighbors += board[x + i][y + j];
                }
            }

            neighbors -= board[x][y];

            if ((board[x][y] === 1) && (neighbors < 2)) next[x][y] = 0;
            else if ((board[x][y] === 1) && (neighbors > 3)) next[x][y] = 0;
            else if ((board[x][y] === 0) && (neighbors === 3)) next[x][y] = 1;
            else {
                if (next[x][y] != STILL_LIFES)
                    next[x][y] = board[x][y];
            }

            checkStillLifeBlock(board, x, y, next);
        }
    }

    //Assign current board to the next
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            board[i][j] = next[i][j];
        }
    }
    //Reset next
    reset(next, rows, columns)
}

function reset(arr, rows, columns) {
    for (var x = 0; x < rows - 1; x++) {
        for (var y = 0; y < columns - 1; y++) {
            arr[x][y] = 0;
        }
    }
}

function resetColor(arr, rows, columns) {
    for (var x = 0; x < rows - 1; x++) {
        for (var y = 0; y < columns - 1; y++) {
            if (arr[x][y] > 1)
                arr[x][y] = 1;
        }
    }
}

function checkStillLifeBlock(board, x, y, next) {
    var checkBlock = false;
    var checkBoderBlock = false;
    if(board[x][y] === 1) {
        checkBlock = (board[x + 1][y + 0] === 1) && (board[x + 0][y + 1] === 1) && (board[x + 1][y + 1] === 1) && (board[x + 0][y + 0] === 1);
        checkBoderBlock = (board[x - 1][y - 1] === 0) && (board[x + 0][y - 1] === 0) && (board[x + 1][y - 1] === 0)
            && (board[x + 2][y - 1] === 0) && (board[x - 1][y + 0] === 0) && (board[x + 2][y + 0] === 0)
            && (board[x - 1][y + 1] === 0) && (board[x + 2][y + 1] === 0) && (board[x - 1][y + 2] === 0)
            && (board[x + 0][y + 2] === 0) && (board[x + 1][y + 2] === 0) && (board[x + 2][y + 2] === 0)
    }

    if (checkBlock && checkBoderBlock) {
        next[x + 0][y + 0] = STILL_LIFES
        next[x + 0][y + 1] = STILL_LIFES
        next[x + 1][y + 0] = STILL_LIFES
        next[x + 1][y + 1] = STILL_LIFES
    }
}


