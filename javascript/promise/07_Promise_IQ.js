let result = new Promise(function (resolve) {
    resolve(42)
})

result.then(function (msg) {
    console.log(msg)
})