const prompt = require('prompt-sync')();

let n = [0,10,12]

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        vetor[i] = "Par";
    } else {
        vetor[i] = "Ímpar";
    }
}

console.log(vetor);