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

const arrayOrd = sortoddsAndEvens();
console.log(`Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!". ${arrayOrd}`);