function moviePrices(input) {
    let movieTitle = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    let price = 0;

    if (movieTitle == "the godfather"){
        switch (day){
            case "monday": price = 12; break;
            case "tuesday": price= 10; break;
            case "wednesday": price = 15; break;
            case "thursday": price = 12.5; break;
            case "friday": price = 15; break;
            case "saturday": price = 25; break;
            case "sunday": price = 30; break;
            default: console.log("error");
        }
    }else if (movieTitle == "schindler's list"){
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday": price = 8.5; break;
            case "saturday":
            case "sunday": price = 15; break;
            default:
                console.log("error");
        }
    }else if (movieTitle == "casablanca"){
            switch (day){
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday": price = 8; break;
                case "saturday":
                case "sunday": price = 10; break;
                default: console.log("error");
            }
    }else if (movieTitle == "the wizard of oz") {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                price = 10;
                break;
            case "saturday":
            case "sunday":
                price = 15;
                break;
            default:
                console.log("error");
    }
    }else{
        console.log("error");
        return;
    }
    console.log(price);
}

moviePrices(["SoftUni",
    "Nineday"
])