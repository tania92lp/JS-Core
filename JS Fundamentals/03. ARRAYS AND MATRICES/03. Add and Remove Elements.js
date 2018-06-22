function solve(arr) {
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        if ("remove" === arr[i]){
            nums.pop();
        }else {
            nums.push(i+1);
        }
    }


    if(nums.length == 0){
        console.log("Empty");
    }else{
        nums.forEach(e => console.log(e));
    }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add',

])