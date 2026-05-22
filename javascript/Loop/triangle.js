let a = 20;
let b = 20;
let c = 300;

if ((a == b && b == c)) {
    console.log('equilateral')
} else if (a === b || b === c || a === c) {
    console.log('isosceles')
} else {
    console.log('scalene')
}