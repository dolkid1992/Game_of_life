const LIVING=1;
function display(board, size) {
    for(i=0;i<board.length;i++) {
        rows=board[i]
        for(j=0;j<rows.length;j++) {
            coloring(color(0,0,0),isLivingCell(rows[j]));
            rect(j*size,i*size,size,size)
        }
    }
}

function seeding(row,col,board) {
    board[row][col]=LIVING
    return board
} 

function isLivingCell(value) {
    return value==LIVING;
}

function coloring(color, condition) {
    if(condition) {
        fill(color)
    }else{
        fill(255,255,255)
    }   
}

function create2DArray(rows,cols) {
    var f = new Array();
    for (i=0;i<rows;i++) {
        f[i]=new Array();
        for (j=0;j<cols;j++) {
            f[i][j]=0;
        }
    }
    return f;
}
