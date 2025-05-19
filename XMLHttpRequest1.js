// let xhr = new XMLHttpRequest();

// xhr.open('GET', '/article/xmlhttprequest/example/json');

// xhr.responseType = 'json';

// xhr.send();

// // тело ответа {"сообщение": "Привет, мир!"}
// xhr.onload = function() {
//   let responseObj = xhr.response;
//   alert(responseObj.message); // Привет, мир!
// };

// запись в файл js работает работает только в node

var fs=require('fs')
fs.writeFile('message.txt', 'hello node.js', (err)=> {
  if (err) throw err;
  console.log('the file was been saved');
})