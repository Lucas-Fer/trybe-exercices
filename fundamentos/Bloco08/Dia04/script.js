const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Dada uma matriz, transforme em um array.
const arrays = [["1", "2", "3"], [true], [4, 5, 6]];
const transformArray = arrays.reduce((acc, current) => acc.concat(current), []);
console.log("Questão 1: ");
console.log(transformArray);

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const reduceNames = books.reduce(
  (acumulator, current) => `${acumulator} ${current.author.name}`,
  "String: "
);

console.log(`Questão 2: ${reduceNames}`);

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

//para saber a idade quando teve o lançamento é pegar o ano do lançamento - ano nascimento
//a media de idade é somar as idades e dividir pela quantidade somada

const lengthBooks = books.length;
const averageAge = books.reduce(
  (acc, book, i, arr) =>
    acc + (book.releaseYear - book.author.birthYear) / Math.round(arr.length),
  0
);

console.log(`Questão 3: ${averageAge}`);

// 4 - Encontre o livro com o maior nome.

// Como acessar o nome? R: Pelo caminho -> "book.name";
// Como o nome é maior que outro? R: Pelo tamanho "(length)" do book;
// Tipo de dado do nome do livro? R: string;
// Consigo utilizar o HoF? R: Sim!!
// O que desejo retornar? R: string com o nome do maior livro;

const expectedResult = {
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  genre: "Fantasia",
  author: {
    name: "George R. R. Martin",
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = books.reduce((acc, curr) =>
  curr.name.length > acc.name.length ? curr : acc
);
console.log("Questão 4");
console.log(longestNamedBook);

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

// reduce para separar o arry em um split('').
// reduce dentro do reduce separado com a condição

console.log("Questão 5");
const containsA = names.reduce(
  (acc, curr) =>
    // soma o contador com cada elemento separado pelo split('')
    acc +
    curr // separa com o split('')
      .split("")
      // outra reduce para aplicar a condição em cada elemento que foi separado
      .reduce(
        (acc2, curr2) => (curr2 === "a" || curr2 === "A" ? acc2 + 1 : acc2),
        0
      ),
  0
);

console.log(containsA);

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

// fumção de soma que vai somar e ser chamada no average
const sum = (acc, indice) => acc + indice;

const newArray = students.reduce((acc, curr, index) => {
  // criar um objeto com o valor atual curr
  const obj = {
    name: curr,
    // reduce para chamar um valor, dividido por 5 já que é a quantidade de notas
    average: grades[index].reduce(sum, 0) / 5,
  };
  // o acumulador inicialmente é [], então vai recebendo o obj
  acc.push(obj);
  return acc;
}, []);
console.log("Questão 6");
console.log(newArray);
