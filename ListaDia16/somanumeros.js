const prompt = require('prompt-sync')();

let numeros = [1,2,3,4,5]

let soma = 0

for(let numero of numeros ){
    soma = soma + numero;
}
console.log(`A soma dos Numeros ${soma}`)
