// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// async function dataFetch() {
//     console.log('1');
//     try {
//         const metaResp=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         console.log(3);
//         const data= await metaResp.json()
//         console.log(data);
//     } catch (e) {(e)=> {console.log(e)};
//     }

// }
// dataFetch()

//  Promise, async/await
//  Tascs level Easy
// 1 Создать промис, который через 1 секунду возвращает строку "Готово".
// Используйте setTimeout и Promise.
// 2 Написать async-функцию, которая вызывает предыдущий промис и выводит результат в консоль.
//3 Использовать Promise.resolve для мгновенного создания промиса с числом 42, и вывести это число.

//1
// const response = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Готово");
//   }, 2000);
// });
// //2
// const asFn = async (promise) => {
//   console.log(await promise);
// };
// asFn(response);
// //3
// Promise.resolve(42).then((data) => console.log(data));

// tascs level middle
//4 Написать функцию, которая принимает массив чисел и возвращает промис, который после 2 секунд разрешается суммой этих чисел.
//5 Использовать Promise.all для одновременного ожидания трёх промисов с разным временем задержки, и вывести массив их результатов.
//6 Написать функцию, которая принимает массив URL и загружает данные с каждого URL параллельно, используя fetch. Вернуть массив ответов.
//7 Реализовать функцию timeoutPromise(promise, ms), которая отклоняет промис, если он не завершился за ms миллисекунд.

// 4
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function sumWithDelay(arr) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve(arr.reduce((acc, item) => acc + item, 0))
//     }, 4000)
//   );
// }
// // sumWithDelay(arr).then((data)=>console.log(data));
// (async ()=>console.log(await sumWithDelay(arr)))();

// 5
// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
// ]).then((data) => console.log(data));

// 6
// const urls =['https://www.yandex.ru', 'https://www.google.com', 'https://www.ya.ru']
// const getUrls= async (urls)=>{
//     const promises= urls.map(url=>fetch(url))

//     return await Promise.all(promises)
// }
//  getUrls(urls).then(data=>{
//     data.forEach(item=>console.log(item.status))
//  }).catch(err=>console.log(err));

// //7 Реализовать функцию timeoutPromise(promise, ms), которая отклоняет промис, если он не завершился за ms миллисекунд.
// const timeoutPromise = (promise, ms) => {
//   return new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject('Timeout Error');
//     }, ms);

//     promise
//       .then((result) => {
//          resolve(result);
//         console.log(result);
//       })
//       .catch((error) => {
//         console.error(error);
//         reject(error);
//       });
//   });
// };


//   та же задача но с применением Promice.race
// const timeoutPromise=(promis,ms)=>{
//   return Promise.race([promis,new Promise((resolve)=>{setTimeout(()=>resolve('the time is over'),ms)})])
// }

// timeoutPromise(new Promise((resolve) => setTimeout(() => resolve(2), 3000)), 4000).then((result) => {
//     console.log("Promise resolved:", result);
//   })
//   .catch((error) => {
//     console.error("Promise rejected:", error);
//   });

// Уровень 3 — Продвинутый
// Создать функцию, которая последовательно выполняет массив асинхронных функций (возвращающих промисы),
//  передавая результат одной в следующую.
// Реализовать функцию retry(fn, retries), которая повторяет вызов асинхронной функции fn заданное число раз в случае ошибки,
//  и возвращает результат успешного вызова или ошибку после всех попыток.
// Написать функцию, которая ограничивает количество одновременно выполняющихся промисов из массива (например, не более 3 одновременно).
// Реализовать getState(promise), которая возвращает состояние промиса: "pending", "fulfilled" или "rejected".
//  (Задача из вашего прошлого вопроса.)

var a =5
setTimeout(function timeOut(){
   console.log(1,a);
   a=10
},0)
console.log(2,a);
var p = new Promise(function(resolve,reject){
   console.log(3,a);
   a=25
   resolve()
})
p.then (function(){
   a=15
   console.log(4,a);
})
console.log(5,a);