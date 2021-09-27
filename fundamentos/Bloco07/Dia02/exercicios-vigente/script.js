const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const rafaelAndrade = order.name;
  const rafaelPhone = order.phoneNumber;
  const rafaelStreet = order.address.street;
  const rafaelStreetNumber = order.address.number;
  const rafaelApartament = order.address.apartment;
  console.log(`Olá ${deliveryPerson}, entrega para: ${rafaelAndrade}, Telefone: ${rafaelPhone}, Endereço: ${rafaelStreet}, N: ${rafaelStreetNumber}, AP: ${rafaelApartament}.`);
}

customerInfo(order);
// Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const luizSilva = order.name = 'Luiz Silva';
  const coca = order.order.drinks.coke.price = 50;
  const keyOfPizzas = Object.keys(order.order.pizza);
  const coquinha = order.order.drinks.coke.type
  console.log(`Olá ${luizSilva}, o total do seu pedido de ${keyOfPizzas} e ${coquinha} é R$ ${coca}`);
}

orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// questao1
const nigthTurn = (object, key, value) => {
  object[key] = value;
};
nigthTurn(lesson2, 'turno', 'noite');
console.log(lesson2);

//qustao2
const keysList = (object) => Object.keys(object);
console.log(keysList(lesson3));

//questao3
const objLength = (object) => Object.keys(object).length;
console.log("Tamanho do objeto: " + objLength(lesson3));

//questão4
const valuesList = (object) => Object.values(object);
console.log('Valores do objeto: ' + valuesList(lesson3));

//questão 5

let allLessons = {

}
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);