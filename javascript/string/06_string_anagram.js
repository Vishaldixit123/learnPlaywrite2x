let s1 = 'listen';
let s2 = 'silent';



function anagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');

    if (s1.length !== s2.length) {
        return false;
    }

    let map = {}

    for (let char of str1) {

        map[char] = (map[char] || 0) + 1;

    }

    console.log(map)

    for (let char of str2) {
        if (!map[char]) {
            return false;
        }
        map[char]--;


    }
    return true;
}

let isValue = anagram(s1, s2);

console.log(isValue)