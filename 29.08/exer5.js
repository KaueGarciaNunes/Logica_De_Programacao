const prompt = require("prompt-sync")();

const peso = parseFloat(prompt("Peso "))
const altura = parseFloat(prompt("Altura "))
const imc = peso / (altura * altura)
if (imc < 18.5 ) {
    console.log(`IMC :${imc.toFixed(2)} Está a abaixo do peso`)
}else if (imc >= 18.5 && imc <= 24.9){
    console.log(`IMC :${imc.toFixed(2)} Peso Normal`)
}else if (imc >= 25 && imc <= 29.9){
    console.log(`IMC:${imc.toFixed(2)} SobrePeso `)
}else if (imc >= 30 && imc <= 34.9){
    console.log(`IMC: ${imc.toFixed(2)} Obesidade I `)
}else if (imc >= 35 && imc <= 39.9 ){
    console.log(`IMC: ${imc.toFixed(2)} Obesidade II `)
}else if (imc >= 40){
    console.log(`IMC: ${imc.toFixed(2)} Obesidade III `)

}
    

    