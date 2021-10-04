// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 -/ Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo: // Ao chamar a função doingThings:

// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!



const wakeUp = () => 'Acordando!';
const breakfast = () => 'Bora tomar café!';
const sleep = () => 'Partiu dormir!';

const doingThings = (func1, func2, func3) => {
  console.log(func1());
  console.log(func2());
  console.log(func3());
}

doingThings(wakeUp, breakfast, sleep);