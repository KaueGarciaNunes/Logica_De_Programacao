const prompt = require('prompt-sync')();

const numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12]

console.log(`vetor:${numeros}`);

const pares = numeros.filter(num => num % 2 === 0);

console.log(`Numeros Pares: ${pares}`)
