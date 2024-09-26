const prompt = require('prompt-sync')();

let cores = ["Azul","Cinza","Rosa","Preto"]

const pergunta = prompt("Insira Uma Cor : ");

const indice = cores.indexOf(pergunta);

if(indice != -1){
    console.log(`A Cor Está No Indice! ${indice}`)
}else{
    console.log(`Cor Não Encontrada.`)
}