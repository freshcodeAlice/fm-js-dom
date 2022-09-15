// 1. Створити новий елемент
const div = document.createElement('div'); 
// 2. Приєднати новий елемент до будь-якого існуючого на сторінці батьківського елемента
const body = document.body;
div.append('Hello, JS');
div.append('Another text');
body.append(div);


/*
Створити картинку і вставити її в div

*/


const img = document.createElement('img');
img.setAttribute('src', './images/pict.jpg');
img.classList.add('picture');
div.append(img);