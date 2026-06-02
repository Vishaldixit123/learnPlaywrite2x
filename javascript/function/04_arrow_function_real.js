let suceesCode = (staus) => {
    if (staus === 200 && staus <= 300) {
        console.log('Succesfully login')
        return staus;
    } else {
        console.log('Not Found')
        return staus;
    }


}

console.log(suceesCode(200))
console.log(suceesCode(400))