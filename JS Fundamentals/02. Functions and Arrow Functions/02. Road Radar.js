function roadRadar(input) {
    let speed = Number.parseInt(input[0]);
    let area = input[1].toString();

    limitsInArea(speed,area);

    function limitsInArea(speed, area) {
        let motorway = 130;
        let interstate = 90;
        let city = 50;
        let residential = 20;

        switch (area) {
            case "motorway":
                (speed - motorway > 0) ? speedUp(speed - motorway) : console.log("");
                break;
            case "interstate":
                (speed - interstate > 0) ? speedUp(speed - interstate): console.log("");
                break;
            case "city":
                (speed - city > 0) ? speedUp(speed - city): console.log("");
                break;
            case "residential":
                (speed - residential > 0) ? speedUp(speed - residential): console.log("");
                break;


        }
    }

    function speedUp(up) {
        if (up > 0 && up <= 20) {
            console.log("speeding");
        } else if (up <= 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }

}

roadRadar([120, "interstate"]);