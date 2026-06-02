let arr1 = [80, 90, 70, 50];

let result = arr1.every(s => s >= 50); // will check the condition all elemnt should be grater then 50

console.log(result); // true 

let arr = [80, 50, 70, 90]

result = arr.some(s => s < 70); // will check the condition atleast one elemnt should be less then 70

console.log(result); // true