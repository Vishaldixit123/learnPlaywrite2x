let str = 'I am vishal dixit';

const data = {};

let maxChar = ' ';
let maxCount = 0;
for (let char of str) {
    if (char == ' ') {
        continue;
    }
    data[char] = (data[char] || 0) + 1;

    if (data[char] > maxCount) {
        maxCount = data[char];
        maxChar = char;
    }
}

console.log(maxCount)
console.log(maxChar)