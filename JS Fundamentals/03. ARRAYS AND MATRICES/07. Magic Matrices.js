function slove(matrix) {
    let sumRow = [];
    let sumCol = [];

    for (let i = 0; i < matrix.length; i++) {
        let currnetSumCol = 0;
        let currentSumRow = 0;

        for (let j = 0; j < matrix[i].length; j++) {
           currnetSumCol += matrix[i][j];
           currentSumRow += matrix[j][i];
        }
        sumRow.push(currentSumRow);
        sumCol.push(currnetSumCol);
    }

    let isTrue = true;
    for (let i = 0; i < sumCol.length-1; i++) {
        if(sumCol[i] === sumCol[i+1] && sumRow[i] === sumRow[i+1]){
            if(sumCol[i] === sumRow[i]){
                isTrue = true;
            }else {
                isTrue = false;
            }
        }else {
            isTrue = false;
        }
    }

    console.log(isTrue);
}

slove([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
)