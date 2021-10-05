// Sessão ForEach
// Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);
// Fim da sessão ForEach
// -------------------------------------------------------------------------------------------------------------

// Sessão Find
// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((indice) => indice % 3 === 0 && indice % 5 === 0);

console.log(findDivisibleBy3And5)
// -------------------------------------------------------------------------------------------------------------

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((array) => array.length === 5);
console.log(findNameWithFiveLetters);
// -------------------------------------------------------------------------------------------------------------


// Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = musicas.find((array) => array.id === '31031685');
console.log(findMusic);
//Fim da sessão Find
// -------------------------------------------------------------------------------------------------------------

// Sessão Some/Every

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => names.some((value) => value === name);

console.log(hasName(names, 'Ana'))
// -------------------------------------------------------------------------------------------------------------

// Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 17 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => people.every((value) => value.age >= minimumAge)

console.log(verifyAges(people, 18));