// // функция реализует полифил PromiseAll
// function myPromiseAll(promises){
//     const results=[]
//     let count =0
//     return new Promise((resolve,reject)=>{
//         if (results.length===0){
//             resolve(results)
//         }
//       promises.forEach((pr, index)=>{
//         Promise.resolve(pr)
//         .then((item)=>{
//             results[index]=item
//             count++
//             if (results.length===count){
//                 resolve(results)
//             }
//         }).catch(reject)
//       })

//     })
    
// }
// Function.prototype.bindWithCall= function(context,...args1){
//     const fn=this
//     if (typeof fn !=='function'){
//         throw new Error('Function.prototype.bind - context must be a valid function')
//     }
//     return function(...args2){
//         return fn.call(context,...args1,...args2)
//     }
// }

// const test = function (...args) {
//     console.log('args', args);
//     console.log('this', this);
// };

// const context = { value: 42 };

// // Создаем новую функцию, привязывая `test` к `context` и передавая аргумент 'Hello'
// const boundTest = test.bindWithCall(context, 'Hello');

// // Вызываем привязанную функцию с дополнительными аргументами
// boundTest('World'); // args: ['Hello', 'World'], this: { value: 42 }

// Array.prototype.myFlet=function(){
//     const result=[]
//     function fn(args){
//          for (let index = 0; index < args.length; index++) {
//             if (Array.isArray(args[index])){
//                 return fn(args[index])
//             } else {
//                 result.push(args[index])
//             }
            
//         }
       
//     }
//     console.log(this);
//     fn(this)
//     return result
// }
// console.log( [12,2,[1,1,3,[2,5], [3,5]] ,8].myFlet())

// Array.prototype.meMap=function(func){
//     const newArray=[]
//     for (item of this){
//        newArray.push(func(item))
//     }
//     return newArray
// }
// console.log([1,2,3].meMap((a)=>a*a));

// function logger(){
//     console.log(this.item);
// }

// const obj1= {item:'value1'}
// const obj2= {item:'value2'}
// const obj3= {item:'value3'}

// logger.call(obj1)
// logger.apply(obj2)
// logger.bind(obj3)()
// logger.bind(obj1).bind(obj2).call(obj3)

// var l = 25
// var x= 11
// function bar(foo){
//     var x = 30
//     console.log('0x',x);
//     foo()
// }
// function foo(){
//     console.log('x',x);
// }
// foo.x=20
// bar.x=40
// l.x=100
// bar(foo)
// console.log('foo.x', foo.x);
// console.log(bar.l);
// console.log(l.x);

// посчитать сумму всех значени1 которые  есть в оБъекте
// const obj = {
//     value:12,
//     s:{value:1,
//         p:{
//             value:3
//         }
//     }

// }
// let x=0
// function req(obj){
    
//     for (i in obj){
//         if (typeof obj[i] ==='object'){
//             req(obj[i])
//         }else {
//             x+=obj[i]
//         }
//     }
// }
// req(obj)
// console.log(x);

// polifil metoda call
// Function.prototype.callPolyfill=function(obj){
//      const func =Symbol()
//      obj[func]=this
//      const res = obj[func]()
//      delete obj[func]
// return res
// }

// function increment(){this.count++; return this.count}
// console.log(increment.callPolyfill({count:1}))//2

// function razdelArr(arr){
//     let k=0
//     for (let i in arr){
//         if (arr[i]%2===0) {
//            [arr[i],arr[k]]=[arr[k],arr[i]]
//             k++
//         }

//     }
//     return arr
// }
// console.log(razdelArr([1,2,4,3,3,1,2]))

// let head = {
//     val:1,
//     next:{
//         val:2,
//         next:{
//             val:3,
//             next:{
//                 val:4,
//                 next:{
//                     val:5,
//                         next:null
//                 }
//             }
//         }
//     }
// }
// function middleNode(head){
//     let fast = head
//     let slow = head
//     while (fast && fast.next){
//         console.log(fast);
//         fast=fast.next.next
//         slow=slow.next
    
//     }
//     return slow
// }

// console.log(middleNode(head));



