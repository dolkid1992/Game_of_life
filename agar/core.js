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
