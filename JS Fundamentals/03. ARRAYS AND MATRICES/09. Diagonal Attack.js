function solve(input) {
    let matrix = Array(input.length).fill().map(() => Array(input.length).fill());

    for (let i = 0; i < input.length; i++) {
        matrix [i] = input[i].split(" ").map(el => Number(el))
    }

    let row = matrix.length;
    let col = matrix.length;

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < row; i++) {
        firstDiagonal += matrix[i][i];
    }

    for (let i = col-1; i >= 0; i--) {
        secondDiagonal += matrix[col-1-i][i];
    }

    if (firstDiagonal === secondDiagonal){
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if(i !== j && i !== col - 1- j){
                    matrix[i][j] = firstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    }
    else{
        printMatrix(matrix);
    }


    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(" "));

        }
    }
}
/*
5 15 15 15 1
15 4 15 2 15
15 15 3 15 15
15 4 15 2 15
5 15 15 15 1
*/


solve(['1 1 1',
    '1 1 1',
    '1 1 0']

)