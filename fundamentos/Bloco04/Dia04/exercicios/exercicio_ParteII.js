//criar a função para receber string e retornar true se for palindromo
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
console.log(verificaPalindrome("ararasa"));