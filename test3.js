// // Срез Евгения (экзаменатор Дмитрий)
// function task1() {
//     const a = {};
//     const b = { key: "b" };
//     const c = { key: "c" };
  
//     a[b] = 123;
//     a[c] = 456;
  
//     console.log(a[b]); 



// 456 т.к. ключ b и c преобразовываются в "[object Object]" и значение 123 перезаписывается на 456
//   }
  
//   function task2() {
//     function Car() {
//       this.make = "Lamborghini";
//       return { make: "Mozeratti" }; //возвращаем новый объект, вместо нового экземпляра!!!
//     }
//     const myCar = new Car();
//     console.log(myCar.make); // "Mozeratti" т.к. вернули объект, то переменная myCar ссылается на объект { make: "Mozeratti" }
//   }
// task2()
  // function task3() {
  //   const randomValue = 30;
  //   function getInfo() {
  //     console.log(typeof randomValue); //string, т.к. hoisting
  //     const randomValue = "John Smith";
  //   }
  //   getInfo();
  // }
  // task3()
  // function task4() {
  //   const str = new String(42);
  //   console.log(typeof str); //object
  // }
  
  // function task5() {
  //   const obj = {
  //     x: 42,
  //   };
  
  //   const obj2 = Object.create(obj);
  //   console.log(obj2);
  //   delete obj2.x;
  //   console.log(obj2.x); // 42, т.к. значение возьмет из прототипа obj. Если бы delete obj.x - то был бы undefined
  // }
  // task5()
  // function task6() {
  //   async function getData() {
  //     return await Promise.resolve("Я сделал это!"); //возвращаем промис
  //   }
  //   const data = getData();
  //   console.log(data); // Promise { <pending> }
  
  //   //Вот как можно исправить код, чтобы он работал так, как ожидается:
  //   //1 вариант:
  //   async function main() {
  //     const data = await getData(); // Ждем разрешения промиса
  //     console.log(data); // Теперь выведет "Я сделал это!"
  //   }
  
  //   main(); // Запускаем асинхронную функцию
  
  //   //2 вариант:
  //   getData().then((data) => {
  //     console.log(data); // Выведет "Я сделал это!"
  //   });
  // }
  
//  ( function task7() {
//       function foo() {
//           return function bar() {
//             console.log(this); //{ x: 10 } - внутри bar, this будет ссылаться на объект { x: 10 }
//             return () => console.log(this); //{ x: 10 } - this в стрелочной функции будет равен this из bar, что указывает на объект { x: 10 },
//             //т.к.в стрелочных функциях значение this захватывается из окружающего контекста
//           };
//       }
  
//     const baz = foo().call({ x: 10 }); //передаем объект в bar()
//     baz.call({ y: 20 }); //Здесь мы вызываем baz (которая на самом деле является стрелочной функцией, возвращенной из bar) с помощью call,
//     //передавая объект { y: 20 }. Но поскольку baz - это стрелочная функция, значение this внутри нее не меняется и продолжает указывать на объект { x: 10 }, захваченный из bar.
//   })()
  
  // function task8() {
  //   const do_something = () =>
  //     new Promise((resolve) => {
  //       setTimeout(() => resolve(10), 1000);
  //     });
  
  //   const do_something_else = () =>
  //     new Promise((resolve) => {
  //       setTimeout(() => resolve(20), 2000);
  //     });
  
  //   const final_handler = (value) => {
  //     console.log(value);
  //   };
  
  //   do_something()
  //     .then((value) => {
  //       console.log(value); // 10
  //       do_something_else(); // т.к. эта функция ничего не возвращает, чтобы она вернула 20 надо написать перед ней return
  //     })
  //     .then(final_handler); // undefined
  // }
  
  // function task9() {
  //   const test = new Array(3).fill([0, 0, 0]); // создаётся массив test, состоящий из трёх ссылок на один и тот же массив [0, 0, 0], из-за использования метода fill
  //   test[1][0] = 1; //изменяет первый элемент второго массива на 1. Однако поскольку все три элемента массива test ссылаются на один и тот же массив, изменение отобразится во всех элементах
  //   console.log(test); //[[1, 0, 0], [1, 0, 0], [1, 0, 0]];
  // }
  
  //Срез Станиславы (экзаменатор Алексей Пименов)
  
  // function task10() {
  //   let foo = {
  //     bar: 1,
  //   };
  
  //   const baz = foo;
  
  //   foo.bar = 2;
  
  //   foo = {
  //     //Переназначение переменной foo
  //     bar: 3, //создаем новый объект и присваиваем его переменной foo, это не меняет объект, на который ссылается baz
  //   };
  
  //   console.log(baz.bar); //2 т.к. baz продолжает ссылаться на исходный объект, который ранее имел значение bar, равное 2
  // }
  
  // function task11() {
  //   // преобразование типов
  //   console.log(NaN + 1); //NaN кода добавляем любое число к NaN, результат остается NaN.
  //   console.log(NaN + "o"); //NaNo
  //   console.log(undefined + 1); //NaN undefined преобразуется в NaN при арифметических операциях, поэтому undefined + 1
  //   console.log(undefined - 1); //NaN аналогично NaN - 1
  //   console.log(null + 1); //1 null в числовом контексте преобразуется в 0
  //   console.log(null / 5); //0 аналогично 0/5
  //   console.log(5 / undefined); //NaN undefined преобразуется в NaN при арифметических операциях 5/NaN
  //   console.log(-5 / null); //-Infinity null преобразуется в 0, и деление на 0 возвращает Infinity
  //   console.log({} + {}); //[object Object][object Object]  При попытке сложить два объекта, JavaScript автоматически вызывает метод toString() для каждого из объектов. Результатом будет строка, представляющая каждый объект, что приводит к конкатенации "[object Object]" + "[object Object]".
  //   console.log(+{}); //NaN Объект преобразуется в строку, а строка преобразуется в число: +"[object Object]". Поскольку это не является числом, JavaScript возвращает NaN
  //   // == и ===
  //   console.log(!!"false" == !!"true"); //true  true == true
  //   console.log(null == ""); //false, т.к. null равен только undefined и null
  //   console.log(true == 1); //true  1 == 1
  //   console.log(false == 0); //true  0 == 0
  //   console.log(false == ""); //true  0 == 0
  //   console.log([] == ![]); // true пустой массив является истинным значением, поэтому ![] вернет false, пустой массив приведется к пустой строке, т.е. "" == false
  //   console.log({} == !{}); //false пустой объект также считается истинным, поэтому !{} это даст false. Объект при приведении к примитивному типу преобразуется в строку, поэтому "[object Object]" == false
  // }
  
  // (function task12() {
  //   var a = "hello";
  
  //   function b() {
  //     if (false) {
  //       var a = "world"; //всплывет
  //     } else {
  //       var b = "man";
  //     }
  //     console.log(a); //undefined
  //     console.log(b); //man
  //   }
  //   b();
  // })()
  
  // (function task13() {
  //   const obj2 = {
  //     x: "yandex",
  //     a: function f() {
  //       console.log(this.x); //yandex
  //     },
  //     b: () => {
  //       console.log("arrow", this.x); //"arrow" undefined
  //     },
  //   };
  
  //   obj2.a();
  //   obj2.b();
  // })()
  