// function compose(...funcs){
//     return (a)=>{
//         let count =a
//         funcs.reverse()
//         for (let f of funcs){
//             count=f(count)
//         }
//         return count
//     }
// }

// const composed= compose(a=>a+1, a=>a*2)
// console.log(composed(2));//5

// 1l =10km
// 5l +1l из доп бака
// function distanceTraveled(mainTank, addintionalTank){
//     let count =0
//     let len=0
    
//     while (mainTank>0){
//         mainTank--
//         len +=10
//         count++
//         if (count===5){
//             count=0
//             if (addintionalTank>0){
//                 addintionalTank--
//                 len+=10

//             }
           
//         }
//     }
//     return len
// }
// console.log(distanceTraveled(9,5));

// polifill metoda some 
// if (!Array.prototype.someCustom){
//     Array.prototype.someCustom = function(fn){
//         console.log(this);
//                 this.map((item)=>{
//                 if (fn(item)){
//                     return  true;
//                 } 
//             })
//         return false;    
    
//         }  
// }
// console.log([2,5,8,1,4].someCustom((x=>x>10)))//false

 //sort by year
// const operations = [
//     {date: '2017-07-31'},
//     {date: '2018-04-31'},
//     {date: '2018-06-31'},
//     {date: '2017-07-2'},
//     {date: '2017-07-23'},
//     {date: '2017-2-31'},
//     {date: '2018-3-31'},
//     {date: '2017-07-31'},
// ]
// function yearSort(arr){
//     const result = {}
//     arr.forEach((item)=>{
//         const keyItem=item.date.split('-')[0]
//         const keyValue=item.date.replace(keyItem,'')
//         if (keyItem in result){
//             result[keyItem].push(keyValue)
//             result[keyItem].sort()
//         } else {
//             result[keyItem]=[keyValue]
//         }
//     })
//     result
//     return result
// }
// console.log(yearSort(operations));

// function makeMemo(fn){
//     const cash ={}
//     console.log(cash);
//     return function(...args){
//         const key= JSON.stringify(args)
//         console.log(cash);
//         if (key in cash){
//             return cash[key]
//         }else {
//             result = fn(...args)
//             cash[key]=result
//             return result
//         }
//     }
//    console.log(cash);
// }

// function summ(a,b,c){
//     return a+b+c
// }
// const memoSumm=makeMemo(summ)
// console.log(memoSumm(1,2,3));
// console.log(memoSumm(1,2,5));
// console.log(memoSumm(1,2,3));

// sum(2)(2)(1)()
// function sum(first=0){
//     return function next(value){
//         if (value){
//             first+=value
//             return next
//         }else {return first}
//             }
//         }

// console.log(sum()(2)(1)());
// 6

/**
Напишите функцию, которая найдет все наборы анаграмм в строке. 
Анаграммы - слова, составленные из одного и того же набора букв (рост-сорт-трос)
*/

// const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';


// function getAnagramm(str) {
//   const words=str.split(' ')
//   const res = {}
//   for (let i of words) {
//     if (i.split('').sort() in res) {
//       res[i.split('').sort()].push(i)
//     } else {
//       res[i.split('').sort()]=[i]
//     }
    
//   }
//   return Object.values(res)
// }

// console.log(getAnagramm(str));


// // [['адрес','среда'],['карп','парк']]

















// 7

// // Нужно из массива объектов получить объект следующего вида.

// const x = [ { type: 'a' }, { type: 'b' }, { type: 'a' } ];

// Результат:
// {
//   a: [ { type: 'a' }, { type: 'a' } ],
//   b: [ { type: 'b' } ],
// };
 
 	
// Функция на входе принимает строку и возвращает true, если количество каждой буквы в слове одинаково, иначе false. function areOccurrencesEqual(str) {
// }
// console.log(areOccurrencesEqual(‘abacbc’))//true
// console.log(areOccurrencesEqual(‘aaabb’)//false

// Promise.all, Array.some, Array.filter, Promise.allSetled

Array.prototype.someMy = function (func) {
    let arr = this
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i])) {
            return true
        }

    }
    return false
}




[2, 5, 8, 1, 4].someMy(element => element >= 10) 
[12, 5, 8, 1, 4].some(element => element => 10) 