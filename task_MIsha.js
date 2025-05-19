// проверка массива на уникальные элементы
// const a = [1, 2, 3];
// const b = [];
// for (let i of a) {
  
//   if (i in b) {
//     console.log("The list is not unicu");
//     break;
//   }
//   b.push(i);
// }
// if (a.length === b.length) {
//   console.log(`The list is unicu`);
// }

// const a =[1,2,3,4,5,6,7]
// const b= []
// for (let i of a){
//     if (i%2===0){
//         b.push(i)
//     }
// }
// console.log(b);

// const a = '12345'
// const a1=a.split('')
// const b=[]
// for (let i of a1){
//     b.unshift(i)
// }
// console.log(b.join(''));

// const a = [10,23,13,23,14]
// const b=a.map((item)=>{ Number(item).isNaN ? 0 : item })
// console.log(b);


let group = getGroup();
group[0]() // 10 нужно 0
group[5]() //10 нужно 5

function getGroup() {
    let students=[]
    let i =0;
    while (i<10) {
        students[i] = function () {
            console.log(i);
        }
        i++
    }
    console.log(students);
    return students
}
// В коде представлены два примера — класс `Cat` и объект`myCat`.Они демонстрируют, как`this` работает в стрелочных функциях и обычных функциях.

// Вот код:

// javascript


// class Cat {
//     sound = 'meow';
//     say = () => {
//         console.log(this.sound);
//     };
//     say2() {
//         console.log(this.sound);
//     }
// }

// const myCat = {
//     sound: 'meow',
//     say: () => {
//         console.log(this.sound);
//     },
//     say2: function () {
//         console.log(this.sound);
//     },
// };

// const cat = new Cat();
// cat.say();//meow
// cat.say2();//undefined

// myCat.say();//undefined
// myCat.say2();//me0w