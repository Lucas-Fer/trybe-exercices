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

/*
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
*/
/*
const num1 = 4;
const num2 = 4;
const num3 = 4;


if((num1 || num2 || num3) % 2 != 0){
  console.log(true);
  console.log("Um dos números é ímpar");
} 

else{
  console.log(false);
  console.log("Todos os números são pares");
}
*/
/*
const custoProduto = 10;
const custoVendaProduto = -20;

let quantidade = 1000;

let custoProdTotal = custoProduto * quantidade;
let custoVendaProdTotal = custoVendaProduto * quantidade;
let imposto = 20; 

if(custoProduto && custoVendaProduto < 0){
  console.log("O valor de entrada não pode ser negativo");
}

else{
  let impostoProd = ((custoProdTotal * imposto) / 100);
  let custoCompraTotal = custoProdTotal + impostoProd;
  
  let lucroTotal = custoVendaProdTotal - custoCompraTotal;
  console.log("O lucro foi de: " + lucroTotal);
  
}*/

let salarioBruto = 3000;

//INSS
if(salarioBruto <= 1556.94){
  INSS = ((salarioBruto * 8) / 100);
  console.log("Sua aliquota de 8% é no valor de: " + INSS);
  salarioBase = salarioBruto - INSS;
  console.log("Seu salário base é de: " + salarioBase);
}

else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  INSS = ((salarioBruto * 9) / 100);
  console.log("Sua aliquota de 9% é no valor de: " + INSS);
  salarioBase = salarioBruto - INSS;
  console.log("Seu salário base é de: " + salarioBase);
}

else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  INSS = ((salarioBruto * 11) / 100);
  console.log("Sua aliquota de 11% é no valor de: " + INSS);
  salarioBase = salarioBruto - INSS;
  console.log("Seu salário base é de: " + salarioBase);
}
else{
  salarioBase = salarioBruto - 570.88;
  console.log("Seu salário base é de " + salarioBase);
}

// IR (Imposto de Renda)
if(salarioBase <= 1903.98){
  console.log("Isento do posto de renda");
}
else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
  console.log("Alíquota de 7,5% e parcela de 142.80");
  salarioLiquido = ((7.5 * salarioBase) / 100) - 142.80;
  console.log("Seu salário líquido é de: " + salarioLiquido);
}

else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
  console.log("Alíquota de 15% e parcela de 354.80");
  salarioLiquido = ((15 * salarioBase) / 100) - 354.80;
  console.log("Seu salário líquido é de: " + salarioLiquido);
}

else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
  console.log("Alíquota de 22.5% e parcela de 636.13");
  salarioLiquido = ((22.5 * salarioBase) / 100) - 636.13;
  console.log("Seu salário líquido é de: " + salarioLiquido);
}

else{
  console.log("Alíquota de 27% e parcela de 869.36");
  salarioLiquido = ((27 * salarioBase) / 100) - 869.36;
  console.log("Seu salário líquido é de: " + salarioLiquido);
}






