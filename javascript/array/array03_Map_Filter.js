let cart = ['apple', 'banana', 'charry'];

let carte = cart.map(m => m.charAt(0).toUpperCase()+""+m.slice(1));

console.log(carte)