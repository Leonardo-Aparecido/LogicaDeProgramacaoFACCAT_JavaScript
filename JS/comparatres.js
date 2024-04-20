alert("programa para comparar tres numeros e achar qual o maior")
var numero1 = Number(prompt("Digite o primeiro numero"))
var numero2 = Number(prompt("Digite o segundo numero"))
var numero3 = Number(prompt("Digite o terceiro numero"))


//  TABELA DA VERDADE
//  X>Y>Z  X
//  X>Z>Y  X
//  Y>X>Z  Y
//  Y>Z>X  Y
//  Z>Y>X  Z
//  Z>X>Y  Z


        //X>Y>Z                      X>Z>Y
if((numero1>numero2>numero3)&&(numero1>numero3>numero2)){ 

    alert ("O numero"+numero1+"é o maior")// X
        //Y>X>Z                      Y>Z>X    
} else if ((numero2>numero1>numero3)&&(numero2>numero3>numero1)){ // Y

    alert ("O numero"+numero2+"é o maior")

}else {
        //Z>Y>X  e  Z>X>Y
    alert("numero"+numero3+"é o maior") // Z

}
 
