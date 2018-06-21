function rounding(arr) {

    let number = arr[0];
    let precision = arr[1];

    if(precision > 15) {
        precision = 15;
    }

    console.log(Number(number.toFixed(precision)));
}

rounding([3.1415926535897932384626433832795, 17]);
rounding([10.5, 3]);
rounding([-30.0004, 2]);