// function foo() {
//   const x = 1;
//   return {
//     x: 2,
//     bar: () => {
//       console.log(this.x);
//     },
//     baz: function () {
//       console.log(this.x);
//     },
//   };
// }

// const obj1 = foo();
// obj1.bar(); //undef
// obj1.baz(); //2

// const obj2 = foo.call({ x: 30 });

// obj2.bar();//30
// obj2.baz(); //2



///////////////
// console.log("1");

// const p = new Promise((res, rej) => {
//   console.log("2");
//   if (true) res("name1");
// });

// setTimeout(() => console.log("3"), 2000);

// p.then((name) => {
//   console.log(name);
//   setTimeout(() => console.log(name + ".2"), 500);
// });

// console.log("5"); 
// 1 2 5 name1 neme1,2 3

///////////////
// console.log(1);

// setTimeout(() => {
//   console.log(2);

//   setTimeout(() => {
//     console.log(3);
//     console.log(4);

//     setTimeout(() => {
//       console.log(5);
//       console.log(6);
//     }, 0);

//     setTimeout(() => {
//       console.log(7);
//       console.log(8);
//     }, 500);

//     setTimeout(() => {
//       console.log(9);
//       console.log(10);
//     }, 0);

//     console.log(11);
//   }, 1000);
// }, 0);

// console.log(12);
// console.log(13);
//1 12 13 2 3 4  11 5 6 9 10 7 8
///////////////
// Promise.resolve()
//   .then(() => console.log('then1-1'))
//   .then(() => console.log('then1-2'))
//   .then(console.log('1-3'));

// Promise.resolve()
//   .then(() => console.log('then2-1'))
//   .then(() => console.log('then2-2'))
//   .then(console.log('2-3'));


///////////////
// let promiseTwo = new Promise((resolve, reject) => {
//   resolve("a");
// });
// promiseTwo
//   .then((res) => {
//       return res + "b"; 
//   })
//   .then((res) => {
//       return res + "СЃ";
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


///////////////
// console.log("1"); 
// setTimeout(function () {
//     console.log("2");
// }, 0); 

// Promise.resolve().then(() => console.log("3")); 

// console.log("4");

///////////////
Promise.resolve()
  .then(() => console.log("a: 1"))
  .then(() => {
    setTimeout(() => console.log("timeout 2"));
    console.log("a: 2");
  })
  .then(() => {
    setTimeout(() => console.log("timeout 3"));
    console.log("a: 3");
  });

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



///////////////
// new Promise((res, rej) => {
//   console.log("b");
//   rej(new Error("123"));
// })
//   .then(console.log("b 1"))
//   .then(
//     () => console.log("b 2"),
//     () => console.log("b")
//   )
//   .catch(() => console.log("b 3"))
//   .then(() => console.log("b 4"));


///////////////
// console.log(({}).prototype === ({}).__proto__);

////////////////
// function ITtest(){};
// console.log( ITtest.prototype === ITtest.__proto__ ); 

////////////////////////////
// function test_1() {};
// function test_2() {};

// console.log( test_1.__proto__ ===  test_2.__proto__);

/////////////////
// let Component = () => {
//   return 'hello world'
// }
// console.log(Object.prototype);
// console.log(Component.prototype === Object.prototype);

//////////////////////////////////////
// let age = 18;
// console.log(age.prototype === Number.prototype);
// console.log(age.__proto__ === Number.prototype);

/////////////////////////////////////////
// class Hacker {}
// console.log(Hacker.__proto__ === Function.prototype);


///////////////
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


// console.log("1"); // 1


// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("2");
//     console.log("timeout-2");
//   }, 0);
//   console.log(3); // 3
//   resolve();
// })
//   .then(console.log("then1"))
//   .then(console.log("then2"));


// setTimeout(() => {
//   console.log("timeout-3");
//   console.log(4);
// }, 0);


// console.log("5"); 


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


///////////////
// console.log(+"10"); // 10
// console.log(+"1one"); // NaN
// console.log("number" + 15 + 3); // number153
// console.log(15 + 3 + "number"); //18number
// console.log(true + false); //1
// console.log("foo" + "bar"); // fooNaN
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

///////////////
// var a = [1,2,3]
// var b = [1,2,3]
// var c = '1,2,3'
// console.log(a == c)
// console.log(a == b)


// var x =10

// var foo = {
//   x: 20,
//   bar: function(){
//     x = 30
//     return (this.x,this)
//   }
// }

// console.log(foo.bar())
// zpp=foo.bar
// console.log(foo.x);
// console.log(zpp());
// x=undefined
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

// 1, 2, 4, timerStart, succes, timerEnd


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

// let x
// console.log(x)
// x = 5