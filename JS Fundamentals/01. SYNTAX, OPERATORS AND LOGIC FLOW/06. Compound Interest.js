function compoundInterest(arr) {
    let principalSum = arr[0];
    let interest = arr[1]/100;           //percent
    let compoundingPeriod = 12/arr[2];      //in months
    let timespan = arr[3];               //in years



    let result = principalSum*Math.pow((1+(interest/compoundingPeriod)),compoundingPeriod*timespan);

    console.log(result.toFixed(2));
}


compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);