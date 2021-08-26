let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



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


