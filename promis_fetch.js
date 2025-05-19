// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function dataFetch() {
    console.log('1');
    try {
        const metaResp=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(3);
        const data= await metaResp.json()
        console.log(data);
    } catch (e) {(e)=> {console.log(e)};
    }

}
dataFetch()