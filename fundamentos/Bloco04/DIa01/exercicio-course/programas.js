/*
EXERCÍCIO 1 - 

const a = 5;
const b = 5;

let adicao = a + b;
console.log("A soma dos valore é de: " + adicao);

let subtracao = a - b;
console.log("A subtração dos valores é de: " + subtracao);

let multiplicacao = a * b;
console.log("A multiplicação dos valores é de: " + multiplicacao);

let divisao = a / b;
console.log("A divisão dos valores é de: " + divisao);

let modulo = a % b;
console.log("O módulo dos valores é de: " + modulo);
*/

/*
EXERCÍCIO 2 -
const primeiroValor = 5;
const segundoValor = 5;

if(primeiroValor > segundoValor){
  console.log("O primeiro valor atribuído é maior que o segundo.");
}

else if(primeiroValor < segundoValor){
  console.log("O primeiro valor é menor que o segundo.");
}

else{
  console.log("Ambos o valores são os mesmos.");
}
*/
/*
const num1 = 50;
const num2 = 50;
const num3 = 50;

if(num1 > num2 && num1 > num3){
  console.log("O num1 é o maior!");
}

else if(num2 > num1 && num2 > num3){
  console.log("O num2 é o maior!");
}

else if(num3 > num1 && num3 > num2){
  console.log("O num3 é o maior!");
}
else{
  console.log("Os 3 valore são equivalentes!");
}*/
/*
const valor = 0;

if(valor > 0){
  console.log("positive");
}

else if(valor < 0){
  console.log("negative");
}

else{
  console.log("zero");
}*/

/*
const primeiroAngulo = 60;
const segundoAngulo = 60;
const terceiroAngulo = 50;

let angulosInternos = 180;
let somaAngulosInternos = primeiroAngulo + segundoAngulo + terceiroAngulo;

if(primeiroAngulo && segundoAngulo && terceiroAngulo < 0){
  console.log("Não pode valor negativo");
}
else if(somaAngulosInternos == angulosInternos){
  console.log(true);
}

else{
    console.log(false);

}*/

/*
let pecaXadrez = "rEI";

//imprime o valor em minúsculo
console.log(pecaXadrez.toLowerCase());

//define que a variável pecaXadrez vai passar a receber o valor da pecaXadrez em minúsculo.
pecaXadrez = pecaXadrez.toLowerCase();

//aqui já vai ta recebendo em minúsculo
switch(pecaXadrez){
  case 'rainha':
    console.log("Movimento livre no tabuleiro");
    break;

  case 'rei':
    console.log("Movimenta livre, apenas uma casa");
    break;

  case 'cavalo':
    console.log("Movimenta em L");
    break;

  case 'bispo':
    console.log(
      "Movimenta diagonal");
    break;
  case 'peão':
    console.log("Movimenta uma casa");
    break;

  case 'torre':
    console.log("Movimenta reto");
    break;

  default:
    console.log("Parâmetros incorretos");
}*/

/*
let nota = 101;

if(nota >= 90 && nota <= 100){
  nota = 'A';
  console.log("Parabéns, sua nota foi: " + nota);
}

else if (nota >= 80 && nota <90){
  nota = 'B';
  console.log("Parabéns, sua nota foi: " + nota);
}

else if (nota >= 70 && nota < 80){
  nota = 'C';
  console.log("Parabéns, sua nota foi: " + nota);
}

else if (nota >= 60 && nota < 70){
  nota = 'D';
  console.log("Que pena, sua nota foi: " + nota);
}

else if (nota >= 50 && nota < 60){
  nota = 'E';
  console.log("Que pena, sua nota foi: " + nota);
}

else if (nota >= 0 && nota < 50){
  nota = 'F';
  console.log("Que pena, sua nota foi: " + nota);
}

else{
  console.log("Parâmetro inválido");
}*/


const num1 = 7;
const num2 = 7;
const num3 = 7;


if((num1 || num2 || num3) % 2 === 0){
  console.log(true);
  console.log("Um dos números é par");
} 

else{
  console.log(false);
  console.log("Todos os números são ímpar");
}





