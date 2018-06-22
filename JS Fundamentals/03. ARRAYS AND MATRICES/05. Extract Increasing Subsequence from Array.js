function solve(arr) {

/*    let nums = [];
    nums.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let n = Number(nums.slice(nums.length-1));
        if (n <= arr[i]){
            nums.push(arr[i]);
        }
    }
*/

    let previousNum = Number.MIN_SAFE_INTEGER;;

    let result = arr.filter(element => {
        let num = Number.parseInt(element);
        if (num >= previousNum) {
            previousNum = num;
            return true;
        }
        return false;
    });

    console.log(result.join("\n"));
}

solve([ '1', '3', '8', '4', '10', '12', '3', '2', '24' ]);
//solve([ '20', '3', '2', '15', '6', '1' ])
