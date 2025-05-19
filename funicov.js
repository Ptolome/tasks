// var userService = {
//     currentFilter:'active',
//     users:[
//         {name:'Alex',status:'active'},
//         {name:'Mike',status:'deleted'}
//     ],
//     getFilteredUsers: function(){
//         return this.users.filter(function(user){
//             return user.status === this.currentFilter
//         })
//     }
// }

// console.log(userService.getFilteredUsers());

let message //global
function foo(isLoading){
    message='hello' //global
    isLoading=true // local
    function bar(){
        console.log(message);
        console.log(isLoading);
    }
    return bar
}

let isLoading = false
const getParams=foo(isLoading)
isLoading = undefined
message="by-by"
getParams()
//  в каком порядке отобразяться 

// import React from "react";

// import { useState, useEffect, useLayoutEffect } from "react";

// const Child = () => {
//     useLayoutEffect(() => {
//         console.log("useLayoutEffect --- Child");// 3
//     });
//     useEffect(() => {
//         console.log("useEffect --- Child"); //5
//         return () => {
//             console.log("return Child");
//         };
//     });
//     console.log("child");//2
//     return <div>Child</div>;
// };

// export default function App() {
//     const [value, setValue] = useState(false);
//     useLayoutEffect(() => {
//         console.log("useLayoutEffect --- App"); //4
//     });
//     useEffect(() => {
//         console.log("useEffect --- App");//6
//         return () => {
//             console.log("return App");
//         };
//     });
//     console.log("App"); //1
//     return (
//         <div>
//             <button onClick={() => setValue(!value)}>Hello</button>
//             <Child />
//         </div>
//     );
// }


const value = 100

setTimeout(callback, 1000, value)

function callback(arg) {
    console.log(arg)
}


//почему не работате(итерфейсы,поля)

interface User {
    name: string
    age: number
}

function foo(arg: Record<string, unknown>) {
    return arg
}


const obj: User = {
    name: 'alex',
    age: 34
}

foo(obj)