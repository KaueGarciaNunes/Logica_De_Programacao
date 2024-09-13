const prompt = require("prompt-sync")();
let numero = 1;
while(numero <= 30){
    if(numero % 4 == 0){
        numero++;
        continue;
}
    console.log(`numero : ${numero}`)
    numero++
}