//   function task14() {
  //   Promise.reject("a")
  //     .catch((p) => p + "b")
  //     .catch((p) => p + "c")
  //     .then((p) => p + "d")
  //     .finally((p) => p + "e")
  //     .then(console.log(p)); //abd
  // }
  
  // function task15() {}
  
//   //срез Руслана (экзаменатор Алексей Тетерин)
  
//   function task16() {
    // console.log(18 + 2 + "number" + 10); //20number10
    // console.log("true" == true); //false, т.к. NaN == 1
    // console.log(!!"false" == Boolean("true")); //true  true == true
    // console.log(null + [] + 1); //null1
    // console.log([0, 1] == [0, 1]); //false
    // console.log(0 || ( undefined && null)); //undefined
    // console.log(10n / 5n); //2n
    // console.log(10n / "5n"); //TypeError Строка "5n" не может быть правильно преобразована в BigInt, и получится ошибка
    // console.log(10n / 5); // TypeError Смешивание типов
    // console.log(!!Symbol()); //true
    // console.log(Number("\n")); //0 "\n"- символ перевода на другую строку, он отбрасывается и остается Number("")
    // console.log(Number(" 12s ")); //NaN
//   }
  
  // // function task17() {
  //   var double = 77;
  //   function double(num) {
  //     //функции всплывают над объявлением переменных, но не над их значениями
  //     return num * 2;
  //   }
  //   console.log(typeof double); //number
  //   var x = 10;
  //   function foo() {
  //     console.log(x); //undefined
  //     return 20;
  //     var x = 30;
  //   }
  //   foo();
  // }
  
//   //мой срез (эзаменатор Альберт Фабристов)
  
//   function task18() {
//     console.log("hamburgers" - "s"); //NaN
//     console.log("1" - "3"); //-2
//     console.log(3n / 2n); //1.5n
//     console.log(0.1 + 0.3); //0.30000000000000004
//     console.log("02" + null); //02null
//     console.log(2 + null); //2
//     console.log(2 + undefined); //NaN
//     console.log(0 == null); //false
//     console.log(null >= 0); //true
//     console.log([1] + null); //1null
//     console.log(null == undefined); //true
//     console.log(NaN === NaN); //false
//     console.log(1 || null || 2); //1
//     console.log((1 && false) || 3); //3
//   }
  
// (  function task19() {
//     let bunny = {
//                 lovesCarrots: true,
//                 f: function () {
//                   return this.lovesCarrots;
//                 },
//                 t: () => {
//                   return this.lovesCarrots;
//                 },
//                 b: function () {
//                   return (() => this.lovesCarrots)();
//                 },
//                 };
  
//     console.log(bunny.f()); //true
//     console.log(bunny.t()); //undefined
//     console.log(bunny.b()); //true??? мнения разделились: экзаменатор и GPT за true, браузер и VC за undefined
//   })()
  
  // function task20() {
  //   console.log({}.prototype === {}.__proto__); //false
  //   console.log(anyFunc.__proto__ === Function.prototype); //true
  //   console.log("text".__proto__ === String.prototype); //true
  // }
  
