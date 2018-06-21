function biggestOfThreeNumbers(arr) {
    let maxNum = -20000000000;

    for (let obj of arr) {
        if (obj >= maxNum){
            maxNum = obj;
        }
    }

    console.log(maxNum)
}

biggestOfThreeNumbers([5,-2,7])