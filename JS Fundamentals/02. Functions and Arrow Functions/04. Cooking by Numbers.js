function cookingByNumbers(arr) {
    let num = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let operation = arr[i];

        if ("chop" === operation){
            num = num /2;
        }else if ("dice" === operation){
            num = Math.sqrt(num);
        }else if ("spice" === operation){
            num++;
        }else if ("bake" === operation){
            num = num*3;
        }else if ("fillet" === operation){
            num = num - num*0.2;
        }

        console.log(num);
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])