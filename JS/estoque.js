alert("programa para calcular estoque:")
var qnt_estoque = Number(prompt("quantidade atual no estoque:"))
var max_prod = Number(prompt("quantidade maxima de produto:"))
var min_prod = Number(prompt("quantidade min. de produto:"))
var media = (max_prod+min_prod)/2 

if(min<=qnt_estoque){

    alert("nao efetuar compra")
} else {

    alert("efetuar compra")
}