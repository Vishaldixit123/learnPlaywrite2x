class Credentials {

    #apiKey; // Private variables are not allowed to be used outside. 
    name;

    constructor(name, apiKey) {
        this.#apiKey = apiKey
        this.name = name;

    }

    getToken() {
        return this.#apiKey
    }


}

const cred1 = new Credentials('Vishal', 'jsndsks')

let token = cred1.getToken();
console.log(token)
console.log(cred1.#apiKey) // Private not accessable outside the class