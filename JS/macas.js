alert("Programa para descobrir preço total de compra de maças:")
var macas = Number(prompt("Digite numero de macas"))
if (macas<12){
    var total= macas *1.3
    alert("valor a ser pago é R$"+total)
} else{
    total = macas*1
    alert("valor a ser pago é R$"+total)
}