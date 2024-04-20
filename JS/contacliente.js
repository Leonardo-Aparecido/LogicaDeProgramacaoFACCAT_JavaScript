alert("programa para calcular saldo cliente:")
var conta = Number(prompt("Digite numer conta:"))
var saldo = Number(prompt("Insira saldo"))
var debito = Number(prompt("Insira debito"))
var credito = Number(prompt("Insira credito"))
var total = saldo -debito +credito


if(total<=0){
 
    alert("seu saldo é de -R$:"+total+"saldo negativo")
} else {
    alert("seu saldo e de R$"+total+"saldo positivo")
}