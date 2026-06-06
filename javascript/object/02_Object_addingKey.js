const user = {
    name: 'vishal',
    age: 32,
}


let userEmails = ['vishal04dixt.com', 'vishald04dixit@gmail.com']


for (const userEmail of userEmails) {
    if (user['email'] == undefined) {
        user['email'] = (user['email'] || []);
    }
    user['email'].push(userEmail);

}
console.log(user);