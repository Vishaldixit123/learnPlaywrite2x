class Car {

    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log('I am driving ' + this.name)
    }
}

const car1 = new Car('Scorpio')
car1.drive()
const car2 = new Car('Laura')
car2.drive()
