function tripLength(arr) {

    let first = distanceBetwenTwoPoints(arr[0],arr[1],arr[2],arr[3]);
    let second = distanceBetwenTwoPoints(arr[4],arr[5],arr[2],arr[3]);
    let third = distanceBetwenTwoPoints(arr[0],arr[1],arr[4],arr[5]);

    let minDistance = Number.MAX_SAFE_INTEGER;
    let path = "";

if(first+second<=first+third && first+ second <= second+third){
    minDistance = first + second;
    path = "1->2->3: " + minDistance;
}else if (first+third<=first+second && first+third <=second+third){
    minDistance = first+third;
    path = "2->1->3: " + minDistance;
}else if(second+third<=first+second && second+third<= first+third){
    minDistance = second+third;
    path = "1->3->2: " + minDistance;
}


    console.log(path);


    function distanceBetwenTwoPoints(x1, y1, x2, y2) {
        let disX = Math.pow(x1-x2,2);
        let disY = Math.pow(y1-y2,2);

        let result = Math.sqrt(disX +disY);

        return result;
    }
}

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);
