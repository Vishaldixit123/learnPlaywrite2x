let login = Promise.resolve('Login Ok');
let DbCheck = Promise.resolve('Db is Ok');
let catchOk = Promise.resolve('Cache Ok')
let invalidLogin = Promise.reject('Invalid Credentials')

Promise.all([login, DbCheck, catchOk, invalidLogin]).then(function (msg) {
    console.log(msg)
}).catch(function (error) {
    console.log(error)
}).finally(function () {
    console.log('Thanks')
})

Promise.allSettled([login, DbCheck, catchOk, invalidLogin]).then(function (msg) {
    msg.forEach(function (r, i) {
        console.log(i + 1 + " " + r.status + " " + r.value)
    })
})
