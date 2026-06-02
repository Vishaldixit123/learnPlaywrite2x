function add(a, b,c){
    return a+b+c;
}

let num = [1,2,3]

const add1 = add(...num);

console.log(add1);

let responseCode = [200,201,401]

const errorCode = (...code)=>{
    return code.some(code => code >= 400)
}

console.log(errorCode(...responseCode));