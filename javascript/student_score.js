
let number = 20;

function score(number) {

    if (number >= 90 && number <= 100) {

        console.log('A+ grade')

    } else if (number >= 70 && number <= 89) {
        console.log('A grade')
    } else if (number >= 60 && number <= 69) {
        console.log('b grade')
    } else if (number >= 33 && number <= 59) {
        console.log('c grade')
    } else {
        console.log('FAILD DO HARD WORK NEXT YEAR')
    }

}

score(number);