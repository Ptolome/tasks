// **************** CORE ****************  //

// let x = 1
// // let a
// function f(){
//   x = x + 1
//   let a = 5 + x
//   console.log(x, a) //2,7
// }

// f()
// console.log(x) //2
// console.log(a) //undefined

// ////////
// let a = 10
// const setA = () => {a = 20}

// console.log('a1=', a) // 10
// function fa(){ setA() }
// fa()
// console.log('a2=', a) //20


// **************** HOISTING ****************  //

// //////
// let a1 = 1
// function b() {
//   a1 = 10
//   return 20
//   var a1
// }
// b()

// console.log(a1)

////////

let abc = f();
var b = 10;

function f() {
  return b;
}

console.log('abc=', abc)

// **************** TDZ ****************  //

////////
// function tdz(){
    
//   console.log(x)
//   console.log(uknown)
//   let x
// }

// tdz()


// function foo(a){
//   if(a > 0){
//     let a = a + 10
//     return a
//   }
//   return a
// }
// console.log(foo(20))



// **************** CLOSURE ****************  //

////////
// function countCalls(){
//   let count = 0
//   return function () {
//     count++
//     console.log('count= ', count)
//   }
// }

// let counter1 = countCalls()
// let counter2 = countCalls()
// counter1()
// counter2()
// counter1()
// counter1()

// ////////
// var a = 25

// function logA(){
//   console.log('a= ', a)
// }

// const obj = {
//   a: 12,
//   b: logA,
//   c: function(){
//     var a = 1
//     logA()
//   }
// }

// obj.b()//
// obj.c()//

// //////// potria contexta
// const arr = [
//   {name: 'Bob', age: '25'},
//   {name: 'Ann', age: '30'},
//   {name: 'Tom', age: '35'},
// ]

// const fn = () => {}

// arr.forEach(fn('name'))


////////
// var a = 25

// function logA(){
//   console.log('a=', a)
// }

// const obj = {
//   a: 12,
//   b: logA,
//   c: function(){
//     var a = 1
//     logA()
//   }
// }

// const asfunc = () => {
//   setTimeout(() => {
//     console.log('async a = ', a)
//   }, 2000)
// }

// obj.b()//25
// a = 7
// obj.c()//7
// asfunc()//7

// **************** CORE ****************  //
// console.log(+('10'))//10
// console.log(+('1one'))//NaN
// console.log('number' + 15 + 3)//number153
// console.log(15 + 3 + 'number')//18number
// console.log(true + false)//1
// console.log('foo' +  +'bar')//foobar
// console.log('foo' || '100' && 15)//foo
// console.log(true && 'bar')//bar
// console.log('100' ? 15 : 100)//15
// console.log('false' == false) //false тк будет приведение к числу NaN==0 
// console.log(15 + 3 + 'number')
// console.log('ee' || 'www')//ee
// console.log(null || false)//false
// console.log(null == undefined)//true
// console.log(NaN === NaN)//false
// console.log(typeof(undefined))//undefined
// console.log(typeof(null))//object
// console.log(typeof(NaN))//number

////////
// let a = 1

// function func(){
//   a = 10
//   function a() {
//     console.log('a1', a)
//   }
//   a()
// }

// func()
// console.log('a2', a)

////////
// let x = 10
// function b(){
//   if(false){
//     function x(){}
//   }
//   console.log('x= ', x)
// }

// b()

// console.log('x= ', x)

// **************** PROMISE ****************  //
////////
// console.log("1");
// let pr = new Promise((resolve, reject) => {
//   console.log("2");
//   setTimeout(() => {
//     resolve("3");
//   }, 0);
//   console.log("4");
// });
// console.log("5");
// pr.then((val) => {
//   console.log(val);
// });
// Promise.resolve("6").then((val) => console.log(val));

// 124563

////////
// Promise
//   .reject('a')
//   .catch(p => p + 'b') //
//   .catch(p => p + 'c')
//   .then(console.log('hi')) 
//   .then(a => console.log('hi', a)) 
//   .then(p => console.log(p))
// // hi hi ab undefined
////////
// function a(){
//   console.log('1')
//   Promise.resolve().then(a)
// }

// function b() {
//   console.log('2')
//   setTimeout(b)
// }
// a()
// b()
// 1 2 1 1 1 1 1 ...
////////
// Promise.reject('a')
//   .then(p => p + '1', p => p + '2')
//   .catch(p => p + 'b')
//   .catch(p => p + 'c')
//   .then(p => p + 'd1')
//   .then('d2')
//   .then(p => p + 'd3')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))

////////
// console.log('1')
// setTimeout(() => console.log('2'), 0)
// Promise.resolve('3')
//   .then((val) => console.log(val))

// console.log('4')
// Promise.resolve('5')
//   .then((val) => console.log(val))

// 1 4 3 5 2
////////
// Promise.reject('start')
//   .finally(val => {
//     console.log('finally-1', val) 
//     return 'one'
//   })
//   .catch(val => {
//     console.log('catch-2',val)
//     return 'two'
//   })
//   .finally(val => {
//     console.log('finally-3', val)
//     return 'three'
//   })
//   .then(val => {
//     console.log('then-4', val)
//     return 'four'
//   })
//   .finally(val => {
//     console.log('finally-5', val)
//     return 'five'
//   })
//   .then(val => console.log('result', val))
// console.log('finish')


