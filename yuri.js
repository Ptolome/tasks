// (function () {
//     let isModified;
//     function modifyItemData(price, platform) {
//         price.rub = 5000;
//         platform = 'iOS';
//         isModified = true;

//         function printItemData() {
//             console.log(price); // { rub: 5000 }
//             console.log(platform); // 'iOS'
//             console.log(isModified); // null
//         }

//         return printItemData;
//     }

//     let price = { rub: 3500 };
//     let platform = 'Android';
//     isModified = false;

//     const printItemData = modifyItemData(price, platform, isModified);

//     console.log(price); // { rub: 5000 }
//     console.log(platform); // 'Android'
//     console.log(isModified); // true

//     price = { usd: 100 };
//     platform = 'Web';
//     isModified = null;

//     printItemData(); 
// })();


// const a = async function () {
//     console.log('1')
//     new Promise(res => res(console.log('2'))).then(() => console.log(3))
//     await console.log('4')
//     new Promise(res => res(console.log('5'))).then(() => console.log(6))
//     console.log('7')
// }

// setTimeout(() => console.log('8'), 0)
// a().then(() => console.log('9'))
// console.log('10')
//1 2 4 10 3 5 7 6 9 8

// /*
//  Написать альтернативную реализацию функции Array.prototype.reduce
//  Учесть 
//  1) Array.prototype.reduce2.call(null, () => {}) .... Called on null or undefined
//  2) Когда колбэк не функция
//  3) Пустой массив и нет инициирующего значения
// */

// Array.prototype.reduce2 = function (r_callback, init) {
//     let startIndex = 0

//     if (this === null || this === undefined || !Array.isArray(this)) {
//         throw new TypeError('Called on null or undefined');
//     }

//     if (typeof r_callback !== 'function') throw new TypeError('Not correct callback function');

//     if (init === undefined && this?.length === 0) throw new TypeError('Reduce of empty array with no initial value');

//     let result = init

//     if (init === undefined) {
//         result = this[0]
//         startIndex = 1
//     }

//     for (let i = startIndex; i < this.length; i++) {
//         result = r_callback(result, this[i], i, this)
//     }

//     return result;
// }


// const arr = [1, 2, 3];
// const res = arr.reduce2((acc, curr, index, arr) => {
//     return acc + curr;
// }, 0);
// console.log('res', res); // 6
// ////

// useEffect(() => {
//     console.log('a');
//     return () => {
//         console.log('b');
//     }
// });

// 'a'

// 'b' 'a'
// 'b' 'a'
// 'b' 'a'
// 'b' 'a'

// 'b'

// useEffect(() => {
//     console.log('a');
//     return () => {
//         console.log('b');
//     }
// }, []);

// 'a'

// 'b'

// useEffect(() => {
//     console.log('a', x, y, z);
//     return () => {
//         console.log('b', x, y, z);
//     }
// }, [x, y, z]);

// 'a'

// 'b' 'a'
// 'b' 'a'
// 'b' 'a'
// 'b' 'a'

// 'b'

// useEffect(() => {
//     webSocketConnect(`ws://url/${a}/${b}/${c}`)
//     return () => {
//         webSocketDisconnect(`ws://url/${a}/${b}/${c}`);
//     }
// }, [a, b, c])


// webSocketConnect

// webSocketDisconnect -> webSocketConnect
// webSocketDisconnect -> webSocketConnect
// webSocketDisconnect -> webSocketConnect
// webSocketDisconnect -> webSocketConnect

// webSocketDisconnect


// import { useCallback } from "react";
// import "./styles.css";

// // API
// // GET https://swapi.dev/api/people?search=skywalker&page=1
// // {
// //   next: string | null; //url
// //   results: Array({ name: string, url: string }); //max length 10 unique url
// // }

// // здесь fetch
// const getPeople = () => {};

// // дополнительное условие по вводу
// const debounce = (callback, delay) => {};

// export default function App() {
//   return (
//     <div className="App">
//       <Input />
//       <List />
//       <Pagination />
//     </div>
//   );
// }

// const Input = () => {
//   return <div>1) Запрашивать данные по вводу текста в input</div>;
// };

// const List = () => {
//   return (
//     <div>
//       2) Вывести список полученных данных(только name) + индикация состояния
//       загрузки
//     </div>
//   );
// };

// const Pagination = () => {
//   return (
//     <div>
//       3) Тут должна быть пагинация либо постраничная, либо
//       intersectionObserver/react window
//     </div>
//   );
// };
// // Отображение из API

