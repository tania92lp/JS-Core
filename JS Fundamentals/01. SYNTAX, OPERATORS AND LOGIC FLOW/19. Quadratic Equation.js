function quadraticEquation(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    if (discriminant > 0) {
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (discriminant == 0) {
        console.log(x1);
    } else{
        console.log("No");
    }
}

quadraticEquation([6, 11, -35]);
quadraticEquation([1, -12, 36]);
quadraticEquation([5, 2, 1]);