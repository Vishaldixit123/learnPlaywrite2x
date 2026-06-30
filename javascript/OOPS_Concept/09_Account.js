class Account {
    #balance = 0;

    addBlance(amount) {
        if (amount > 0) {
            this.#balance += amount
        }
    }

    withdrraw(amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount
            console.log('Withdrwa amount is ' + amount);
            console.log('Availble balance in your account ' + this.#balance);
        } else {
            console.log('Insuffecent balanace in your account ' + amount);
        }


    }
    getBalance() {
        console.log('Your current balance is ' + this.#balance);
    }
}

let acc1 = new Account()
acc1.addBlance(500000)
acc1.getBalance();
acc1.withdrraw(50000);
acc1.getBalance();
