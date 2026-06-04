let str = " Login_Test_Pass_001 ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.includes('Pass'));
console.log(str.replace(/\s/g, ''));
console.log(str.replaceAll('Pass', 'Hi'));

console.log(str.trim().substring(0, str.length - 6))

console.log(str.trim().slice(0, 5)); // go to 0 to 4 index last one will skip 

console.log(str.trim().slice(6));
console.log(str.trim().slice(0, -8));

let st = str.trim().split('_');

console.log(st)
let passCount = 0;
for (let s of st) {
    console.log(s);
    if (s === 'Pass') {

        passCount++

    }
}
console.log(passCount);

let st1 = str.trim().split('_').join(">");

console.log(st1); // Login>Test>Pass>001
