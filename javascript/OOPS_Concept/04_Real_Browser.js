class Browser {

    constructor(name, status, peority) {
        this.name = name;
        this.status = status;
        this.peority = peority;
    }

    printStaus() {
        console.log(this.name + ' ' + this.status + ' ' + this.peority)
    }
}

const login = new Browser('Login', 'Pass', 'High');
login.printStaus();
