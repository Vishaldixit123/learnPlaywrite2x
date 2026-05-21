function statusCode(code) {
    if (code >= 200 && code <= 299) {
        console.log(`${code} is Succes`)
    } else if (code >= 300 && code <= 399) {
        console.log(`${code} is Redirect`)
    } else if (code >= 400 && code <= 499) {
        console.log(`${code} is client side error`)
    } else if (code >= 500 && code <= 599) {
        console.log(`${code} is Server side error`)
    } else {
        console.log(`${code} is Invalid`)
    }
}

statusCode(401)
statusCode(500)
