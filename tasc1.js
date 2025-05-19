// Неявное приведение:
// С помощью унарного оператора “+”.
// Во время сравнения (>, <, <=, >=, ==, !=)* (But: оператор == не производит неявного преобразования в число, если оба операнда являются строками).
// При использовании арифметических операторов  (-, +, *, /, %); (But: оператор ”+” с двумя операндами не вызывает неявное преобразование к числовому типу, если хотя бы один оператор является строкой.)
// При использовании побитовых операторов  (|, &, ^, ~).

// (*)При применении оператора == к null или undefined преобразования в число не производится. Значение null равно только null или undefined.


// console.log(+"10");   // 10
// console.log(+"1one"); // NaN
// console.log("number" + 15 + 3); // number153
// console.log(15 + 3 + "number"); //18number
// console.log(true + false); //1
// console.log("foo" + "bar"); // foobar
// console.log("foo" || ("100" && 15)); // foo
// console.log("foo" && "bar"); // bar
// console.log("100" ? 15 : 100); // 15
// console.log("false" == false); // false
// console.log("ee" || "www"); // ee
// console.log(null || false); //false  приведет к булеву значению и вернет первое труе
// console.log(null == undefined); // true
// console.log(NaN == NaN); // false
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// console.log(typeof NaN); // number
// console.log("5" + 3); // 53

// console.log(!!""); // ?f
// console.log(!!"Hello"); // ?t
// console.log(!!0); // ?f
// console.log(!!1); //t

// console.log([1, 2] + [3, 4]); // ?
// console.log(null == undefined); // ?t
// console.log(null === undefined); // ?f
// console.log(null > 0); // ?f
// console.log(null >= 0); // ?t
// const obj ={
//     valueOf: () => 42,
//     toString: () => "Hello"
// };
// console.log(obj + 1); // ?43

// console.log(String(obj)); // ?hello

// console.log(+"10");   // 10
// console.log(+"1one"); // NaN
// console.log("number" + 15 + 3); // number153
// console.log(15 + 3 + "number"); //18number
// console.log(true + false); //1
// console.log("foo" + "bar"); // foobar
// console.log("foo" || ("100" && 15)); // foo
// console.log("foo" && "bar"); // bar
// console.log("100" ? 15 : 100); // 15
// console.log("false" == false); // false
// console.log("ee" || "www"); // ee
// console.log(null || false); // false
// console.log(null == undefined); // true
// console.log(NaN == NaN); // false
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// console.log(typeof NaN); // number

// function task3() {
//     const randomValue = 30;
//     function getInfo() {
//       console.log(typeof randomValue); //string, т.к. hoisting но будет ошибка ReferenceError: Cannot access 'randomValue' before initialization
//       const randomValue = "John Smith";
//     }
//     getInfo();
//   }
// task3()

// var a={b:1}
// c= Object.create(a)
// console.log(c.b)//1
// delete c.b
// console.log(c.b)//1
// delete a.b
// console.log(c.b)//undefined
// a.z=2
// console.log(c.z)//2
// c.z=3
// console.log(a.z)//2

// function logger ( ){
//    console.log(this.item);
   
// }
// logger()
// item=10

// const user = {
//     name: 'Bob',
//     foo() {
//       console.log(this.name);
//     },
//     funcFunc() {
//       return function() {
//         console.log('this =', this);
//         console.log(this.name);
//       };
//     },
//     funcArrow() {
//       return () => {
//         console.log('this =', this);
//         console.log(this.name);
//       };
//     },
//     arrowFunc: () => {
//       return function() {
//         console.log('this =', this);
//         console.log(this.name);
//       };
//     },
//     arrowArrow: () => {
//       return () => {
//         console.log('this =', this);
//         console.log(this.name);
//       };
//     },
//   };
  
//   user.foo(); //bob
//   user.funcFunc()(); //{} undefined
//   user.funcArrow()(); //{user} bob
//   user.arrowFunc()(); //{} undefined
//   user.arrowArrow()(); //und  
// Promise.resolve()
//     .then(() => console.log(1))
//     .catch(() => console.log(2))
//     .then(() => console.log(3))
//     .then(() => console.log(4));

