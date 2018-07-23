function display(board, size) {
    for (i = 0; i < board.length; i++) {
        rows = board[i]
        for (j = 0; j < rows.length; j++) {
            coloring(color(0, 255, 0), rows[j] == 1);
            rect(j * size, i * size, size, size)
        }
    }
}

function seeding(row, col, board) {
    board[row][col] = 1
    return board
}

function coloring(color, condition) {
    if (condition) {
        fill(color)
    } else {
        fill(255, 255, 255)
    }
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
            else next[x][y] = board[x][y]; // Stasis
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
