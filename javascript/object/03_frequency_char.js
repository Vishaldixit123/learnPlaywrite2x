let str = 'I am vishal dixit';

const data = {};

for (let char of str) {
    if (char == ' ') {
        continue;
    }
    data[char] = (data[char] || 0) + 1;
}

console.log(data)


