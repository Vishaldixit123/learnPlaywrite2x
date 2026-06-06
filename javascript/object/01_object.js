const user = {
    name: 'vishal',
    age: 32,
    email: 'vishal04dixit@gmail.com'
}

console.log(user.name);
console.log(user['name'])

user['city'] = 'bhopal' // Add key in object

console.log(user);

delete user.email // remove key in object

console.log(user);



