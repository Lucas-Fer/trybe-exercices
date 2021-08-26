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

}

