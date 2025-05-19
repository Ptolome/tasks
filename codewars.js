// function colorOf(r,g,b){
//     let r1 = r.toString(16).length ===1 ?'0'+r.toString(16):r.toString(16)
//     let g1 = g.toString(16).length ===1 ?'0'+g.toString(16):g.toString(16)
//     let b1 = b.toString(16).length ===1 ?'0'+b.toString(16):b.toString(16)
//     console.log(r1);
//     console.log(g1);
//     console.log(b1);
//     return '#'+r1+g1+b1
  
// }
// console.log(colorOf(255,0,0));


// Напишите функцию, которая найдет все наборы анаграмм в строке. 
// Анаграммы - слова, составленные из одного и того же набора букв (рост-сорт-трос)
// */

// const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';

// function findAnogramm(x){
//     const arrOfX=x.split(' ')
//     const result={}
//    arrOfX.forEach((item)=>{
//     if (item.split('').sort().join('') in result){
//         result[item.split('').sort().join('')].push(item)
//     } else (
//         result[item.split('').sort().join('')]=[item]
//     )
//    })
//    return Object.values(result)
// }
// console.log(findAnogramm(str))



// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   console.log( sumSalaries(salaries) ); // 650
//   function sumSalaries(obj){
//     return Object.values(obj).reduce((sum, current)=>sum+current,10)
//   }
// Array.prototype.meReduce=function(callback, initialValue){
//     if (typeof callback !=='function') {
//         throw new TypeError(callback + 'is not a function')
//     }

//     const arr = this
//     if (arr.length===0){
//         return 0
//     }
//     let index = 0
//     let sum = initialValue
//     if (initialValue==='undefined'){
//        sum = arr[0]
//         index = 1
//     }
//     for (let i = index; i<arr.length;i++){
//         sum+=callback(sum,arr[i], i, arr)
//     }



//     return sum
// }
// [1,2,0].meReduce()



// На входе массив чисел, например: arr = [1,2,3,4,5].

// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:

// const arr = [ 1, 2, 3, 4, 5 ]
// console.log(getSums( arr )) // [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// function getSums(arr){
//     const result = []
//     let res= arr.reduce((sum,item)=>{
       
//         result.push(sum)
//         return sum+item
//     })
//     result.push(res)
//     return(result)
// }
// 
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// console.log( camelize("background-color")) //'backgroundColor'

// function camelize(str){
//     let nextUpercase=false
//     let newStr = str.split('').reduce((accum, item)=>{
        

//         if (nextUpercase){
//             nextUpercase=false
//             return accum+item.toUpperCase()
//         }
//         if (item==='-'){
//             nextUpercase=true
//             return accum
            
//         }
//         console.log(accum);
//         return accum + item
//     },'')

//     return newStr
// }


// напиши функцию creatRange() которая принимает массив счисел и возврфщает  строку вида 1-9,14-20
console.log(creatRange([1,4,2,3,  7 ,8,9,11,10]));//1-9,7-11

function creatRange(arr){
    const sortArr=arr.sort((a,b)=>a-b)
    let rangeEnd=sortArr[0]
    let rangeStart=sortArr[0]
    let result = []
    for (let i = 1; i< sortArr.length;i++ ){
        if (sortArr[i+1]-sortArr[i] !==1){
            rangeEnd= sortArr[i]
            result.push(`${rangeStart}-${rangeEnd}`)
            rangeStart=sortArr[i+1]
        }
    }
    return result.join(',')
}