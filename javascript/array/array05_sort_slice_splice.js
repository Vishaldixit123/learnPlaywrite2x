let arr1 = [2, 5, 7, 2, 4, 9, 6]

// console.log(arr1.sort((a, b) => {
//     a - b;
// }));


//Slice method 

// console.log(arr1.slice(1, 4)); // [ 5, 7, 2 ]
// console.log(arr1.slice(-2)) // give number from end
// console.log(arr1.slice(0))

//splice method 

arr1.splice(1, 3)
console.log(arr1)

arr1.splice(1, 0, 10, 20);

console.log(arr1)

arr1.splice(4, 1, 50);

console.log(arr1)
