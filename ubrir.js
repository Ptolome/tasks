//  задача 1
//  у стрелочной функции не своего this она его берет из окружениея в котором СОЗДАНА ( т.е. ссылаемся на глобальный контекст, выведет {}  || undefined в строгом режиме)
// в метод bind можно передовать примитивные типы, avaScript преобразует их в соответствующие
//  объекты-обертки при вызове привязанной функции
// const myF1=()=>{
//     console.log(this)
//     }
// const myFBind1= myF1.bind(4)
// console.log(me=myFBind1());
///можно переписать через function declaration тогд результат: [Number: 4]

// Задача #2
//  На входе имеется строка типа:
//  "a.b.c.d.e"
//  Исходя из этого необходимо написать функцию и сделать из строки выше, следующий
//  объект:
//  {:a{:b{:c{:d{}}}}}
// function objFromStt(str){
//     strArr=str.split('.')
//     const Obj={}
//    let result=Obj
//     for (let i=0;i<strArr.length;i++){
//         let key = strArr[i]
//         result[key]={}

//         result =result[key]
//        console.log(Obj);

//     }
    
// }
// objFromStt('a.b.c.d.e')
// Задача 3
// На любом языке программирование на Ваш выбор написать программу, которая
// выводит шахматную доску, где чёрные клетки символы “#”, а белые– “_”. Размер
// доски должен задаваться переменными. Пример:
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// const chessBoard=(a,b)=>{
//       let str = ''
//       let x='_'
//       let y="#"
//     for (let i=1;i<=a*b;i++){
//         str += (i % 2) ? x : y;
       
//         if (i%b==0) {
//             str+='\n'
           
//            let temp=y
//             y=x
//             x=temp

//         }
        
//     }
//     console.log(str);
// }
// chessBoard(5,6)

// задача 4
// Вывести сумму sum(3)(5)(1)() что если мы не знаем количество вызовов ?
// function sum(arg){
//     let acc=arg
//     console.log("acc",acc);
//     return function (arg){
//         if (arg){
//             acc +=arg
//             console.log(acc)
//             return sum(acc)
//             ;}
//         return acc
//     }
// }
// console.log(sum(3)(5)(1)());

// Есть строка “a b a b c c e d d d d” Нужно вывести массив уникальных значений,
//  который отсортирован по частоте включения в строк
// function SortStr(str) {
    
//     const Obj={}
//     str.split(' ').forEach(element => {
//         if (element in Obj) {
//             Obj[element]+=1
//         } else {
//             Obj[element] = 1
//         }

//     });

//     return Object.entries(Obj).sort((a,b)=>a[1]-b[1]).map((item)=>item[0])
// }
// console.log(SortStr('a b a b c c e d d d d'));

// Задача#7
//  Написатькод,чтобыможнобыловызватьиотрабатывало:

// String.prototype.camelCase=function(){
//     return this.split(" ").map(item=>item[0].toUpperCase()+item.slice(1)).join('')
// }
// console.log('hello wolrd'.camelCase())

// Задача#9
// Имеетсямагазин,в котором имеется некоторое количество касс.Клиенты приходят в
// магазин инеобходимо рассчитать количество времени через которое все клиенты
// пройдут этикассы.Т.е.нужно написатьпрограмму или алгоритм для расчёта времени.
// · queueTime([5,3,4],1)  -где триклиента и каждый проходит кассу 5 минут,3
// минуты и 4 минуты и имеется одна касса. Время прохода будет- 12 минут.
// · queueTime ([10,2,3,3], 2)  - где три клиента и каждый проходит кассу 10 минут,
// 2 минуты, 3 минуты и 3 минуты. Имеется две кассы. Время прохода будет- 10
// минут.

// function queueTime(arrLine, terminal){
//     return Math.floor(arrLine.reduce((acc,current)=>acc+current)/terminal)
// }
// console.log( queueTime ([10,2,3,4], 2))
// ////задача 5
// На вход подаётся строка типа
// 1,2,3,5,6,9
// Нужно вывести
// 1-3,5-6,9
// const rangeArr=(str)=>{
//     const arr=str.split(',')
//     let start=arr[0]
//     const resultArr=[]
//     for (let i=1; i<=arr.length;i++){
//         if (arr[i]-arr[i-1]!==1){
//             if (start!==arr[i-1]){
//             resultArr.push(start+'-'+arr[i-1])}
//             else {
//                 resultArr.push(start)
//             }
//             start=arr[i]
//         } 
       
//     }
//     return resultArr.join(',')
// }
// console.log( rangeArr('1,2,3,5,6,9'))
// задача 11
// Написать функцию, которая принимает один аргумент в виде целого числа и
//  возвращает функцию. Вызов которой каждый раз должен выводить число на один
//  меньшее аргумента. После того как функция первый раз вернула ноль, функция
//  должна возвращать ноль всегда.
// function endZerro(num){
//     let acc = num
//     return function(){
//         if (acc>0){
            
//             return --acc
//         }
//         if (acc==0){
//             return 0
//         }
//     }
// }
// const x= endZerro(3)
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());

// let a="a.b.c.d.e"
// function StrToObj(str){
//     const arrStr=str.split('.')
//     const resultObj={}
//     let midlKey=resultObj
//     arrStr.forEach(element => {
//         midlKey[element]={}
//         midlKey=midlKey[element]
//     });
//     console.log(resultObj);
// }
// StrToObj(a)