// // finish finally-1' undefined catch-2 start finally-3 undefined then-4' two finally-5 undefined 'result four

////////
// console.log('1')

// let pr = new Promise((resolve, reject) => {
//   console.log('2')
//   setTimeout(() => {resolve('3')}, 0)
//   console.log('4')
// })

// console.log('5')

// pr.then((val) => {
//   console.log(val)
// })

// Promise.resolve('6').then(val => console.log(val))

////
// async function foo() {
//   console.log('some')

//   // let data = await Promise.resolve(10)
//   // console.log(data)
//   Promise.resolve(10).then((a)=>console.log(a))
// }
// foo()

// console.log(20)

// **************** CLASS AND PROTOTYPE ****************  //

////////
// function Person(name){
//   this.name = name
//   this.getName = function(){console.log(this.name)}
// }

// Person.prototype.getName = function(){
//   console.log(this.name)
// }

// const max = new Person('Max')
// const bob = new Person('Bob')

// bob.getName()

// console.log(max.__proto__ === Person.prototype)
// console.log(max.__proto__ === Function.prototype)
// console.log(Function.prototype === Person.__proto__)
// console.log(Function.__proto__ === Object.prototype)
// console.log(bob.prototype === Function.prototype)
// console.log(max.__proto__ === bob.__proto__)

////////
// let men1 = {}
// console.log(men1.__proto__ === Object.prototype)//t

// let func1 = function() {}
// console.log(func1.__proto__ === Function.prototype)//t

// let a2 = 22
// console.log(a2.__proto__ === Object.prototype)//f
// console.log(a2.__proto__ === Number.prototype)//t

// **************** coNTEXT ****************  //

// let user = {
//   firstName: 'bob',
//   sayHi(){
//     console.log(this.firstName)
//   }
// }

// setTimeout(user.sayHi.bind(user), 200)
// setTimeout(()=>user.sayHi(), 300)


// **************** MIX ****************  //

function foo() {
  const x = 1;
  return {
    x: 2,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}

const obj1 = foo();
obj1.bar(); // undefined
obj1.baz(); // 2

const obj2 = foo.call({ x: 30 });
console.log(obj2);

obj2.bar(); // 30
obj2.baz(); // 2

///////////////
// console.log("1");

// const p = new Promise((res, rej) => {
//   console.log("2");
//   if (true) res("name1");
// });

// setTimeout(() => console.log("3"), 2000);

// p.then((name) => {
//   console.log(name);
//   setTimeout(() => console.log(name + "2"), 500);
// });

// console.log("5");


// 1, 2, 5, name1, name12, 3

///////////////
// console.log(1);

// setTimeout(() => {
//   console.log(2);

//       setTimeout(() => {
//             console.log(3);
//             console.log(4);

//             setTimeout(() => {
//               console.log(5);
//               console.log(6);
//             }, 0);

//             setTimeout(() => {
//               console.log(7);
//               console.log(8);
//             }, 500);

//             setTimeout(() => {
//               console.log(9);
//               console.log(10);
//             }, 0);

//             console.log(11);
//       }, 1000);
// }, 0);

// console.log(12);
// console.log(13);
// 1 12 13 2  3 4 11 5 6 9 10 78








///////////////
// Promise.resolve()
//   .then(() => console.log('then1-1'))
//   .then(() => console.log('then1-2'))
//   .then(console.log('1-3'));

// Promise.resolve()
//   .then(() => console.log('then2-1'))
//   .then(() => console.log('then2-2'))
//   .then(console.log('2-3'));



// микротаски выполняются все одновремено за одну итерацию а клг без колбэкфункции является синкхроной опеацией и просто попадает в стек вызовов


// 1-3, 2-3, then1-1, then2-1, then1-2, then2-2 

/////////////// 
// let promiseTwo = new Promise((resolve, reject) => {
//   resolve("a");
// });
// promiseTwo
//   .then((res) => {
//       return res + "b";
//   })
//   .then((res) => {
//       return res + "С";
//   })
//   .finally((res) => {
//       return res + "!!!!!!!";
//   })
//   .catch((res) => {
//       return res + "d";
//   })
//   .then((res) => {
//       console.log(res);
//   });



///////////////

// function doSmth() {
//   return Promise.resolve("123");
// }
// doSmth()
//   .then(function (a) {
//     console.log("1", a);
//     return a;
//   })
//   .then(function (b) {
//     console.log("2", b);

//     return Promise.reject("321");
//   })
//   .catch(function (err) {
//     console.log("3", err);
//   })
//   .then(function (c) {
//     console.log("4", c);
//     return c;
//   });

  // 1 123 2 123 3 321 4 undefined

///////////////
// console.log("1");
// setTimeout(function () {
//     console.log("2");
// }, 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// 1, 4, 3, 2

///////////////
// Promise.resolve()
//   .then(() => console.log("a: 1"))
//   .then(() => {
//     setTimeout(() => console.log("timeout 2"));
//     console.log("a: 2");
//   })
//   .then(() => {
//     setTimeout(() => console.log("timeout 3"));
//     console.log("a: 3");
//   });

  // a: 1, a: 2, a: 3, timeout 2, timeout 3

///////////////
// new Promise((res, rej) => {
//   console.log("b");
//   rej(new Error("123"));
// })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(4);
//   })
//   .catch(() => console.log("b 3"));

// b, b 3

///////////////
// console.log("1");

// setTimeout(() => console.log("2"), 1);

// let promiseNew = new Promise((resolve) => {
//   console.log("3");
//   resolve();
// });

// promiseNew.then(() => console.log("4"));

// setTimeout(() => console.log("5"));

// console.log("6");
//1 3 6 4 2 5
///////////////
// new Promise((res, rej) => {
//   console.log("b");    // 1
//   rej(new Error("123"));
// })
//   .then(console.log("b 1")) //2
//   .then(
//     () => console.log("b 2"),
//     () => console.log("b")  //3 здесь отлавливаем ошибку
//   )
//   .catch(() => console.log("b 3"))
//   .then(() => console.log("b 4")); //4 

//b b1 b b4

// // ///////////////
// console.log(({}).prototype === ({}).__proto__); // false


////////////////
// function ITtest(){};
// console.log( ITtest.prototype === ITtest.__proto__ ); // false

////////////////////////////
// function test_1() {};
// function test_2() {};

// console.log( test_1.__proto__ ===  test_2.__proto__); // true

/////////////////
// let Component = () => {
//   return 'hello world'
// }
// console.log(Object.prototype);

// console.log(Component.prototype === Object.prototype); // false

// //////////////////////////////////////
// let age = 18;
// console.log(age.prototype === Number.prototype); // false
// console.log(age.__proto__ === Number.prototype); // true

// ///////////////////////////////////////
// class Hacker {}
// console.log(Hacker.__proto__ === Function.prototype); // true

// /////////////
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0);
// }

