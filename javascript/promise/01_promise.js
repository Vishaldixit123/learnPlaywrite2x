let order = new Promise(function (resolve, reject) {

    let foodReady = false;

    if (foodReady) {
        resolve('Order rady');
    } else {
        reject('Order is not ready')
    }

});

order.then(function (msg) {
    console.log(msg)
}).catch(function(msg){
    console.log(msg)
}).finally(function(){
    console.log('Done')
})
