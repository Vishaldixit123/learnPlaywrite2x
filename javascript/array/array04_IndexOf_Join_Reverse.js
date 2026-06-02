let arr = [1, 3, 5, 5, 1];

console.log(arr.indexOf(1)); //0
console.log(arr.indexOf(8))// -1
console.log(arr.indexOf(1, 1)); // 2


// joining in aaray

let arr1 = ['vishal', 'dixit', 'ramya']
console.log(arr1.join(' > ')) // vishal > dixit > ramya

// reverse in aaray
let arr3 = [1, 2, 3, 4, 5]

console.log(arr3.reverse()) //[ 5, 4, 3, 2, 1 ] change happend on same array will not create the new array


//spread opreator if you dont want to mutated the arr
let arr4 = ['vishal', 'dixit', 'ramya']

let x = [...arr1].reverse();

console.log(x);
console.log(arr4);
