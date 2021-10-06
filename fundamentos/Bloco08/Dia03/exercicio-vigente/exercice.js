const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// armazeno na constante o objeto mapeado, com nome, genero e nom edo author
const newArrayBooks = books.map((object) => `${object.name} - ${object.genre} - ${object.author.name}`);
console.log('Questão 1');
console.log(newArrayBooks);

// 2- Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

                                                  // para informar que as chaves não tem ligação com a função explícita, devo colocar o parenteses, para informar ao código que desejo um array de objetos 
const arrayAuthorAndName = books.map((object) => ({age: object.releaseYear - object.author.birthYear, name: object.author.name})).sort((a, b) => a.age - b.age);
console.log('Questão 2');
console.log(arrayAuthorAndName);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const arrayFantasyAndFiction = books.filter((object) => object.genre === 'Ficção Científica' || object.genre === 'Fantasia');
console.log('Questão 3');
console.log(arrayFantasyAndFiction);

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

// livro com mais de 60 anos são antes de 1961: 2021 - 60;
const arrayOlderBook = books.filter((book) => book.releaseYear < 1961).sort((a, b) => a.releaseYear - b.releaseYear);
console.log('Questão 4');
console.log(arrayOlderBook);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// FILTRAR todos os generos com ficção OU fantasia. MAPEAR todos nomes dos generos já filtrados. 

const arrayNameAutor = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((bookFiltred) => bookFiltred.author.name);
console.log("Questão 5");
console.log(arrayNameAutor);

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const arrayNameAuthorOld = books.filter((book) => book.releaseYear < 1961).map((bookName) => bookName.name).sort();
console.log("Questão 6");
console.log(arrayNameAuthorOld);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

// encontrar um elemento
// pecorrer o caminho até o nome do autor
// FIND o nome do livro (author.name) e separar todo o valor com o SPlit.
// com a string separada por espaço (' ') filtrar o valor que termina com Ponto. e o length de valor 3 (ou seja, 3 pontos)
const authorWith3DotsOnName = books.find((book) => book.author.name.split(' ').filter((value) => value.endsWith('.')).length === 3).name;
console.log("Questão 7");
console.log(authorWith3DotsOnName);