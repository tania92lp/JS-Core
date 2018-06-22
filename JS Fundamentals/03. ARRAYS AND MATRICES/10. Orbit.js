function solve(arr) {
    let width = arr[0];
    let height = arr[1];
    let x = arr[2];
    let y = arr[3];

    let matrix = Array(height).fill().map(() => Array(width).fill());

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(
                Math.abs(row - x),
                Math.abs(col-y)
            ) +1;
        }
    }


    console.log(matrix.map(row => row.join(" ")).join("\n"));
}




solve([5, 5, 2, 2]);