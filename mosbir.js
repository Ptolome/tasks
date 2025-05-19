// .example {color:yellow;}  //010
// ul li a {color:blue}    //003
// ul a {color:green}  //002
// a {color:red}   //001

// <ul>
//     <li><a href="#" class='example'>Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Services</a></li>
//     <li><a href="#">Contact</a></li>


// </ul>


// p:first-of-type{  //011
//     color: red;
// }

// p {
//     color: blue; //001
// }
// .container {
//     color:yellow; //010
// }
// p:first-child {color:green} 

// <div class = "container">
//     <h1>Заголовок </h1>
//     <p>Parragraf1</p>
//     <p>Parragraf2</p>

// </div>

const arr1 = [1,2,3,4,5,6,7]
const  showArrElementWithDelayed =  (arr)=>{
    arr.forEach((ellement,i)=>{
         setTimeout(() => {

            console.log(ellement)
        }, 1000)
    })
}

async function showArrElementWithDelayed1 (arr){
    for (const element of arr) {
        await new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(element)
                resolve()
            },1000)
        })
    }
} 
showArrElementWithDelayed1(arr1)