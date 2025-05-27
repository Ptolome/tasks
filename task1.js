Array.prototype.findUnique = function () {
  const result = new Map();
  this.forEach((element) => {
    result.has(element)
      ? result.set(element, result.get(element) + 1)
      : result.set(element, 1);
  });

  return [...result.entries()]
    .filter((item) => item[1] === 1)
    .map((item) => item[0]);
};

console.log([10, 5, 10, 0, 6, 7, 2, 9, 9].findUnique()); //NEW ARRAY [5,0,7,2]

// 1) ?. (Optional Chaining)
// Optional chaining — это оператор, который позволяет безопасно обращаться к вложенным свойствам объектов.
// Если какое-либо свойство на пути не существует, вместо ошибки будет возвращено undefined.

// Пример:

// const user = {
//     name: 'Alice',
//     address: {
//         city: 'Wonderland'
//     }
// };

// console.log(user.address?.city); // 'Wonderland'
// console.log(user.address?.zipcode); // undefined

// 2) ... (Spread Operator)
// Spread operator позволяет развернуть элементы массива или свойства объекта. Это полезно для копирования массивов или объектов,
//  а также для объединения их.

// Пример:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // Копирование массива
// const arrCopy = [...arr1]; // [1, 2, 3]

// // Объединение массивов
// const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 3) ?? (Nullish Coalescing Operator)
// Nullish coalescing operator возвращает правый операнд, если левый равен null или undefined.
// Это полезно для задания значений по умолчанию.

// Пример:

// const value = null;
// const defaultValue = value ?? 'default'; // 'default'

// const anotherValue = 0;
// const anotherDefaultValue = anotherValue ?? 42; // 0 (поскольку 0 не null или undefined)
// 4) structuredClone(bar)
// structuredClone — это метод, который позволяет создавать глубокую копию объектов, включая сложные структуры данных, такие как массивы, объекты, карты и наборы. Он поддерживает клонирование объектов, которые содержат циклические ссылки.

// Пример:

// const original = { name: 'Alice', meta: { age: 30 } };
// const clone = structuredClone(original);

// console.log(clone); // { name: 'Alice', meta: { age: 30 } }

// 5) someArray.at()
// Метод at() позволяет получить элемент массива по его индексу, включая отрицательные индексы для доступа к элементам с конца массива.

// Пример:

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.at(0)); // 1
// console.log(arr.at(-1)); // 5 (последний элемент)

// 6) &&=
// Logical AND assignment operator (&&=) — это оператор, который присваивает значение правого операнда левому, если левый операнд истинный (truthy). Это удобно для установки значений на основе условия.

// Пример:

// let x = true;
// x &&= false; // x будет false, так как x истинный

// let y = false;
// y &&= true; // y останется false, так как y ложный

const run = () => {
  {
    const { foo, bar } = { foo: 1, bar: 2 };
    console.log("1)", { foo, bar }); //{foo:1,bar:2}
    // Здесь обычная деструктуризация объекта.
    // Переменные foo и bar получают значения из соответствующих свойств объекта.
    // Вывод: {foo: 1, bar: 2} — ожидаемо.
  }
  {
    const { foo: bar, bar: foo } = { foo: 1, bar: 2 };
    console.log("2)", { foo, bar }); //2) { foo: 2, bar: 1 }
    //         Здесь происходит переименование при деструктуризации:
    // Свойство foo объекта присваивается переменной bar.
    // Свойство bar объекта присваивается переменной foo.
    // В итоге:
    // foo = 2
    // bar = 1
    // Вывод: {foo: 2, bar: 1}
  }
  {
    const {
      foo: [bar],
      bar: foo,
    } = { foo: [1], bar: [2] };
    console.log("3)", { foo, bar }); // { foo: [ 2 ], bar: 1 }
    //     Разберём по частям:
    // foo: [bar] — из свойства foo (которое массив [1]) берётся первый элемент и присваивается переменной bar. Значит bar = 1.
    // bar: foo — свойство bar (массив [2]) присваивается переменной foo.
    // Итог:
    // foo = [2]
    // bar = 1
    // Вывод: {foo: [2], bar: 1}
  }
  {
    const {
      foo: [bar],
      bar: foo,
    } = { foo: [1], bar: [{ baz: 3 }] };
    console.log("4)", { foo, bar }); //4) { foo: [ { baz: 3 } ], bar: 1 }
    //     Аналогично блоку 3, но теперь:
    // foo: [bar] — из массива [1] берём первый элемент 1 → bar = 1.
    // bar: foo — свойство bar — массив с объектом [{baz: 3}] → foo = [{baz: 3}].
    // Вывод: {foo: [{baz: 3}], bar: 1}
  }
  {
    const {
      foo: [bar],
      bar: [{ baz: foo }],
    } = { foo: [1], bar: [{ baz: 3 }] };
    console.log("5)", { foo, bar }); //5) { foo: 3, bar: 1 }
    //     Здесь деструктуризация чуть глубже:
    // foo: [bar] — из foo (массив [1]) берём первый элемент → bar = 1.
    // bar: [{baz: foo}] — из bar (массив с объектом [{baz: 3}]) берём первый элемент (объект) и из него берём свойство baz, которое присваиваем переменной foo → foo = 3.
    // Итог:
    // foo = 3
    // bar = 1
    // Вывод: {foo: 3, bar: 1}
  }
};
run();