// Promise.resolve()
//     .then(() => console.log(5))
//     .then(() => console.log(6))
//     .finally(() => console.log(7))
//     .then(() => console.log(8));
    

// // 1 5 6 3 7 4 8 

// const myPromise = Promise.resolve(Promise.resolve('Promise!'));

// function funcOne() {
//     myPromise
//     .then(res => res)
//     .then(res => console.log(res, 'Результат funcOne'));
//     setTimeout(() => console.log('Timeout 1', 0));
//     console.log('Last line 1');
// }

// async function funcTwo() {
//     const res = await myPromise;
//     console.log(res,'Результат funcTwo');
//     setTimeout(() => console.log('Timeout 2', 0));
//     console.log('Last line 2');
// }

// funcOne();
// funcTwo();


// console.log(1);

// setTimeout(() => console.log(2)); 

// Promise.resolve().then(() => console.log(3)); 

// Promise.resolve().then(() => setTimeout(() => console.log(4)));  

// Promise.resolve(console.log(5)).then(() => console.log(6));

// setTimeout(() => console.log(7));  

// console.log(8);




// import React, { useCallback, useState, useEffect } from "react";

// const url = "https://jsonplaceholder.typicode.com/users/1";

// /** 

//   // Sample Response

//   {

//     id: 1,

//     name: "Leanne Graham",

//     username: "Bret",

//     email: "Sincere@april.biz",

//     phone: "1-770-736-8031 x56442",

//     website: "hildegard.org"

//   }

// **/

// // // вынести в отдельный хук
// function App() {

//     const [userData, setUserData] = React.useState({});
//     useEffect(() => {
//         fetch(url).then((res) => res.json()).then((res) => {
//              setUserData(res)
//         }) 
//         }       
       
//        ,[])

//     return (
//         <div className="App">
//             <h2>User Data</h2>
//             <p>
//                 <strong>Name: </strong>{" "}
//                 {userData.name || "(Need to populate name here)"}

//             </p>
//             <p>
//                 <strong>Website: </strong>
//                 {userData.website || "(Need to populate website here)"}

//             </p>

//             <p>

//                 <strong>Email: </strong>

//                 {userData.email || "(Need to populate email here)"}

//             </p>

//             <p>

//                 <strong>Phone: </strong>

//                 {userData.phone || "(Need to populate phone here)"}

//             </p>

//         </div>

//     );

// }

// export default App;

// import React from 'react';
 
// const PleaseReviewMe = () => {
//     const [count, setCount] = React.useState(1);
//     const [items, setItems] = React.useState([{ id: 1 }]);
 
//     React.useLayoutEffect(() => {
//         document.addEventListener('click', () => {
//             setInterval(() => console.log(count), 1000);
//         });
//     });
 
//     const click = React.useCallback(() => {
//         setCount(count + 1);
//         setItems([...items, { id: count + 1 }]);
//     });
 
//     return (
//         <React.Fragment>
//             Current count: {count}
//             <ul>
//                 {items.map((item) => (
//                     <li>{item.id}</li>
//                 ))}
//             </ul>
//             <button onClick={() => click()}>add one</button>
//         </React.Fragment>
//     );
// };
 
// export default PleaseReviewMe;
 

// import {useState, useEffect, useCallback} from 'react';
 
// export const PleaseReviewMe = () => {
//     const [count, setCount] = useState(1);
//     const [items, setItems] = useState([{ id: 1 }]);
 
//    useEffect(() => {
//         let interval
//         const handler=() => {
//             interval = setInterval(() => console.log(count), 1000);
//         }
//         document.addEventListener('click', handler);
//         return () => {
//           document.removeEventListener('click',handler);
//           if (interval) {
//             clearInterval(interval)
//           }
//         }
//       },[count]
//     )
 
