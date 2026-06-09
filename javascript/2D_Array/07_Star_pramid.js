// let row = 5;

for (let i = 1; i <= 3; i++) {
    let row1 = "";
    for (let j = 1; j <= 3 - i; j++) {

        row1 += " "

    }
    for (let k = 1; k <= (2 * i - 1); k++) {

        row1 += "*"

    }

    console.log(row1)


}
