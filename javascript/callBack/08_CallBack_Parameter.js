
function test(a, b, sum) {
    let c = a + b;
    sum(c);
}

test(5, 10, function (result) {
    console.log("Sum is: " + result);
});