function distanceIn3D(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let z1 = arr[2];

    let x2 = arr[3];
    let y2 = arr[4];
    let z2 = arr[5];

    let first = Math.pow(x1 - x2,2);
    let second = Math.pow(y1 - y2,2);
    let third = Math.pow(z1 - z2,2);

    let distance = Math.sqrt(first + second + third);
    console.log(distance);
}

distanceIn3D([1, 1, 0, 5, 4, 0])