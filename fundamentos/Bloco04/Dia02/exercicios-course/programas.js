

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

EXERCICIO 6
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
-----------------------------
}*/

/*
EXERCICIO 7
menorValor = 10;
//definir o menorValor com um numero maior que 0
for(let indice = 0; indice < numbers.length; indice += 1){
  //se o valor do indice atual for maior que maiorValor (que é 0)
  if(numbers[indice] < menorValor)

  menorValor = numbers[indice];
  
}

console.log("O menor valor é de: " + menorValor);
--------------------  */

/*
EXERCICIO 8
let array = [];

for(let numInicial = 1; numInicial <= 25; numInicial += 1){
  array.push(numInicial);
}

console.log(array);
-------------------------------*/

/*
EXERCICIO 8
let array = [];

for(let numInicial = 1; numInicial <= 25; numInicial += 1)
{
  array.push(numInicial);
  
  
}
console.log(array);


for(let indice = 0; indice < array.length; indice += 1){
  console.log("|" + array[indice]/2);
}
---------------------*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

/*

//ordem crescente
numbers.sort((a,b) => a -b);

//ordem decrescente
numbers.sort((a,b) => b - a);
*/

//exercício 3

for (let i = 0; i < numbers.length - 1; i += 1){
  numbers2.push(numbers[i] * numbers[i+1]);
}

console.log(numbers2); 