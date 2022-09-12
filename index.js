/* Node - вузол (узел) */

/*
1. З точки зору браузера ВСІ елементи на сторінці є об'єктами
2. Взаємодія з сторінкою породжує Події, подія - це об'єкт

*/

function getAlert() {
    alert('Hello, user');
}

const buttonElement = document.getElementById('btn');
console.dir(buttonElement);
buttonElement.addEventListener('click', getAlert); // Навісили обробку події 'click' на кнопку

/*
Зробіть кнопку, додайте їй id, напишіть функцію, яка виводить в консоль "привіт"
навісити обробку події наведення миші на цю кнопку

*/

function consoleHello() {
    console.log('Hello')
}

const secondButton = document.getElementById('second-btn');
secondButton.addEventListener('mouseover', consoleHello);