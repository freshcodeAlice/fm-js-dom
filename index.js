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


const btn = document.querySelector('button');

const eventHandler = (event) => {
    console.dir(event.currentTarget); //той, кому належить eventListener
    console.dir(event.target); // той, на кому спрацювала подія
}

window.addEventListener('click', eventHandler);

/*
3 фази події:

1. Фаза занурення. Подія стається на рівні ОС, ОС передає її браузеру (Window), той передає document -> body -> ..... -> елемент, на якому сталася подія

2. Фаза цілі. Подія досягла елемента, елемент - це таргет

3. Фаза сплиття. Подія починає спливати у зворотньому напрямку, тобто від елемента до браузера.


*/


// const event = new MouseEvent('click');
// btn.dispatchEvent(event);