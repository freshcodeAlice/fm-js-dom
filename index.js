/* Node - вузол (узел) */

/*
1. З точки зору браузера ВСІ елементи на сторінці є об'єктами
2. Взаємодія з сторінкою породжує Події, подія - це об'єкт

*/

function getAlert(event) {
    console.log(event);
     event.target.style.display = 'none';
    event.target.removeEventListener('click', getAlert); // видалили обробку події
}

const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', getAlert); // Навісили обробку події 'click' на кнопку
buttonElement.addEventListener('click', sayHello);

function sayHello() {
    alert('hello');
}
