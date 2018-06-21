function modifyAverage(number) {
    let num = number;

    while (!(average(num) > 5)){
        let newNumber = num.toString()+'9';
        num = newNumber;
    }

    console.log(num);


    function average(number) {
        let sum = 0;
        let num = number.toString();

        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        let average = sum/ num.length;

        return average;
    }
}

//modifyAverage(5835);
modifyAverage(101);