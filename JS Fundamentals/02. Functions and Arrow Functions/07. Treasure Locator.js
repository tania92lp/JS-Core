function treasureLocator(arr) {

    for (let i = 0; i < arr.length-1; i+=2) {
        let x = arr[i];
        let y = arr[i+1];

        console.log(isOnIsland(x, y));;
    }

    function isOnIsland(x1,y1) {
        if((x1>=1 && x1<= 3)&&(y1>=1 && y1<= 3)){
            return "Tuvalu";
        }else if ((x1>=0 && x1<= 2)&&(y1>=6 && y1<= 8)) {
            return "Tonga";
        }else if ((x1>=3 && x1<= 7)&&(y1>=3 && y1<= 6)) {
            return "Samoa";
        }else if ((x1>=4 && x1<= 9)&&(y1>=7 && y1<= 8)) {
            return "Cook";
        }else if ((x1>=8 && x1<= 9)&&(y1>=0 && y1<= 1)) {
            return "Tokelau";
        }
        else{
            return "On the bottom of the ocean";
        }
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3])
treasureLocator([6, 4])