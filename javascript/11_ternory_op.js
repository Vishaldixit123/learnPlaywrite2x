let age = 20;
let vote = age > 18 ? "You can vote" : "No";
console.log(vote);

let env = "qa"
let url = env === "dev" ? "http/dev" : "http/qa"

console.log(url)

let x = 10;
let y = 400;
let z = 30;

let maxNumber = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
console.log(maxNumber)

let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);

console.log(a)
