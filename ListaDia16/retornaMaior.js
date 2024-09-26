const prompt = require('prompt-sync')();

const numeros = [0,3,7,9,13];
const maiorNumero = numeros.length === 0 ? "O vetor está vazio." : Math.max(...numeros);

console.log("O maior número é:", maiorNumero);