//   function task21() {
//     setTimeout(() => console.log(4));
  
//     console.log(2);
  
//     new Promise((resolve) => {
//       resolve();
//       console.log(1);
//     }).then(() => {
//       console.log(3);
//     });
  
//     console.log(5);
  
//     // 2 1 5 3 4
//   }
  // function getData(){
  //   return Promise.resolve([
  //     ()=>fetch('https://jsonplaceholder.typicode.com/todos/1'),
  //     ()=>fetch('https://jsonplaceholder.typicode.com/todos/2'),
  //     ()=>fetch('https://jsonplaceholder.typicode.com/todos/3')
  //   ])
  // // }
  // getData().then((result)=>{ const listOfProm=result.map((i)=>i())
  //   return listOfProm


  // }).then((res)=>Promise.all(res))
  // .then((resp)=>Promise.all(resp.map((i)=>i.json())))
  // .then((r)=>console.log(r))



  // /////////////////////////////////////
  // // function getData() {
  //   return Promise.resolve([
  //     () => fetch('https://jsonplaceholder.typicode.com/todos/1'),
  //     () => fetch('https://jsonplaceholder.typicode.com/todos/2'),
  //     () => fetch('https://jsonplaceholder.typicode.com/todos/3')
  //   ]);
  // }
  
  // getData().then((fetchFunctions) => {
  //   // Вызов каждой функции для получения промиса 
  //   const promises = fetchFunctions.map(fetchFn => fetchFn());
  
  //   // Используем Promise.all для ожидания завершения всех промисов 
  //   return Promise.all(promises);
  // }).then((responses) => {
  //   // Обрабатываем каждый ответ, преобразуя его в JSON 
  //   return Promise.all(responses.map(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   }));
  // }).then((data) => {
  //   // Работаем с полученными данными 
  //   console.log(data);
  // }).catch((error) => {
  //   // Обрабатываем первую возникшую ошибку
  //   console.error('Ошибка:', error);
  // });

  // fetch( 'https://jsonplaceholder.typicode.com/todos/1').then((res)=>res.json()).then((res)=>console.log(res))



  // .........////

  // import React, {useEfect,useState} from 'react'

  // const ListItemComponent =({handleClickItem,item})=>{
  //   return <div onClick={()=>handleClickItem(item)}>List Item</div>
  // }

  // const ListComponent = ({list,handleClickItem})=>{
  //   return (
  //     <>
  //     {list.map((item)=>(
  //       <ListItemComponent handleClickItem={handleClickItem} key={item} item={item}/>
  //     ))}
  //     </>
  //   )
  // }

  // export const App=()=>{
  //   const [count, setCount]=useState(0)

  //   const handleClickButton=()=>{
  //     setCount(count +1)
  //   }
  //   const handleClickItem = item =>{
  //     console.log(item);
  //   }
  //   return (
  //     <div>
  //       <button  onClick={handleClickButton}>button</button>
  //       <div>{count}</div>
  //       <ListComponent list={[1,2,3,4,5,6,7,8,9]} handleClickItem={handleClickItem} />
  //     </div>
  //   )
  // }
  // Использование React.memo: Мы обернули компонент ListItem в React.memo, чтобы он рендерился повторно только в случае изменения его пропсов (handleClickItem или item). Это может улучшить производительность, особенно если список длинный и рендеринг каждого элемента списка может быть затратным.

  // Совместное использование useMemo и React.memo: Теперь мы используем useMemo для мемоизации списка и React.memo для мемоизации отдельных элементов списка, что помогает избежать ненужных рендеров и делает приложение более эффективным.


//   import React, { useState, useMemo } from 'react';

// const ListItem = React.memo(({ handleClickItem, item }) => (
//   <div onClick={() => handleClickItem(item)}>List Item {item}</div>
// ));

// const List = ({ list, handleClickItem }) => (
//   <>
//     {list.map((item) => (
//       <ListItem handleClickItem={handleClickItem} key={item} item={item} />
//     ))}
//   </>
// );

// export const App = () => {
//   const [count, setCount] = useState(0);

//   const handleClickButton = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const handleClickItem = (item) => {
//     console.log(item);
//   };

//   const list = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9], []);

//   return (
//     <div>
//       <button onClick={handleClickButton}>button</button>
//       <div>{count}</div>
//       <List list={list} handleClickItem={handleClickItem} />
//     </div>
//   );
// };

// import {useState} from 'react'
// const Component =()=>{
//   const [input,setInput]=useState('Enter your word');
//   const handlerInput=(e)=>{
//     setInput(e.target.value)
//   }
//   return (<>
//  <input value={input} onChange={handlerInput}/>
//  <button>submit</button>
//   </>
//   )
// }

// import {useState,useRef} from 'react'
// const Component1 =()=>{
//   const ref = useRef()
 
//   return (<>
//  <input ref={ref}/>
//  <button onClick={()=>console.log(ref.current.value)}>submit</button>
//   </>
//   )
// }