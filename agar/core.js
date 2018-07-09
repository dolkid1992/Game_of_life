function display(board, size) {
    for(i=0;i<board.length;i++) {
        rows=board[i]
        for(j=0;j<rows.length;j++) {
            coloring(color(0,0,0),rows[j]==1);
            rect(j*size,i*size,size,size)
        }
    }
}

function seeding(row,col,board) {
    board[row][col]=1
    return board
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
