function loginPage() {
    return new Promise(function (resolve) {
        resolve('Login')
    })
}

function openBrowser() {
    return new Promise(function (resolve) {
        resolve('Open browser')
    })
}

function enterCredential() {
    return new Promise(function (resolve) {
        resolve('Enter User Name')
    })
}

function clickLogin() {
    return new Promise(function (resolve, reject) {
        resolve('Click on Login Button')
        reject('Credentials is incorrect')
    })
}



openBrowser().then(function (msg) {
    console.log(msg)
    return loginPage().then(function (msg) {
        console.log(msg)
    }).then((function (msg) {
        return enterCredential().then(function (msg) {
            console.log(msg)
        }).then(function (msg) {
            return clickLogin().then(function (msg) {
                console.log(msg)
            }).catch(function (msg) {
                console.log(msg)
            }).finally(function (msg) {
                console.log('User will login')
            })
        })
    }));
})