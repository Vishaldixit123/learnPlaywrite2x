// Object Destructuring
const data = { name: 'Vishal', age: 32, email: 'vishal04dixit@gmail.com' }

// Extract specific properties
const { name, age } = data;
console.log(name);  // 'Vishal'
console.log(age);   // 32

// Rename while destructuring
const { name: userName, email: userEmail } = data;
console.log(userName);   // 'Vishal'
console.log(userEmail);  // 'vishal04dixit@gmail.com'

// With default values
const { name, city = 'Unknown' } = data;
console.log(city);  // 'Unknown' (not in object)

// Array Destructuring
const arr = [10, 20, 30, 40];
const [first, second] = arr;
console.log(first);   // 10
console.log(second);  // 20

// Skip elements
const [a, , c] = arr;
console.log(a, c);  // 10 30

// Rest operator
const [head, ...rest] = arr;
console.log(head);  // 10
console.log(rest);  // [20, 30, 40]

