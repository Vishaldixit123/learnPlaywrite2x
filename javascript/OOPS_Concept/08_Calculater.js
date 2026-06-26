class calculater {
    number1;
    number2;

    constructor(number1, number2) {

        this.number1 = number1;
        this.number2 = number2

    }

    addition() {
        return this.number1 + this.number2;
    }

    substrection() {
        return this.number1 - this.number2;
    }

    multiply() {
        return this.number1 * this.number2;
    }

    devided() {
        return this.number1 / this.number2;
    }


    calculateOpreation(opreation) {
        switch (opreation) {
            case '+':
                return this.addition();
            case '-':
                return this.substrection();
            case '*':
                return this.multiply();
            case '/':
                return this.devided();
            default:
                console.log('Operation not match');
                return null;
        }
    }
}

let cal1 = new calculater(30, 20);
console.log(cal1.calculateOpreation('-'))