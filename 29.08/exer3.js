const prompt = require("prompt-sync")();

const mes1 = parseFloat(prompt("Mês 1 :"));

const mes2 = parseFloat(prompt("Mês 2 :"));

const mes3 = parseFloat(prompt("Mês 3 : "));

const totaL3Meses = mes1 + mes2 + mes3

let comissao = totaL3Meses

if(totaL3Meses < 5000 ){
    comissao = 0
}else if(totaL3Meses >= 10000 ){
    comissao = totaL3Meses * 0.05
}else{
    comissao = totaL3Meses * 0.10
} 

console.log(` A comissão ${comissao.toFixed(2)}`);