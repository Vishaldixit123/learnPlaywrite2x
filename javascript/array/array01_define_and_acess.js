let arr = [10, 30, 40, 60]

for (a of arr) {
    console.log(a);
}

for (b in arr) {
    console.log(b);
}

let ab = Array.of('vishal')
console.log(ab)

let data = new Array(5);

console.log(data[0])
console.log(data[1])

let demo = Array.from('Vishal') // create the array of char
console.log(demo)


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}