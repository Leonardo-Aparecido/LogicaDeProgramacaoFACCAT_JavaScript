alert ("programa para aprovação de aluno:")
var avaliacaoum=Number(prompt("Escreva a nota 1"))
var avaliacaodois=Number(prompt("Escreva a nota 2"))
var media = (avaliacaodois+avaliacaoum)/2
if (media>=6){
    alert("aluno aprovado!")
} else {
    alert("aluno reprovado!")
}