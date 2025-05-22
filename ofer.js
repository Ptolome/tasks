/

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

// function get(obj, path) {
//   const pathArray = path.split(".");
//   let pathNow = obj;
//   for (let key of pathArray) {
//     pathNow = pathNow[key];
//   }
//   return pathNow;
// }
// const obj = {
//   a: {
//     b: {
//       c: "d",
//     },
//   },
// };

// console.log(get(obj, "a.b.c")); // d

// // task 6
// // Написать функцию compose, реализующую композицию функций:
// //  на вход подается неограниченное число функций, на выходе получаем функцию,
// //  которая выполняет над аргументом изначально переданные функции в том же порядке.

// // example 1

// function compose(...functions) {
//  return function(arg){
//   for (let item of functions){
//     arg=item(arg)
//   }
//   return arg
//  }
// }

// const add2 = x => x + 2;
// const composition = compose(add2, Math.sqrt); // Math.sqrt(add2(x))

// console.log(composition(2)); // => 2

// // example 2
// const dec = x => x - 1;
// const pow2 = x => x**2;

// console.log(compose(dec, pow2)(2)); // => 1
// console.log(compose(pow2, dec)(2)); // => 3

// task: You mast get 200 using "-", '+', and all numbers in the line. Don't replace digits
// function generateExpressions(digits, target) {
//   const results = [];

//   function allExpressions(expression, index) {
//     if (index === digits.length) {
//       if (eval(expression) === target) {
//         results.push(expression);
//       }
//       return;
//     }
//     const nextDigit = digits[index];
//     const nextIndex = index + 1;

//     allExpressions(expression + nextDigit, nextIndex);
//     allExpressions(expression + "+" + nextDigit, nextIndex);
//     allExpressions(expression + "-" + nextDigit, nextIndex);
//   }

//   allExpressions(digits[0], 1);
//   return results;
// }

// v = 'Привет, как дела?, хорошо, как и надо'
// const colWord=(str, symb )=>{
//   const arr=str.split(' ')
//   let count=0
//   for (let i of arr){
//     if (i.startsWith(symb)){
//       count +=1
//     }

//   }
//   return count
// }
// console.log(colWord(v,'к'))

// const redyPromise = new Promise((resolve) => {
//   console.log("start RedyPromise");
//   setTimeout(() => {
//     resolve("Redy");
//   }, 1000);
// });
// console.log(redyPromise);
// const result = async (promise)=>{
//   await promise.then((data)=>console.log(data))
// }
// result(redyPromise)

// const result= async ()=>{
//    console.log( await Promise.resolve(42));
// }
// result()


// polifils promise.All
// function PromiseAll(arrOfPromises) {
//   return new Promise((resolve, rejefct) => {
//     const resultArr = [];
//     let counterOfresolve = arrOfPromises.length;
//     if (!counterOfresolve) {
//       resolve([])
//     }
//     arrOfPromises.forEach((element, index) => {
//       Promise.resolve(element)
//         .then((data) => {
//           resultArr[index] = data;
//           counterOfresolve -= 1;
//           if (!counterOfresolve) {
//             resolve( resultArr);
//           }
//         })
//         .catch((err) => rejefct(err));
//     });

//   });
// }

// async function PromiseAll(arrayOfPromises) {
//   const result = [];

//   for (let i = 0; i < arrayOfPromises.length; i++) {
//     console.log(i + 1);
//     try {
//       const item = await Promise.resolve(arrayOfPromises[i]);
//       result[i] = item;
//     } catch (e) {
//       throw e;
//     }
//   }
//   return result;
// }
// async function promiseAllSettled(arrayOfPromise) {
//   const result = [];
//   for (let i = 0; i < arrayOfPromise.length; i++) {

//       try {
//          data = await Promise.resolve(arrayOfPromise[i]);
//         result.push({ status: "fulfilled", value: data });
//       } catch (e) {
//         result.push({ status: "rejected", reason: e });
//       }

//   }
//   return result
// }

// const promiseAllSettled = function (arrayOfPromises) {
//   return new Promise((resolve, reject) => {
//     const result = [];
//     let count = 0;
//     for (let i of arrayOfPromises) {
//       Promise.resolve(i)
//         .then((data) => result.push({ status: "fulfilled", value: data }))
//         .catch((e) => result.push({ status: "rejected", reason: e }))
//         .finally(() => {
//           count += 1;
//           if (count === arrayOfPromises.length) {
//             resolve(result);
//           }
//         });
//     }
//   });
// };
// const promiseRace=(arrayOfPromises)=>{
//   return new Promise((resolve, reject)=>{
//     for (let item of arrayOfPromises){
//       Promise.resolve(item)
//       .then((data)=>resolve(data))
//       .catch((err)=>reject(err))

//     }
//   })
// }
// promiseRace([
//   new Promise((resolve) => setTimeout(() => resolve(1), 10000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 20000)), // 2
//   new Promise((resolve, reject) => setTimeout(() => reject(3), 3000)), // 3
//   new Promise((resolve) => setTimeout(() => resolve(4), 4000)), // 3
// ]).then((data) => console.log(data));