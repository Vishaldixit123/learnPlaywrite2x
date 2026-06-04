let s = 'madam'

let start = 0;
let end = s.length - 1;
let isPalindrome = true;
let rev = '';
// while (start < end) {
//     if (s.charAt(start) !== s.charAt(end)) {
//         isPalindrome = false;
//         break;
//     }
//     start++;
//     end--
// }
// console.log(isPalindrome);

for (let i = end; i >= start; i--) {
    rev = rev + s.charAt(i);
}
console.log(rev)
console.log(s)
isPalindrome = (rev === s) ? true : false;

console.log(isPalindrome)