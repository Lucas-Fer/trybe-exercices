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
      birthYear: 1890,
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

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const authorBornIn1947 = books.find((book) => book.author.birthYear === 1947)
  .author.name;
console.log(authorBornIn1947);

// 2 - Retorne o nome do livro de menor nome.
function nameSamll() {
  let maiorString;
  books.forEach((book) => {
    if (!maiorString || book.name.length < maiorString.length) {
      maiorString = book.name;
    }
  });
  return maiorString;
}
console.log(nameSamll());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const firstBookBigger = books.find((book) => book.name.length === 26).name;
console.log(firstBookBigger);

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
const sortBooks = books.sort((a, b) => b.releaseYear - a.releaseYear);
console.log(sortBooks);

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const everyCondition = books.every(
  (book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000
);
console.log(everyCondition);

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const someCondition = books.some(
  (book) => book.releaseYear >= 1980 && book.releaseYear < 2000
);
console.log(someCondition);

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const birthYearCondiion = books.every(
  (book) =>
    !books.some(
      (bookCondition) =>
        bookCondition.author.birthYear === book.author.birthYear
    ) && bookCondition.author.name !== book.author.name
);
console.log(birthYearCondiion);