// // 1) debounce
// // 2) const [isLoading, data, fetch, hasMore] = usePagination(value); "скайуокер"

// https://codesandbox.io/p/sandbox/fetchapitin-rhvqhq?file=%2Fsrc%2FApp.tsx


{/* <html>
  <!-- 
// Условие задачи:

// На каждый клик на кнопку:

// Показать на экране картинку размером 500 x 150, доступную по ссылке https://random.imagecdn.app/500/150.jpg.

// При повторном клике должна показаться новая картинка вместо старой.

// До момента загрузки показывать плейсхолдер размером с картинку(например, прямоугольник 500 x 150 зеленого цвета).

// В случае ошибки загрузки показать плейсхолдер ошибки(например, прямоугольник 500 x 150 красного цвета).

// В случае успешной загрузки нужно вывести console.log с текстом, что картинка загрузилась.
-->

  <head>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <main>
      <div id="image-container"></div>
      <button id="image-loading-button">Load Image</button>
    </main>
    <script>
      const button = document.getElementById("image-loading-button");
      const imageContainer = document.getElementById("image-container");

      button.addEventListener("click", () => {
        // Создаем плейсхолдер для загрузки
        const placeholder = document.createElement("div");
        placeholder.style.width = "500px";
        placeholder.style.height = "150px";
        placeholder.style.backgroundColor = "green";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(placeholder);

        // Создаем новый элемент изображения
        const img = new Image();
        img.src =
          "https://fastly.picsum.photos/id/693/500/150.jpg?hmac=aCykF09zC_N7jayI7k_cNUfzCsc7nWN-xMISAy5yI-s";

        img.onload = () => {
          imageContainer.innerHTML = "";
          imageContainer.appendChild(img);
          console.log("Картинка загрузилась");
        };

        img.onerror = () => {
          const errorPlaceholder = document.createElement("div");
          errorPlaceholder.style.width = "500px";
          errorPlaceholder.style.height = "150px";
          errorPlaceholder.style.backgroundColor = "red";
          imageContainer.innerHTML = "";
          imageContainer.appendChild(errorPlaceholder);
        };
      });
    </script>
  </body>
</html>


/ Условие задачи: */}

// Напишите функцию retryFetch поверх fetch API, которая отправляет запрос в случае неудачи N раз.
// Функция принимает те же параметры, что и fetch, плюс количество попыток, и возвращает Promise.

// Если метод запроса PUT, то повторных запросов не разрешаем.

// Если пользователь HEABTOPM3ОBAH или у него нет прав, то повторный запрос не делаем.

// Если количество попыток закончилось, то вернуть последнюю ошибку в reject.

// Пример кода:

function retryFetch(url, { method, headers }, attempts = 1) {
    return new Promise((resolve, reject) => {
        const fetchAttempt = (attemptsLeft) => {
            fetch(url, { method, headers })
                .then(response => {
                  if (response.ok) {
                    resolve(response); // Успешный ответ - разрешаем Promise
                  } else {
                    // Обработка ошибок HTTP
                    if (response.status === 403 || response.status === 401) { // HEABTOPM3ОBAH или нет прав
                      console.error(`Ошибка ${response.status}: доступ запрещен. Повторные попытки не выполняются.`);
                      reject(new Error(`Ошибка ${response.status}: доступ запрещен`));
                    } else {
                      if (attemptsLeft > 1 && method.toUpperCase() !== 'PUT') { // Проверка PUT и количества попыток
                        console.log(`попытка № ${attempts - attemptsLeft + 1} не удалась. Осталось ${attemptsLeft - 1} попыток.`);
                        fetchAttempt(attemptsLeft - 1); // Рекурсивный вызов для повторной попытки
                      } else {
                        console.error("Все попытки не удались, или метод PUT:", response.status);
                        reject(new Error(`Все попытки не удались, или метод PUT. Status: ${response.status}`)); // Отклоняем Promise
                      }
                    }
                  }

                })
                .catch(error => {
                    if(attempts>1){
                      console.log(`попытка № ${attempts} не удалась`);
                      fetchAttempt(attemptsLeft - 1);
                    } else {
                      console.error("Все попытки не удались:", error);
                        reject(error);
                    }
                    
                });
        };

        fetchAttempt(attempts);
    });
}

retryFetch(url, { method: 'GET', headers: { Authorization: 'Bearer token' } }, 3);