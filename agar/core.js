const LIVING = 1;
const STILL_LIFES = 2;
const GILDER = 3;

function display(board, rows, columns, size) {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            coloring(board[i][j]);
            rect(j * size, i * size, size, size)
        }
    }
}

function coloring(condition) {
    if (condition === LIVING) {
        fill(0, 255, 0)
    }
    else if (condition === STILL_LIFES) {
        fill(0, 0, 255)
    }
    else if (condition === GILDER) {
        fill(255, 0, 0)
    }
    else {
        fill(255, 255, 255)
    }
}

function seeding(row, col, board) {
    board[row][col] = LIVING;
    return board
}

function isLivingCell(value) {
    return value == 1 || value == 2 || value == 3;
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
    //resetColor(board, rows, columns)
    // Loop through every spot in our 2D array and check spots neighbors
    for (var x = 1; x < rows - 1; x++) {
        for (var y = 1; y < columns - 1; y++) {
            // Add up all the states in a 3x3 surrounding grid
            var neighbors = 0;
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    neighbors += isLivingCell(board[x + i][y + j]) ? 1 : 0;
                }
            }

            neighbors -= isLivingCell(board[x][y]) ? 1 : 0;

            if ((isLivingCell(board[x][y])) && (neighbors < 2)) next[x][y] = 0;
            else if ((isLivingCell(board[x][y])) && (neighbors > 3)) next[x][y] = 0;
            else if ((board[x][y] === 0) && (neighbors === 3)) next[x][y] = 1;
            else {
                //if (next[x][y] !== STILL_LIFES)
                    next[x][y] = isLivingCell(board[x][y]) ? 1 : 0;
            }

            // checkStillLifeBlock(board, x, y, next);
        }
    }

    for (var x = 1; x < rows - 1; x++) {
        for (var y = 1; y < columns - 1; y++) {
            checkPattern(next, x, y);
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

function checkPattern(board, x, y) {
    if (matrixCompare(board, x, y, pattern1, 0, 0, 5, 5)) {
        changePatternColor(board, x, y, 5, 5, GILDER);
        return;
    }
    if (matrixCompare(board, x, y, pattern2, 0, 0, 5, 5)) {
        changePatternColor(board, x, y, 5, 5, GILDER);
        return;
    }
    if (matrixCompare(board, x, y, pattern3, 0, 0, 5, 5)) {
        changePatternColor(board, x, y, 5, 5, GILDER);
        return;
    }
    if (matrixCompare(board, x, y, pattern4, 0, 0, 5, 5)) {
        changePatternColor(board, x, y, 5, 5, GILDER);
        return;
    }
    if (matrixCompare(board, x, y, pattern_block, 0, 0, 4, 4)) {
        changePatternColor(board, x, y, 5, 5, STILL_LIFES);
    }
}

//check if matrix a = b, size m x n
function matrixCompare(a, i, j, b, k, l, m, n) {
    for (let o = 0; o < m; o++) {
        for (let p = 0; p < n; p++) {
            if (a[o + i][p + j] !== b[o][p]) {
                return false;
            }
        }
    }
    return true;
}

function changePatternColor(board, x, y, m, n, color) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i + x][j + y] === 1) {
                board[i + x][j + y] = color;
            }
        }
    }

}


var pattern1 = new Array();
pattern1[0] = [0, 0, 0, 0, 0];
pattern1[1] = [0, 0, 0, 1, 0];
pattern1[2] = [0, 1, 0, 1, 0];
pattern1[3] = [0, 0, 1, 1, 0];
pattern1[4] = [0, 0, 0, 0, 0];

var pattern2 = new Array();
pattern2[0] = [0, 0, 0, 0, 0];
pattern2[1] = [0, 1, 0, 0, 0];
pattern2[2] = [0, 0, 1, 1, 0];
pattern2[3] = [0, 1, 1, 0, 0];
pattern2[4] = [0, 0, 0, 0, 0];

var pattern3 = new Array();
pattern3[0] = [0, 0, 0, 0, 0];
pattern3[1] = [0, 0, 1, 0, 0];
pattern3[2] = [0, 0, 0, 1, 0];
pattern3[3] = [0, 1, 1, 1, 0];
pattern3[4] = [0, 0, 0, 0, 0];

var pattern4 = new Array();
pattern4[0] = [0, 0, 0, 0, 0];
pattern4[1] = [0, 1, 0, 1, 0];
pattern4[2] = [0, 0, 1, 1, 0];
pattern4[3] = [0, 0, 1, 0, 0];
pattern4[4] = [0, 0, 0, 0, 0];

var pattern_block = new Array();
pattern_block[0] = [0, 0, 0, 0];
pattern_block[1] = [0, 1, 1, 0];
pattern_block[2] = [0, 1, 1, 0];
pattern_block[3] = [0, 0, 0, 0];


