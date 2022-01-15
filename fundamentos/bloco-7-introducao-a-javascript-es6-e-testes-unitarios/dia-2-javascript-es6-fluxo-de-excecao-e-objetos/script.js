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
  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const address = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${address}, ${number}, AP: ${apartment}`);

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  const newCostumer = order.name = 'Luiz Silva';
  const pizzaFlavor = Object.keys(order.order.pizza);
  const soda = order.order.drinks.coke.type;
  const newPrice = order.payment.total = 50;

  console.log(`Olá ${newCostumer}, o total do seu pedido de ${pizzaFlavor} e ${soda} é R$ ${newPrice},00.`)
}

orderModifier(order);

// PARTE III

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

// Exercicio 1
const addShift = (object, key, value) => {
  object[key] = value;

}
addShift(lesson2, 'turno', 'noite');
console.log(lesson2)

// Exeercicio 2
const listKeys = (object) => {
  return Object.keys(object);
}
console.log(listKeys(lesson1));

// Exercicio 3
const objectLength = (object) => {
  return Object.keys(object).length;
}
console.log(objectLength(lesson2))

//Exercício 4
const objectValues = (object) => {
  return Object.values(object);
}
console.log(objectValues(lesson3))