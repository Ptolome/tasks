arr = [1,23,12,34,1]
// const arrMax=(arr)=>{
    
//    return arr.sort((a,b)=>a-b)[arr.length-1]

// }
// console.log(arrMax(arr))

Array.prototype.sortArr=function(){
    const arr=this
    console.log(this);
    const resultArr=[]
    for (let i = 0 ;i<arr.length; i++)
    { 
        let min = 0
        for (let j = 0 ;j<arr.length; j++){
            if( arr[j]<arr[min]){
                min=j
            }
        }
        resultArr.push(arr[min])
                arr.pop(min)

}
return resultArr
}
console.log([1,3,6,23,1].sortArr())

