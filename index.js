/* Node - вузол (узел) */

/*
1. З точки зору браузера ВСІ елементи на сторінці є об'єктами
2. Взаємодія з сторінкою породжує Події, подія - це об'єкт

*/

function getAlert(event) {
    const btn = event.target;
    event.target.style.display = 'none';
   
}

const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', getAlert); // Навісили обробку події 'click' на кнопку

