let apiResult = new Promise(function (resolve, reject) {

    resolve({ statusCode: 200, data: 'Test' })
    reject({ statusCode: 400, data: 'TestError' })

})

apiResult.then(function (msg) {
    console.log(msg)
}).catch(function (msg) {
    console.log(msg)
})