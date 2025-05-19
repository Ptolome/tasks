// const proises=[new Promise().resolve(),new Promise(), new Promise()]
// function MyPromiseAll(promises) {
//      new Promise()
// }

// task 1
// const obj = {
//   a: 3,
//   b: "test",
//   c: {
//     inner: 25,
//   },
//   d: [1, 2, 3],
// };

// const getSum = (obj) => {
//   let sum = 0;
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       sum += getSum(obj[key]);
//     } else {
//       if (typeof obj[key] === "number") {
//         sum += obj[key];
//       }
//     }
//   }
//   return sum;
// };
// console.log(getSum(obj));

// task2
// Написать функцию processProducts, которая возвращает массив из 3 строк,
//  описывающих самые дорогие товары по убыванию цены.
// Товары из этой выборки также не должны относиться к категории Stationery:
// const products = [
//   { name: "Laptop", category: "Electronics", price: 1500 },
//   { name: "Pen", category: "Stationery", price: 2 },
//   { name: "Smartphone", category: "Electronics", price: 800 },
//   { name: "Notebook", category: "Stationery", price: 550 },
//   { name: "TV", category: "Electronics", price: 400 },
//   { name: "Bag", category: "Accessories", price: 30 },
// ];
// const processProducts = (products) => {
//   const result = [];
//   products.forEach((element) => {
//     if (element.category !== "Stationery") {
//       result.push(element);
//     }
//   });

//   return result
//     .sort((a, b) => {
//       a.price - b.price;
//     })
//     .slice(0, 3);
// };
// console.log(processProducts(products)); // ["Laptop: $1500", "Smartphone: $800", "TV: $400"])

// task3 Реализуйте функцию customMap(array, callback), которая имитирует поведение метода массива .map().
//  Функция должна принимать массив и колбэк функцию, которая применяется к каждому элементу массива,
//  результаты выполнения колбэк функции формируют новый массив.
// function customMap(array, callback) {
//   const result = [];
//   for (let item of array) {
//     result.push(callback(item));
//   }
//   return result;
// }
// Array.prototype.customMap1= function  (callback){
//   const incomArr = this;
//   const result = [];
//   incomArr.forEach((item) => {
//     result.push(callback(item));
//   });
//   return result
// };
// // Пример использования
// const numbers = [1, 2, 3, 4];
// const doubled = customMap(numbers, (num) => num * 2);
// console.log(doubled); // [2, 4, 6, 8]

// // Дополнительное задание: нужно добавить возможность вызывать customMap на любом массиве так же, как и обычный .map() (т.е. как метод массива)
// const anotherDoubled = [1, 2, 3, 4].customMap1((n) => n * 2);
// console.log(anotherDoubled);

// task 5
// Написать функцию get(obj, path), которая возвращает значение по указанному пути в объекте.
//  Если путь не существует, функция должна возвращать undefined.

function get(obj, path) {
  const pathArray = path.split(".");
  let pathNow = obj;
  for (let key of pathArray) {
    pathNow = pathNow[key];
  }
  return pathNow;
}
const obj = {
  a: {
    b: {
      c: "d",
    },
  },
};

console.log(get(obj, "a.b.c")); // d


// task 6
// Написать функцию compose, реализующую композицию функций:
//  на вход подается неограниченное число функций, на выходе получаем функцию,
//  которая выполняет над аргументом изначально переданные функции в том же порядке.

// example 1

function compose() {
  // 
}

const add2 = x => x + 2;
const composition = compose(add2, Math.sqrt); // Math.sqrt(add2(x))

composition(2); // => 2

// example 2
const dec = x => x - 1;
const pow2 = x => x**2;

compose(dec, pow2)(2); // => 1
compose(pow2, dec)(2); // => 3


