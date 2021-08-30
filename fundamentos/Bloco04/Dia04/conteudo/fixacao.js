/*let player = {
name: 'Marta',
lastName: 'Silva',
age:34,
medals:{ 
  golden: 2, 
  silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");
console.log("Anos em que " + player.name + " foi campeã de melhor do mundo:");
console.log(player.bestInTheWorld + " < :Sendo a melhor do mundo 6 vezes.");
console.log("");
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");*/
/*
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for(let nome in names){
  console.log("Olá: " + names[nome]);
  console.log("");
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let values in car){
  
  console.log(values, car[values]);
}*/



function som(a,b){
  return a + b;
}
let soma = som(20,10);
console.log(soma);

function sub(a, b) {
  return a - b;
}
let subt = sub(30,10);
console.log(subt)

let subtracao = sub(10,20);
console.log(subtracao);

function div(a, b) {
  return a / b;
}
let divisao = div(10,20);
console.log(divisao);

function multi(a, b) {
  return a * b;
}
let multiplicacao = multi(10,20);
console.log(multiplicacao);

function mod(a, b) {
  return a % b;
}
let modulo = mod(10,20);
console.log(modulo);