//     const click = () => {
//         setCount(count + 1);
//         setItems([...items, { id: count + 1 }]);
//     };
 
//     return (
//         <>
//             <p>Current count: {count}</p>
//             <ul>
//                 {items.map((item) => (
//                     <li key={item.id}>{item.id}</li>
//                 ))}
//             </ul>
//             <button onClick={click}>add one</button>
//         </>
//     );
// };
// const arrayFromKeys = <T extends Record<string, any>(obj:T, keys: (keyof T)[]) => {
//     const out = [];
//     for (const key of keys) {
//         out.push(obj[key]);
//     }
     
//     return out;
// }
 
// const obj = {
//     a: 1,
//     b: 'B',
//     'c d': null,
// };
 
// // Ошибка
// arrayFromKeys(obj, ['z']);
 
// // Все хорошо, работают подсказки IDE
// // Будет круто, если тип возвращаемого значения сузится до типов значений выбранных ключей
// const result = arrayFromKeys(obj, ['c d', 'a']);
// //    ^?


// // сортировка методом пузырька

// const arr1=[1,3,4,12,1,2,7,4]
// console.log('hl');
// function bubleSort(arr){
//     for (let j=0; j<arr.length;j++){
//     for (let i =0; i < arr.length-j; i++){
       
//         let rigthItem=arr[i+1]
//         let leftItem=arr[i]
//         if (rigthItem<leftItem){
//             arr[i]=rigthItem
//             arr[i+1]=leftItem
            
//         }
//         console.log(arr);

//     }
// }
    
// }

// bubleSort(arr1)


// let message

// function foo(isLoading) {
//     message = 'Hello'
//     isLoading = true

//     function bar() {
//         console.log(message)
//         console.log(isLoading)
//     }

//     return bar
// }
// let isLoading = false

// const getParams = foo(isLoading)

// isLoading = undefined
// message = 'By by'

// getParams()//by by true

// var userService = {
//     currentFilter: 'active',
//     users: [
//         { name: 'Alex', status: 'active' },
//         { name: 'Mike', status: 'deleted' },
//     ],
//     getFilteredUsers: function () {

//         return this.users.filter( function(user){
     
//                  return user.status === this.currentFilter
//         }.bind(this))
//     },
// }

// console.log(userService.getFilteredUsers())// 
// var a = {
//     firstName: 'Alex',
//     lastName: 'Ivanov',
//     sayName: function () {
//         console.log(this.firstName)
//     },
//     sayLastName: () => {
//         console.log(this.lastName)
//     },
// }

// a.sayName()//ALex

// var b = a.sayName

// b()//undefined

// a.sayName.bind({ firstName: 'Boris' })()//Boris

// a.sayName()//Borise

// a.sayLastName() //undefined


// var f = function() {
//     this.x = 5;// window.x=5
//     (function() {
//         this.x = 3;//window.x=3
//     })();
//     console.log(this.x); //window.x=3
// };

// var obj = {x: 4, m: function() {
//     console.log(this.x);
// }};


// f(); //3
// new f();//5
// obj.m();//4
// new obj.m();//undefined
// f.call(f);//5
// obj.m.call(f);//5



// нужно написать хук который принимает адрес и возвращает ошибку, данные, состояние загрузки

// const fetchData=(url)=>{
//     const [error, setError]=useState(null)
//     const [isLoading,setIsLoading] = useState(false)
//     const [respData, setRespData] = useState({})
//     useEffect(() => {
//         setError(null)
//         setIsLoading(true)
//         fetch(url)
//         .then(resp=>{
//             if (!resp.ok){
//                 throw new Error(`ошибка запроса ${resp.status}`)
//             }
//             return resp.json()
            
//         }
//         ).then((res)=>{
//             setIsLoading(false)
//             setError(null)
//             setRespData(res)
//         }).catch((err)=>{
//             setError(err)
//             setIsLoading(false)
//         })
//         return () => {
            
//         };
//     }, [url]);
//     return {fetchData, isLoading, error}
// }
// export default fetchData