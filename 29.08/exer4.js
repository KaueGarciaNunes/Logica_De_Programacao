const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Nota 1 :"));
const nota2 = Number(prompt("Nota 2 :"));
const nota3 = Number(prompt("Nota 3 :"));

const media = (nota1 + nota2 + nota3) / 3 

if(media > 85 ){
    media += 5
}else if (media >= 70 && media <= 85 ){
    media += 3
} 

const status = media >= 60 ? "Aprovado" : "Reprovado"

console.log(`Media Final :${media.toFixed(2)} \n Aluno está : ${status} `)