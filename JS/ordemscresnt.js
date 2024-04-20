alert("Programa para ler três numero e escrever em ordem crescente")
var numero1 = Number(prompt("Digite o primeiro numero"))
var numero2 = Number(prompt("Digite o segundo numero"))
var numeor3 = Number(prompt("Digite o terceiro numero"))

if (numero1>numero2>numer3){
    alert("Seus números já estão em ordem!:"+numero1+numero2+numero3)
}
if (numero1>numero3){
    if(numero3>numero2){
        alert("Seus números em ordem são:"+numero1+numero3+numero2)
    }
}
if(numero2>numero1){
    if(numero1>numero3){
        alert("Seus números em ordem são:"+numero2+numero1+numero3)       
    }
}
if(numero2>numero3){
    if(numero3>numero1){
        alert("Seus números em ordem são:"+numero2+numero3+numero1)       
    }
}
if(numero3>numero2){
    if(numero2>numero1){
        alert("Seus números em ordem são:"+numero3+numero2+numero3)       
    }
}
if(numero3>numero1){
    if(numero1>numero2){
        alert("Seus números em ordem são:"+numero3+numero1+numero2)       
    }
}





//exemplo if else ternário
//var jao = (numero1==20)?(alert("Numero 1 é maior que numero2")):(alert("Numeor 2 é maior que numero 1"));



