/*//criar a função para receber string e retornar true se for palindromo
// laço de repetição para pecorrer a metade do array
// forma de pecorrer cada letra
// estrutura de condição para comparar as metades
function verificaPalindrome(string) {
  //split '' pecorre cada letra, reverse reverte o array, join junta os elementos
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome("ararasa"));*/
/*
function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4*/
/*
function menorIndice(numbers){
  //pecorrer em um laço de repetição o array de numeros
  //definir uma variavel menorINdice que sera 0

  indiceMenor = 0;
  for(let indice in numbers){
    //como o indiceMenor é 0, então está no primeiro indice
    if(numbers[indiceMenor] > numbers[indice]){
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}
console.log(menorIndice([1,2,-3,6,7]));*/

function biggerWord(strings){
  // usar um laço de repetição for
  // contar a quantidade de caractere com lenght
  //definir que a maior frase é o indice 0 de do array strings para comparar
let maiorFrase = strings[0];
  for(let indice in strings){

    if(maiorFrase.length < strings[indice].length){
      maiorFrase = strings[indice];
    }
  }
  return maiorFrase;
}
console.log(biggerWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));