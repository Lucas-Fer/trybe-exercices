// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .

// OBS: Não entendi ao certo o que a questão queria
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle); // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// vou receber um array e reduzir em um número, este número é o resultado das somas;
const summ = (...array) => array.reduce((acc, curr) => acc + curr, 0);
console.log("Questão 3");
console.log(summ(1, 2));

// 3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

const alex = {
  name: "Alex",
  age: 26,
  likes: ["fly fishing"],
  nationality: "Australian",
};

const gunnar = {
  name: "Gunnar",
  age: 30,
  likes: ["hiking", "scuba diving", "taking pictures"],
  nationality: "Icelandic",
};

// complete a assinatura da função abaixo
const personLikes = (object) =>
  `${object.name} is ${object.age} years old and likes ${object.likes.join(
    ", "
  )} .`;

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian",
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian",
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian",
  },
];

// escreva filterPeople abaixo
const filterPeople = people.filter(
  ({ nationality, bornIn }) =>
    bornIn >= 1900 && bornIn < 2001 && nationality === "Australian"
);
console.log(filterPeople);

// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

const myList = [1, 2, 3];

// escreva swap abaixo
// função recebe o parascreva shipLength abaixometro e já transforma em um array [] e depois ordena
const swap = ([a, b, c]) => [c, b, a];
console.log("Questão 5: ");
// chamar a função para retornar
console.log(swap(myList));

// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro: Dica: use array destructuring e abbreviation object literal .

const palio = ["Palio", "Fiat", 2019];
const shelbyCobra = ["Shelby Cobra", "Ford", 1963];
const chiron = ["Chiron", "Bugatti", 2016];

console.log(palio, shelbyCobra, chiron);
const newObjectCar = ([carro1, carro2, carro3]) => ({ carro1, carro2, carro3 });

console.log("Questão 6");
console.log(newObjectCar([palio, shelbyCobra, chiron]));

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
const ships = [
  {
    name: "Titanic",
    length: 269.1,
    measurementUnit: "meters",
  },
  {
    name: "Queen Mary 2",
    length: 1132,
    measurementUnit: "feet",
  },
  {
    name: "Yamato",
    length: 256,
    measurementUnit: "meters",
  },
];
// retirado do gabarito
const shipLength = ({ name, length, measurementUnit }) =>
  `${name} is ${length} ${measurementUnit} long`;

console.log(shipLength(ships[0]));
console.log(shipLength(ships[1]));
console.log(shipLength(ships[2]));

// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// escreva greet abaixo
const greet = (name, message = "Hi") => `${message} ${name}`;
console.log(greet("John")); // 'Hi John'
console.log(greet("John", "Good morning")); // 'Good morning John'
console.log(greet("Isabela", "Oi")); // 'Oi Isabela'
