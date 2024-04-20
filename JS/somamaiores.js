alert("programa para comparar tres numeros e somar os dois maiores")
var numero1 = Number(prompt("Digite o primeiro numero"))
var numero2 = Number(prompt("Digite o segundo numero"))
var numero3 = Number(prompt("Digite o terceiro numero"))


//  TABELA DA VERDADE
//  X>Y>Z = Y>X>Z    X+Y
//  X>Z>Y = Z>X>Y    X+Z
//  Y>Z>X = Z>Y>Z    Y+Z
  


                               
if((numero1>numero2>numero3)||(numero1>numero3>numero2)){ 

    alert ("A soma dos dois maiores numero é:"+(numero1+numero2))  //X+Y
        
} else if ((numero1>numero3>numero2)||(numero3>numero1>numero2)){  //X+Z

    alert ("A soma dos dois maiores numeros é:"+(numero1+numero3))

}else /*if((numero2>numero3>numero1)||(numero3>numero2>numero1))*/{ //Y+Z

    alert("A soma dos dois maiores numeros é:"+(numero2+numero3)) 

}