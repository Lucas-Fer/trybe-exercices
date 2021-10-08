// // 1 --- Spread Operator
// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ["asas", "asasa", "asas"];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ["asas", "asasasasa", "asass"];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// function quantosParams(...args) {
//   console.log("parâmetros:", args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// const saudacoes = ["Olá"];
// const [ola] = saudacoes;

// console.log(ola); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// let comida = "gato";
// let animal = "água";
// let bebida = "arroz";

// [comidaNew, animalNew, bebidaNew] = [comida, animal, bebida];
// console.log(comidaNew, animalNew, bebidaNew); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// const person = {
//   name: "João",
//   lastName: "Jr",
//   age: 34,
// };

// const { nationality } = person;

const getNationality = ({ firstName, nationality = "Brazil" }) =>
  `${firstName} is ${nationality}`;

const person = {
  firstName: "João",
  lastName: "Jr II",
};

const otherPerson = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian",
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 2) => number * value;

console.log(multiply(8));
