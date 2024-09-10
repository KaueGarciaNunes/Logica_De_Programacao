const prompt = require("prompt-sync")();

const num1 = Number (prompt("1°Numero :"));

const num2 = Number (prompt("2°Numero : " ))

const num3 = Number (prompt("3°Numero : "));

if(num1 < num2 && num2 < num3 ){
    console.log("Está em Ordem Crescente")
}else if (num1 > num2 && num2 > num3){
    console.log("Está em Ordem Decrescente")
} else{
    console.log("Os Numeros Estão Desordenados")
}