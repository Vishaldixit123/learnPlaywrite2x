let resultCode = new Promise(function (resolve, reject) {

    // resolve({ statusCode: 200 })
    reject({ statusCode: 500 })

})

resultCode.then(function (response) {
    console.log(response)
}).catch(function (response) {
    console.log(response)
}).finally(function () {
    console.log('will executed')
})