///////////////
// let foo = 1;
// function bar() {
//   if (!foo) {
//     var foo = 10;
//   }
//   console.log(foo);
// }
// bar();

///////////////
// setTimeout(() => {
//   console.log("timeout-1");
// }, 0);

// console.log("1"); 

// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("2");
//     console.log("timeout-2");
//   }, 0);
//   console.log(3); 
//   resolve();
// })
//   .then(console.log("then1"))
//   .then(console.log("then2"));

// setTimeout(() => {
//   console.log("timeout-3");
//   console.log(4);
// }, 0);

// console.log("5");
// 1 3 5 then1 thene timeout-1 2 timout2  timeoun3 4





// 1 3 then1 then2 5  timeount 1 2 timeout-2 timeout-3 4

///////////////

// const protos = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("start");
//   console.log(2);
//   reject("end");
//   setTimeout(() => {
//     console.log(3);
//   }, 0);
// });

// protos
//   .then((value) => {
//     console.log(value);
//   })
//   .then();

// const promisCheck = Promise.resolve().then(() => {
//   console.log("promiseCheck");
//   setTimeout(() => {
//     const promisFront = Promise.resolve().then(() => {
//       console.log("promiseFront");
//     });
//     console.log("foo");
//   }, 0);
// });

// console.log("EPAM");
// 1 2  EPAM start promiseCheck 3 foo promiseFront
///////////////
// console.log(+"10"); // 10
// console.log(+"1one"); // NaN
// console.log("number" + 15 + 3); // number153
// console.log(15 + 3 + "number"); //18number
// console.log(true + false); //1
// console.log("foo" + "bar"); // foobar
// console.log("foo" || ("100" && 15)); // foo
// console.log("foo" && "bar"); // bar
// console.log("100" ? 15 : 100); // 15
// console.log("false" == false); // false NaN !==0
// console.log("ee" || "www"); // ee
// console.log(null || false); // false
// console.log(null == undefined); // true
// console.log(NaN == NaN); // false
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// console.log(typeof NaN); // number

///////////////
// var a = [1,2,3]
// var b = [1,2,3]
// var c = '1,2,3'
// console.log(a == c)
// console.log(a == b)

// var x = 10

// var foo = {
//   x: 20,
//   bar: function(){
//     var x = 30
//     return this.x
//   }
// }

// console.log(foo.bar())

// var arr = new Array(1,2,3)

// console.log(arr)

// console.log(typeof undefined)

////////////////////////
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// console.log('end');

//////////////////////////////
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

/////////////////////////////////
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

////////////////////////////////
// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

////////////////////////////////
// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(res)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end')

////////////////////////////////
// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')

//////////////////////////////////
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

// 1, 2, 4, timerStart, , timerEnd success

//////////////////////////////////
// const timer1 = setTimeout(() => {
//   console.log('timer1');

//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)

// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)

////////////////////////////////
// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');
// start end promise1 timer1 promise2 timer2
// (function(){
//   console.log(x)
// let x

// x = 
// 5
// })()

const y={
  obj1:1,
  obj2:3
}
const x= ['hello', 'hi']
for (let i in y){
  console.log(i);
}