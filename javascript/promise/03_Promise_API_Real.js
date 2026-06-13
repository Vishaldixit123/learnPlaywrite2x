let apiResult = new Promise(function (resolve, reject) {

    reject({ statusCode: 400, data: 'TestError' })

})

apiResult.then(function (msg) {
    console.log(msg)
}).catch(function (msg) {
    console.log(msg)
})