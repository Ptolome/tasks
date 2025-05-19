let str:string='Hello'
let resultStr:string=''
function doubleChar(str:string):string {
    for (let i=0; i<str.length;i++){
        resultStr+=str[i]+ str[i]
}
return resultStr
}
console.log(resultStr)