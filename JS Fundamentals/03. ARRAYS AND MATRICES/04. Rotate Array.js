function solve(arr) {
    let rotation = arr.pop();
    let n =rotation % arr.length;

    for (let i = 0; i < n; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(" "));
}

solve([ '1', '2', '3', '4', '2' ]);
solve([ 'Banana', 'Orange', 'Coconut', 'Apple', '15' ]);