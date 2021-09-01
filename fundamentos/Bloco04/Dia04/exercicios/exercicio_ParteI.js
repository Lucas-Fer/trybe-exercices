
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
let info2={
  personagem: 'Tio patinhas',
  origem:'Christmas on Bear Mountain, Dell’s Four Color Comics #178',

  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};


//Exercicio1
console.log("Seja bem-vinda, " + info.personagem + ".");

//Exercicio2
info['recorrente'] = 'Sim';
console.log(info);

//Exercicio3
console.log("Chaves:")
for(let keys in info){
  console.log(keys);
}
//Exercicio4
console.log("");
console.log("Valores:");
for(let value in info){
  
  console.log(info[value]);

}

console.log('');
console.log('Objetos fundidos');
//Exercício5
for (let values in info) {
  if (
    values === 'recorrente' &&
    info[values] === 'Sim' &&
    info2[values] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[values] + ' e ' + info2[values]);
  }
}