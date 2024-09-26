const prompt = require('prompt-sync')();

let numeros = [9,7,17,3,11];

console.log(`Vetor Original: ${numeros}`);

numeros.sort((a,b) => a - b );

console.log(`Vetor Ordemado: ${numeros}`);

