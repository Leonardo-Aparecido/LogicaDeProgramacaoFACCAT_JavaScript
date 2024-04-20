alert("Vamos descobrir a porcentagem de votos brancos,nulos e validos")
var TOTAL = Number(prompt("Insira a quantidade de eleitores total"))
var BRANCOS=Number(prompt("Insira a quantidade de votos brancos:"))
var NULOS=Number(prompt("Insira a quantade de votos Nulos:"))
var VALIDOS= TOTAL - (BRANCOS+NULOS)
var PORC_BRANCOS = (BRANCOS*100)/TOTAL
var PORC_NULOS = (NULOS*100)/TOTAL
var PORC_VALIDOS = (VALIDOS*100)/TOTAL

alert("Porcentagem de votos brancos: "+ PORC_BRANCOS + "%")
alert("Porcentagem de votos nulos: "+ PORC_NULOS + "%")
alert("Porcentagem de votos validos: "+ PORC_VALIDOS + "%")

