const user1 = { name: 'vishal', age: 30 }
const user2 = user1;

console.log(user2 === user1)

console.log(user2.name)

user2.name = 'Raja'
console.log(user1)