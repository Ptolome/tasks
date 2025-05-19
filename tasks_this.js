// 'use strict'
// function whatIsThis() {
//     console.log(this);
//   }
  
//   whatIsThis(); // Что будет выведено?  Почему?
//   // global

  // const myObject = {
  //   name: "My Object",
  //   showThis: function() {
  //     console.log(this);
  //   }
  // };
  
  // myObject.showThis(); // Что будет выведено?  Почему?
  // whole object

  // const outerObject = {
  //   name: "Outer",
  //   innerObject: {
  //     name: "Inner",
  //     showThis: function() {
  //       console.log(this);
  //     }
  //   }
  // };
  
  // outerObject.innerObject.showThis(); // Что будет выведено? Почему?
  // outerObject.innerObject.showThis.call(outerObject)
  //innerObject

  // function greet() {
  //   console.log(`Hello, my name is ${this.name}`);
  // }
  
  // const person = { name: "Alice" };
  // greet()//Hello, my name is undefined
  // greet.call(person); // Что будет выведено?  Почему? Hello, my name is Alice

//   function greetWithArgs(greeting, punctuation) {
//     console.log(`${greeting}, my name is ${this.name}${punctuation}`);
//   }
  
//   const person = { name: "Bob" };
  
//  greetWithArgs.apply(person, ["Hi", "!"]); // Что будет выведено?  Почему? Hi my name is Bob!
  


//  function describe() {
//   console.log(`This is ${this.type} and its color is ${this.color}`);
// }

// const car = { type: "Car", color: "red" };

// const describeCar = describe.bind(car);
// describeCar(); // Что будет выведено?  Почему?
// describe.call({type:'Alex', color:"green"}) //?
// describeCar.call({type:'Alex', color:"green"})//?


// function Animal(name) {
//   this.name = name;
//   this.sayName = function() {
//     console.log(`My name is ${this.name}`);
//   };
// }

// const dog = new Animal("Buddy");
// dog.sayName(); // Что будет выведено?  Почему?

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const person = new Person("Charlie");
// person.greet(); // Что будет выведено?  Почему?
// const myObject = {
//   name: "My Object",
//     showThis: () => {
//     console.log(this);
//   }
// };

// myObject.showThis(); // Что будет выведено? Почему?

// const myObject = {
//   name: "My Object",
//   showThis: function() {
//     const arrowFunction = () => {
//       console.log(this);
//     };
//     arrowFunction();
//   }
// };

// myObject.showThis(); // Что будет выведено?  Почему?

// const myObject = {
//   name: "My Object",
//   delayedLog: function() {
//     setTimeout(function() {
//       console.log(this.name);
//     }, 1000);
//   }
// };


// myObject.delayedLog(); // Что будет выведено? Почему?

// const myObject = {
//   name: "My Object",
//   delayedLog: function() {
//     setTimeout(function() {
//       console.log(this.name);
//     }.bind(this), 1000);
//   }
// };

// myObject.delayedLog(); // Что будет выведено?  Почему?

inline

const myObject = {
  name: "My Object",
  delayedLog: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

myObject.delayedLog(); // Что будет выведено?  Почему?
.напиши фнкцию которая выдаст ошибку 
function withTimeout(promise, timeout) {
  return Promise.race([
   promise,
   new Promise((_, reject) =>
     setTimeout(() => reject(new Error('Timeout')), timeout)
   )
 ]);

}

const myPromise = new Promise((resolve) => {
 setTimeout(() => resolve("Success!"), 2000);
});

withTimeout(myPromise, 1000)
 .then(result => console.log(result))
 .catch(error => console.error(error)); // Выведет "Error: Timeout"

withTimeout(myPromise, 3000)
 .then(result => console.log(result)) // Выведет "Success!"
 .catch(error => console.error(error));

 Создайте функцию mapArray, которая принимает массив любого типа и функцию преобразования fn. 
Функция должна возвращать новый массив, где каждый элемент преобразован с помощью переданной функции. 
Укажите типы для входного массива, функции преобразования и возвращаемого массива.

function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}


enum Colors {
  white = '#fff',
  black = '#000'
};

type AvailableColors = keyof typeof Colors;  // "white" | "black"
Типизируй функцию так что бы не было ошибки типизации и any

function getLength<T extends { length: number }>(obj: T) {
  return obj.length
};


getLength([])

getLength(42)

getLength('42')
