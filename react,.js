// import React from "react";
import React, { useState, useCallback, useMemo, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';

//  компонент который меняет тему(дарк -лайт)
const DarkLightStyle = () => {
    const [dark, setDark] = useState(true)
    const handleTheme = () => {
        setDark(prev=>!prev)
    }
    useEffect(() => { 
        function chengeColor() {
            document.body.style.backgroundColor = dark ? 'black' : 'white'

            document.body.style.color = !dark ? 'gray' : 'white'
        }
        setTimeout(chengeColor, 300)
       return ()=>{clearTimeout(chengeColor,300)}
       
    }, [dark])
    return <>
        <button onClick={handleTheme}>{dark ? 'темная тема' : 'светлая тема'}</button>
        </>
    
        
      
}

const MyList = () => {
    const [list, setList] = useState(() => { // Lazy initialization for InitState
        return [
            { id:1, text: "to learn", complited: false },
            { id: 2, text: "to play game", complited: false }
        ];
    });
    const [newTaskText, setNewTaskText] = useState('');

    // useCallback: Мемоизированные функции обработчики
    const handleComplete = useCallback((taskId) => {
        setList(prev =>
            prev.map(item =>
                item.id === taskId ? { ...item, complited: !item.complited } : item
            )
        );
    }, []); // Зависимости: пустой массив (функция создается только один раз)

    const handleDel = useCallback((taskId) => {
        setList(prev => prev.filter(item => item.id !== taskId));
    }, []); // Зависимости: пустой массив (функция создается только один раз)

    const handleAddTask = useCallback(() => {
        if (newTaskText.trim() !== '') {
            const newTask = {
                id:newTaskText+1,
                text: newTaskText,
                complited: false
            };
            setList(prev => [...prev, newTask]);
            setNewTaskText('');
        }
    }, [newTaskText, setList]); // Зависимости: newTaskText, setList

    const handleInputChange = useCallback((e) => {
        setNewTaskText(e.target.value);
    }, []); // Зависимости: пустой массив (функция создается только один раз)

    // useMemo: Мемоизированный список (только если список изменился)
    const memorizedList = useMemo(() => {
        console.log('List re-rendered'); // Для отслеживания ререндеринга списка
        return list.map((item) => (
            <li key={item.id} style={item.complited ? { textDecoration: 'line-through' } : {}}>
                {item.text}
                <button onClick={() => handleDel(item.id)}>delete</button>
                <button onClick={() => handleComplete(item.id)}>сделано</button>
            </li>
        ));
    }, [list, handleDel, handleComplete]); // Зависимости: list, handleDel, handleComplete


    return (
        <div>
            <input
                type="text"
                placeholder="Add new task"
                value={newTaskText}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {memorizedList}
            </ul>
        </div>
    );
};

const MeCount = () => {
    const [count, setCount] = useState(0)
    const handleDecrement = () => {
        setCount(prev=>prev-1)
    }
    const handleIncrement = () => {
        setCount(prev => prev+1)
    }
    return (
        <>
            {count}
            <button onClick={handleIncrement}> Increment</button>
            <button onClick= {handleDecrement}> Decrement</button>
        </>
    )
}



 function App () {
     return <>
       
      
         <MyList />
         <DarkLightStyle/>
           
     </>
 }

export default App
// export default () => <div>Hello!</div>
// print ("Hello, world!")
// # // элемент мигает через 2 сек
// # // import { useState, useEffect } from 'react'
// # // const Component = () => {
// # //     const [isVisible, setIsVisibal] = useState(true)
// # //     useEffect(() => {
// # //         let x = setInterval(() => { setIsVisibal((prev) => !prev) }, 2000)
// # 
// # //         return () => { clearInterval(x)}
// # //         },[])
// # //     return (
// # //         <>
// # //             {isVisible && <div>TestValue</div>}
// # //         </>
// # //     )
// # // }
// # // export default Component
// # // написать сонтролируемые и неконтролирауемые формы
// # // import {useState, useRef} from 'react'
// # // const NewComponent = () => {
// # //     const [value, setValue] = useState('')
// # //     const ref= useRef(null)
// # //     const handleChange = (e) => {
// # //         e.preventDefault()
// # //         setValue(e.target.value)
// # //     }
// # 
// # //     const onClickForm = () => {
// # //         console.log('controled:',value)
// # //         console.log('uncontroled:',ref.current.value,)
// # //     }
// # //     return (
// # //         <form onSubmit={onClickForm}>
// # //             <input placeholder='controlled' value={value} onChange={handleChange} />
// # //             <input ref={ref} placeholder="uncontoled" />
// # //             <button>Send</button>
// # //         </form>
// # //     )
// # // }
// # // export default NewComponent
// # // // export default () => <div>Hello!</div>
// # 
// # // написать по подсказкам hook
// # // import { useRef , useState, useEffect} from 'react'
// # 
// # // const useHover = () => {
// # //     const [isHovered, setIsHovered]=useState(null)
// # //     const ref = useRef()
// # //     useEffect(() => { 
// # //         const mOver = () => {
// # //             setIsHovered(true)
// # //         }
// # //         const mOut = () => {
// # //             setIsHovered(false)
// # //         }
// # //         ref.current.addEventListener('mouseover', mOver)
// # //         ref.current.addEventListener('mouseout',mOut)
// # //         return () => {
// # //             ref.current.removeListener('mouseover', mOver)
// # //             ref.current.removeListener('mouseout', mOut)
// # //         }
// # //     },[])
// # //     return { ref, isHovered }
// # // }
// # // function App() {
// # //     const { isHovered, ref } = useHover()
// # //     return (
// # //         <button ref= {ref}> {isHovered ? 'навели' :"убрали"} </button>
// # //     )
// # // }
// # 
// # 
// # import { useState, useEffect} from 'react';
// # 
// # function App() {
// #     return <>
// #         <Clock />;
// #         <ClockFunc />
// #         </>
// # 
// # }
// # 
// # class Clock extends React.Component {
// #     constructor(props) {
// #         super(props);
// #         props.sendToBack;
// #     }
// # 
// #     state = {
// #         date: new Date()
// #     }
// # 
// #     componentDidMount() {
// #         setInterval(() => {
// #             this.counter++
// #             this.setState({
// #                 date: new Date()
// #             });
// #         }, 1000);
// #     }
// #     counter = 0
// # 
// #     componentWillUnmount() {
// #         sendToBack(this.counter)
// #     }
// #     render() {
// #         return <>
// #             <div>
// #                 {this.state.date.toString()}</div>
// #         </>
// #     }
// # }
// # export default App
// # function ClockFunc() {
// #     const [date, setDate] = useState(new Date())
// #     useEffect(() => {
// #         let interval = setInterval(() => {
// #                 setDate(new Date());
// #         }, 1000);
// #         return ()=>clearInterval(interval)
// #         
// #     },[])
// #     return <>
// #         <div>
// #             {date.toString()}</div>
// #     </>
// # }
// #  
// # // export default App
// # // //Node.js
// # // // задержка ввода
// # // import { useEffect, useRef, useState } from 'react'
// # // 
// # // const [error, setError] = useState(null)
// # // const [isLoading, setIsLoading] = useState(false)
// # // const [searchTerm, setSearchTerm] = useState('');
// # // const [searchResults, setSearchResults] = useState([]);
// # // const inputRef = useRef(null);
// # // const timeoutRef = useRef(null);
// # // 
// # // 
// # // const fetchData = async (query) => {
// # //     setIsLoading(true);
// # //     setError(null)
// # //     try {
// # //         const respose = await fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`);
// # //         if (!respose.ok) {
// # //             throw new Error(`Error: ${respose.status}`)
// # //         }
// # //         const data = await respose.json()
// # //         setSearchResults(data)
// # //         
// # //     } catch (e) {
// # //         setError(e)
// # //         setSearchResults([])
// # //     } finally {
// # //         tIsLoading(false);
// # //     }
// # // }
// # // 
// # // 
// # // 
// # // 
// # // // console.log("Hello, world!");
// # // // import  { useCallback, useState, useEffect } from "react";
// # // // 
// # // // const url = "https://jsonplaceholder.typicode.com/users/1";
// # // // 
// # // // /** 
// # // // 
// # // //   // Sample Response
// # // // 
// # // //   {
// # // // 
// # // //     id: 1,
// # // // 
// # // //     name: "Leanne Graham",
// # // // 
// # // //     username: "Bret",
// # // // 
// # // //     email: "Sincere@april.biz",
// # // // 
// # // //     phone: "1-770-736-8031 x56442",
// # // // 
// # // //     website: "hildegard.org"
// # // // 
// # // //   }
// # // // 
// # // // **/
// # // // 
// # // // // вынести в отдельный хук
// # // // 
// # // // const useFetrchData = () => {
// # // //     const [error, setError] = useState()
// # // //     const [isLoading, setIsLoading] = useState(true)
// # // //     const [data, setData] = useState(null)
// # // // 
// # // //     useEffect(() => {
// # // //         const getData = async () => {
// # // //             setError(null)
// # // //             setIsLoading(true)
// # // // 
// # // //             try {
// # // //                 const result = await fetch(url)
// # // //                 if (!result.ok) {
// # // //                     throw new Error(`Http error! status: ${result.status}`)
// # // //                 }
// # // //                 const data = await result.json()
// # // //                 setData(data)
// # // // 
// # // //             } catch (e) {
// # // //                 setError(e)
// # // //             } finally {
// # // //                 setIsLoading(false)
// # // //             }
// # // //         }
// # // //         getData()
// # // //     },[])
// # // // 
// # // //     
// # // //     return {error,isLoading,userData:data}
// # // // }
// # // // 
// # // // function App() {
// # // // 
// # // //     const { error, isLoading, userData } = useFetrchData()
// # // //     console.log(userData)
// # // //     if (error) {
// # // //         return (<h1>Произошла ошибка</h1>)
// # // //     }
// # // // 
// # // //     if (isLoading) {
// # // //         return <h1>загрузка....</h1>
// # // //     }
// # // // 
// # // //     return (
// # // // 
// # // //         <div className="App">
// # // // 
// # // //             <h2>User Data</h2>
// # // // 
// # // //             <p>
// # // // 
// # // //                 <strong>Name: </strong>{" "}
// # // // 
// # // //                 {userData?.name }
// # // // 
// # // //             </p>
// # // // 
// # // //             <p>
// # // // 
// # // //                 <strong>Website: </strong>
// # // // 
// # // //                 {userData?.website || "(Need to populate website here)"}
// # // // 
// # // //             </p>
// # // // 
// # // //             <p>
// # // // 
// # // //                 <strong>Email: </strong>
// # // // 
// # // //                 {userData?.email || "(Need to populate email here)"}
// # // // 
// # // //             </p>
// # // // 
// # // //             <p>
// # // // 
// # // //                 <strong>Phone: </strong>
// # // // 
// # // //                 {userData?.phone || "(Need to populate phone here)"}
// # // // 
// # // //             </p>
// # // // 
// # // //         </div>
// # // // 
// # // //     );
// # // // 
// # // // }
// # // // 
// # // // export default App;
// # // 
// # // 
// # // // const obj = {
// # // // name: "Alice",
// # // //     greet: function() {
// # // //         console.log(`Hello, my name is ${this.name}`);
// # // //     }
// # // // };
// # // 
// # // // obj.greet(); // ЧHello, my name is alice
// # // 
// # // // function greet() {
// # // //     console.log(`Hello, my name is ${this.name}`);
// # // // }
// # // 
// # // // greet(); // Что будет выведено? Почему? //undefined
// # // 
// # // // const obj = { name: "Alice", greet: greet };
// # // // obj.greet(); // Что будет выведено теперь?/ alice
// # // // const person = {
// # // //     name: "Bob",
// # // //     address: {
// # // //         city: "New York",
// # // //         getCity: function () {
// # // //             console.log(`I live in ${this.city}`);
// # // //         }
// # // //     }
// # // // };
// # // 
// # // // person.address.getCity(); // Что будет выведено?/new Yourk
// # // // const person = {
// # // //     name: "Charlie",
// # // //     greet: function (greeting) {
// # // //         console.log(`${greeting}, my name is ${this.name}`);
// # // //     }
// # // // };
// # // 
// # // // const anotherPerson = { name: "David" };
// # // 
// # // // person.greet("Hi"); // Что будет выведено?/ jarli hi
// # // // person.greet.call(anotherPerson, "Hey"); // Что будет выведено?/david hey
// # // // person.greet.apply(anotherPerson, ["Greetings"]); // Что будет выведено?David Greetings
// # // 
// # // // const boundGreet = person.greet.bind(anotherPerson);
// # // // boundGreet("Yo"); // Что будет выведено? david yo
// # // 
// # // 
// # // 
// # // // const obj = {
// # // //     name: "Eve",
// # // //     greet: function () {
// # // //         const innerFunction = () => {
// # // //             console.log(`Hello, my name is ${this.name}`);
// # // //         };
// # // //         innerFunction();
// # // //     }
// # // // };
// # // 
// # // // obj.greet(); // Что будет выведено?/undefifned
// # // 
// # // // const obj2 = {
// # // //     name: "Frank",
// # // //     greet: () => {
// # // //         console.log(`Hello, my name is ${this.name}`);
// # // //     }
// # // // };
// # // 
// # // // obj2.greet(); // Что будет выведено?
// # // 