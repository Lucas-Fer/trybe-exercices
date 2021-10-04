// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const objectName = (name) => {
  // separando o nome, colocando tudo minusculo e colocando o "_"
  const generateEmail = `${name.toLowerCase().split(' ').join('_')}@trybe.com`;
  return object = {
    name,
    generateEmail,
  };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paica'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(objectName));


const numChosen = () => {
  const numberChosen = Math.floor(Math.random() * 5) + 1;
  console.log(`O número escolhido foi: ${numberChosen}`);
  return numberChosen;
}

const sorteio = () => {
  // random pega numero de 0 até 1, para arredondar utilizar o floor
  const numberResult = Math.floor(Math.random() * 5) + 1;
  console.log(`O número sorteado foi: ${numberResult}`);
  return numberResult
} 

const result = (numChosen, sorteio) => numChosen === sorteio? 'Acertou':'errou'; 
console.log("Resultado: " + result(numChosen(), sorteio()));


