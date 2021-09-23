 const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope}ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortoddsAndEvens = () => {
 
  return oddsAndEvens.sort((a,b) => (a-b));
}

// Parte II - Questão 1
const arrayOrd = sortoddsAndEvens();
console.log(`Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!". ${arrayOrd}`);


const factorialNumber = (number) => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result = result * index;
  }

  return result;
}

console.log(factorialNumber(4));

// função em uma linha
// o number é maior que 1? sim então numero * o anterior (no caso de 4 é 3)  se não apenas retorna :1
const factorialNumber2 = (number) => number > 1? number * factorialNumber2(number - 1): 1;
console.log(factorialNumber2(4));
// -------------------------------------------------------------------------------------/

//Parte II - Questão 2

const biggerWord = (string) => {
  // separar as strings
  let arrayString = string.split(" ");
  // armazenar a string maior
  let resultado = '';
  // contador com a maior palavra
  let maiorPalavra = 0;

  for (const word of arrayString) {
    if (word.length > maiorPalavra ) {
      maiorPalavra = word.length;
      resultado = word;
    }
  }
 return resultado;
} 

console.log(biggerWord("Antssssssônio foi no banheiro e não sabemos o que aconteceu"));

//função em uma linha

const biggerWord2 = (string) => string.split(' ').sort((a,b) => b.length - a.length)[0];
console.log(biggerWord2("Antônio foi no banheiro e não sabemos o que aconteceu"));
//---------------------------------------------------------------------------------------/


//Questão 3 feita no arquivo index.html

// Parte II - Questão 4

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];
// resposta diretamente do gabarito no Bloco, pois ainda não entendi a questão
function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));
// ----------------------------------------------------------/