const prompt = require("prompt-sync")();

const lado1 = parseFloat(prompt("1° Medida :"));
const lado2 = parseFloat(prompt("2° Medida :"));
const lado3 = parseFloat(prompt("3° Medida : "));
const lado4 = parseFloat(prompt("4° Medida : "));

if(lado1 === lado2 && lado2 === lado3 && lado3 === lado4 ){
    console.log("é um quadrado ou losango");
}else if(lado1 === lado3 && lado2 === lado4){
    console.log("é um retangulo");
} else {
    console.log("O Quadrilátero é Outro");
}