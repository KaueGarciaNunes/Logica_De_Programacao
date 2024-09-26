const prompt = require('prompt-sync')();

const numeros = [0,1,2,3,4,5,6,7,8,9,]

console.log(`Numeros: ${numeros} `);

numeros.sort((a,b) => b - a );

console.log(`Numeros Inversos ${numeros} `)

