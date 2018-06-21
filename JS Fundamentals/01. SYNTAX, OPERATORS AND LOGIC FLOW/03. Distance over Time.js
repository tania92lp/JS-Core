function distance(arr) {
    let speed1 = arr[0];  //km/h
    let speed2 = arr[1];
    let timeInSeconds = arr[2];

    let distance1 = Number(speed1)*Number(timeInSeconds/60/60);
    let distance2 = Number(speed2)*Number(timeInSeconds/60/60);

    console.log(Math.abs(distance1-distance2)*1000)
}


distance([0, 60, 3600]);
distance([11, 10, 120]);
distance([5, -5, 40]);