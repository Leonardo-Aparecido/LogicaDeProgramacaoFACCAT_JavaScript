alert("programa para calcular salario do vendedor:")
var salario_fixo = Number(prompt("Digite o salario fixo:"))
var venda = Number(prompt("Digite a soma total das vendas:"))

if(venda<1500){
    var aux= venda + (venda*0.03)
    alert("seu salário é de R$:"+ (salario_fixo+aux))
} else {
    var aux2 = venda - 1500
    var aux= 45+(aux2*0.5)
    alert("seu salário e de R$"+(salario_fixo+aux))
}