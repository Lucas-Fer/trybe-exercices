// Desenvolva uma função que receba um array como parâmetro e
// retorne um array com os números pares

let arr = [ 1,2,3,4,5]
let arrayPar = [];
function getEvenNumbers(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      arrayPar.push(array[i]);
    } 
    
  }
  return arrayPar;
}

console.log( getEvenNumbers(arr) ); // [2,4]

// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
]

// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']
let a = [];
function buildCitiesArray(array) {
  for (let i = 0; i < array.length; i += 1) {
    const objectIndex = Object.values(array[i]);
    a +=`${objectIndex}`;
    
  }
  return a;
}
console.log(buildCitiesArray(citiesAndStates));
