alert("Programa para saber obrigatoriedade do voto")
var ano_atual=2024
var ano_nasc = Number(prompt("digite seu ano de nascimento"))
var aux = 2024 - ano_nasc
if (aux<16){
    alert("voto PROIBIDO, ABENCOADO")
} if (aux>18){
    alert("voto obrigatorio")
}else{
    alert("voto opcional")
}