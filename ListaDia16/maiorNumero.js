const prompt = require('prompt-sync')();

const numeros = [0,3,6,9,12,15,18,21];

console.log(`Vetor: ${numeros}`)

let maiorNumero = numeros [0]

for(let i = 1; i < numeros.length; i++ ){
    if (numeros[i] > maiorNumero){
        maiorNumero = numeros[i];
    }

}
console.log(`Maior numero no Vetor: ${maiorNumero}`);