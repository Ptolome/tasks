// fetchData().then((res)=>processResponse(res)).catch(err=>handleError(err))
// (async function asycnAwait(){
//     try {
//         const res = await fetchData()
//         processResponse(res)
//     } catch (err){
//         handleError(err)
//     }

// })()

// const a = "Hello";
// // a.map((item,i) => console.log(i));

// for (let i in a) {
//   if (i !== "e") {
//     console.log(i);
//   }
// }

// a=[1,3,4,5,6,7,8]
// a.map((i)=>(!(i%2) ? console.log(i):null))

// a=[1,3,4,5,6,7,8,9]
// const x =a.reduce((acc,item,index)=>acc*item,1)
// console.log(x);

function sum(x=0){
  if (typeof x ==='Array'){
    function isArr(x){
      x.forEach(element => {
        if (Array.isArray(element)){
          
          return isArr(element)
        } else {
           x+=element
        }
        
      });
      return x
    }
  }
  return function fn(value){
    if (value){
      x+=value
      return fn
    } else {
      return x
    }

  }
}
console.log(sum(1,(2,3),4)(3)(2)());