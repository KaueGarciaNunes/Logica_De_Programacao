const prompt = require('prompt-sync')();

const numeros = [22, 17, 5, 11, 9]; 

const media = numeros.reduce((a, b) => a + b, 0) / numeros.length;

console.log("A média dos números é:", media)