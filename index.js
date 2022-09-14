/*
1. Маємо div
2. Маємо дві кнопки - на одній написано "Зробити червоним", на другій - "Зробити зеленим".
3. За натиснення на кнопку фоновий колір оцього діва змінюється на відповідний колір, вказаний на кнопці


*/
/*
const div = document.querySelector('.box');
const classList = div.classList;
const [red, green] = document.querySelectorAll('.btn');

red.addEventListener('click', () => {
    classList.toggle('red-little');
})

green.addEventListener('click', () => {
    classList.toggle('green-big');
})



 */


/*
Створіть інпут, який при втраті фокусу (подія blur) виводити в сусідньому div квадрат числа, який був введений у інпут


*/



const input = document.querySelector('input');


function blurHandler(event) {
    const value = event.target.value;
    const number = Number(value);
    const div = document.querySelector('#root');
    if(Number.isNaN(number)) {
        div.textContent = 'Input must be a number';
        return;
    } 
    div.textContent = number*number;
}

input.addEventListener('blur', blurHandler);