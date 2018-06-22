function solve(arr) {
    let ch = arr[arr.length-1];
    arr.splice(arr.length-1)
    console.log(arr.join(ch));
}

solve(['One',
'Two',
'Three',
'Four',
'Five',
"-"]
)