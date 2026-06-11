
function test(a, b, sum) {
    let c = a + b;
    sum(c);
}

test(5, 10, function (result) {
    console.log("Sum is: " + result);
});


function multi(n1, n2, devide) {
  let dr = devide(40, 20);

  setTimeout(() => {
    console.log("this is the second message " + n1 * n2);
    console.log(dr);
  }, 3000);
}
function dive(n3, n4) {
  return n3 / n4;
}

multi(20, 10, dive)