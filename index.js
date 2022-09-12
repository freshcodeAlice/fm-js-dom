/* Node - вузол (узел) */

/*
1. З точки зору браузера ВСІ елементи на сторінці є об'єктами
2. Взаємодія з сторінкою породжує Події, подія - це об'єкт

*/



const form = document.getElementById('name-form');

form.addEventListener('submit', consoleForm);


function consoleForm(event){
    event.preventDefault();
    const form = event.target;
    const value = form[0].value;
   console.log(`Hello, ${value ? value : 'Anonym'}`);
}