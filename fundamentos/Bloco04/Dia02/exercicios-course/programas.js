let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*exercicio 1
console.log(numbers);
---------------------------------------
*/

/*
EXERCICIO 2
soma = 0;

for(contador = 0; contador < numbers.length; contador += 1){
  //aqui será armazenado a soma
  soma = soma + numbers[contador];

}
console.log(soma);
------------------------------
*/
/* 
EXERCICIO 3
for(contador = 0; contador < numbers.length; contador += 1){
  //aqui será armazenado a soma
  soma = soma + numbers[contador];
}

mediaAritmetica = soma/contador;
console.log(soma);
console.log(mediaAritmetica);

---------------------------------
*/
/*
EXERCICIO 4
for(contador = 0; contador < numbers.length; contador += 1){
  //aqui será armazenado a soma
  soma = soma + numbers[contador];

  mediaAritmetica = soma/contador;
  console.log("A soma é de: " + soma);
  console.log("A média aritmética é de: " + mediaAritmetica);

  if(mediaAritmetica > 20){
    console.log("Valor maior que 20");
  }

  else{
    console.log("Valor menor ou igual a 20");
  }
-----------------------
*/

/*
EXERCICIO 5
//defino maior valor como 0
maiorValor = 0;
for(let indice = 0; indice < numbers.length; indice += 1){
  //se o valor do indice atual for maior que maiorValor (que é 0)
  if(numbers[indice] > maiorValor)

  maiorValor = numbers[indice];
    //o maior valor recebe o número do índice atual, caso seja maior.
  //o maior valor tinha o valor de 0 e o índice inicial tem o valor de 5. Logo o maior valor vai sair de 0 e receber o 5. E assim vai
}

console.log("O maior valor é de: " + maiorValor);

*/
/*
contadorImpar = 0;
contadorPar = 0;

for(let indice = 0; indice < numbers.length; indice += 1){
  if(numbers[indice] % 2 != 0){
      contadorImpar += 1; 
  }
  else{
    contadorPar += 1;
  }
 

}

if (contadorImpar > 0){
  console.log("Tem: " + contadorImpar + " números ímpares");
  console.log("Tem: " + contadorPar + " números pares");
}
else{
  console.log("Não há números ímpar");
}*/

menorValor = 10;
//definir o menorValor com um numero maior que 0
for(let indice = 0; indice < numbers.length; indice += 1){
  //se o valor do indice atual for maior que maiorValor (que é 0)
  if(numbers[indice] < menorValor)

  menorValor = numbers[indice];
    
}

console.log("O menor valor é de: " + menorValor);



