function makeCounter(value = 0) {
    let count = value;
    return {
        increment() { return count++ },
        decrement() { return count-- },
        getCount() { return count }
    }
}

let counter = makeCounter(0)

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());

counter.decrement();

console.log(counter.getCount());