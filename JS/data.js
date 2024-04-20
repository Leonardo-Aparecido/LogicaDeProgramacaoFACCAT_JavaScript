/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias*/


alert("Vamos escrever sua idade em dias")
var ANOS = Number(prompt("Insira sua idade em anos"))
var MESES= Number(prompt("Insira a quantidade de meses decorridas desde o seu último aniversário"))
var DIAS = Number(prompt("Insira a quantidade de dias que passou do seu último mêsversário"))

var IDADE = (ANOS * 365)+(MESES*30)+DIAS
alert("Sua idade expressa em dias é de: "+ IDADE)