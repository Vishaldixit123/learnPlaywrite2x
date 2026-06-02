
let cart = ['apple', 'banana', 'charry']

//push add the  elements from the array and giving length of array
let len = cart.push('grap', 'date');

console.log(cart);
console.log(len);

// pop remove the last element from the array and giving last index
len = cart.pop();

console.log(cart);
console.log(len);

// shift remove the first element from the array

len = cart.shift();

console.log(cart);
console.log(len);
let cart1 = ['apple1', 'banana1', 'charry1']

cart.unshift('water', 'test', cart1) // Insert new elemnt starting of the array
console.log(cart);