function radio(input) {
    function cut(number,target) {
        let counter = 0;

        while(!(number - number*3/4 < target)){
            number = number - number*3/4;
            counter++;
        }

        if(counter>0){
            console.log(`Cut x${counter}`);
            number = transport(number,target);
        }

       return number;
    }
    function lap(number,target) {
        let counter = 0;

        while(!(number*0.8 < target)){
            number = number*0.8;
            counter++;
        }
        if(counter>0){
            console.log(`Lap x${counter}`);
            number = transport(number,target)
        }

        return number;
    }
    function grind(number,target) {
        let counter = 0;

        while(!(number-20 < target)){
            number = number-20;
            counter++;
        }
        if(counter>0){
            console.log(`Grind x${counter}`);
            number = transport(number,target)
        }

        return number;
    }
    function etch(number,target) {
        let counter = 0;

        while(!(number-2 < target -1)){
            number = number-2;
            counter++;
        }

        if(counter>0){
            console.log(`Etch x${counter}`);
            number = transport(number,target)
        }

        return number;
    }
    function xRay(number,target) {
        let counter = 0;
            number = number+1;
            counter++;

        if(counter>0){
            console.log(`X-ray x${counter}`);
        }

        return number;
    }
    function transport(number, target) {
        console.log("Transporting and washing");
        return Math.floor(number);
    }

    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        let material = input[i];


        console.log(`Processing chunk ${material} microns`);

        // cutting phase
        material = cut(material,target);
        material = lap(material,target);
        material = grind(material,target);
        material = etch(material,target);
        if(material == target-1){
            material = xRay(material,target);
        }
        console.log(`Finished crystal ${material} microns`);

    }
}

//radio ([1375, 50000]);
radio ([1000, 4000, 8100]);
