function validityChecker(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];


    printResult(x1, y1, 0, 0);
    printResult(x2, y2, 0, 0);
    printResult(x1, y1, x2, y2);

    function distanceBetwenTwoPoints(x1, y1, x2, y2) {
        let disX = Math.pow(x1-x2,2);
        let disY = Math.pow(y1-y2,2);

        let result = Math.sqrt(disX +disY);

        return result;
    }

    function printResult(x1, y1, x2, y2){
        let distance = distanceBetwenTwoPoints(x1,y1,x2, y2);

        if (Number.isInteger(distance)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

validityChecker([3, 0, 0, 4]);
console.log();
validityChecker([2, 1, 1, 1]);
console.log();
validityChecker([0, 0, 0, 0]);
console.log();
validityChecker([2, 1, 2, 1]);
