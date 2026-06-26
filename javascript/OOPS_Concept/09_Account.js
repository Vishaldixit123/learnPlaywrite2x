class Account {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }


    addBlance(amount) {
        if (amount > 0) {
            this.#balance += amount
        }
    }
    getBalance() {
        console.log(this.#balance);
    }
}

let acc1 = new Account(50000)
acc1.addBlance(10000)
acc1.getBalance();