let s = 'vishal dixit'

let start = 0;
let end = s.length - 1;
let chars = s.split('');
let c;

while (start < end) {
    c = chars[start];
    chars[start] = chars[end];
    chars[end] = c;
    start++;
    end--;
}

let reversed = chars.join('');
console.log(reversed);