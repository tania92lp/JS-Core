function solve(n) {
    //let arr = input;
    let row = Number(n);
    let col = Number(n);

    let matrix = Array(row).fill().map(() => Array(col).fill());
    let counter = 1;

    for (let rotate = 0; rotate < matrix[0].length/2; rotate++) {
        for (let i = rotate; i < col; i++) {
            matrix[rotate][i] = counter++;
        }
        col--;

        for (let i = rotate+1; i < row; i++) {
            matrix[i][col] = counter++;
        }
        row--;

        for (let i = col - 1; i >= rotate; i--) {
            matrix[row][i] = counter++;
        }

        for (let i = row - 1; i > rotate; i--) {
            matrix[i][rotate] = counter++;
        }

    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(" "));

        }
    }
}


/*
1 2 3 4 5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9
*/

solve("3, 3");