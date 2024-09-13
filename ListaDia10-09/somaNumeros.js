const prompt = require('prompt-sync')();

let soma = 0;

let num = 1;

while(num <= 50){

    if(num % 2 !== 0){
        soma = soma + num //soma += num  
    }

    num = num + 1 //num++
}

console.log(`numeros impares somados : ${soma}`)