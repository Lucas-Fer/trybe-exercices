let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

soma = 0;

for(contador = 0; contador < numbers.length; contador += 1){
  //aqui será armazenado a soma
  soma = soma + numbers[contador];

}

  mediaAritmetica = soma/contador;
  console.log("A soma é de: " + soma);
  console.log("A média aritmética é de: " + mediaAritmetica);

  if(mediaAritmetica > 20){
    console.log("Valor maior que 20");
  }

  else{
    console.log("Valor menor ou igual a 20");
  }


