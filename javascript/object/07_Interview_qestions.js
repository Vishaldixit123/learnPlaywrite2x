const data = { a: 1, b: 2, c: 3 }

console.log(Object.keys(data));
console.log(Object.values(data))
console.log(Object.entries(data))

for (let key in data) {
    console.log(key + " ---- " + data[key]);

}